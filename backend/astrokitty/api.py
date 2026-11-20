"""Astro Kitty online services (FastAPI).

    uvicorn astrokitty.api:app --reload      # from the backend/ folder

Serves the game from ../dist as well, so one command runs everything locally.
"""
from __future__ import annotations

import asyncio
import datetime as dt
import hashlib
import json
import os
import secrets
import string
import time
from collections import defaultdict
from functools import lru_cache
from pathlib import Path

from fastapi import Depends, FastAPI, Header, HTTPException, Query, Request, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
from sqlalchemy import func, select

from . import adaptive, crew, diary, dhrubo, quizzes, sky
from . import levels as lv
from .db import Classroom, LevelResult, Player, QuizResult, make_session_factory
from .kittycode import KittyCodeError, parse, run, to_tree
from .names import make_name

DIST = Path(__file__).resolve().parents[2] / "dist"
CODE_ALPHABET = "".join(c for c in string.ascii_uppercase + string.digits if c not in "O0I1L")


def hash_secret(value: str) -> str:
    return hashlib.sha256(value.encode()).hexdigest()


@lru_cache(maxsize=1)
def all_levels() -> dict[str, dict]:
    return {level["id"]: level for level in lv.build_all()}


@lru_cache(maxsize=8)
def daily_for(day: str) -> dict:
    return lv.daily_level(dt.date.fromisoformat(day))


def today() -> str:
    return dt.datetime.now(dt.timezone.utc).date().isoformat()


class RateLimiter:
    """Small in-memory limiter: at most `limit` calls per `window` seconds per key."""

    def __init__(self, limit: int, window: float):
        self.limit, self.window = limit, window
        self.calls: dict[str, list[float]] = defaultdict(list)

    def allow(self, key: str) -> bool:
        cutoff = time.monotonic() - self.window
        calls = [t for t in self.calls[key] if t > cutoff]
        allowed = len(calls) < self.limit
        if allowed:
            calls.append(time.monotonic())
        self.calls[key] = calls
        return allowed


# --- request bodies --------------------------------------------------------
class JoinBody(BaseModel):
    class_code: str | None = Field(default=None, max_length=8)


class ClassBody(BaseModel):
    name: str = Field(default="My class", max_length=60)


class CodeBody(BaseModel):
    code: str = Field(max_length=4000)


class QuizBody(BaseModel):
    answers: dict[str, bool | int | list[int]]


class AskBody(BaseModel):
    question: str = Field(max_length=600)
    history: list[dict] = Field(default_factory=list, max_length=12)


def create_app(database_url: str | None = None, serve_dist: bool | None = None, ai_client=None,
               tle_loader=None) -> FastAPI:
    app = FastAPI(title="Astro Kitty API", version="1.0")
    Session = make_session_factory(database_url)
    origins = [o.strip() for o in os.environ.get("ALLOWED_ORIGINS", "*").split(",") if o.strip()]
    app.add_middleware(CORSMiddleware, allow_origins=origins, allow_methods=["*"], allow_headers=["*"])
    ask_limit = RateLimiter(limit=int(os.environ.get("DHRUBO_PER_HOUR", "30")), window=3600)
    tle_cache: dict = {}
    rooms: dict[str, crew.Base] = {}
    sockets: dict[str, dict[str, WebSocket]] = defaultdict(dict)

    def db():
        with Session() as session:
            yield session

    def current_player(authorization: str = Header(default=""), session=Depends(db)) -> Player:
        token = authorization.removeprefix("Bearer ").strip()
        player = session.scalar(select(Player).where(Player.token_hash == hash_secret(token))) if token else None
        if not player:
            raise HTTPException(401, "Join the game first to get your kitty name.")
        return player

    def optional_player(authorization: str = Header(default=""), session=Depends(db)) -> Player | None:
        token = authorization.removeprefix("Bearer ").strip()
        return session.scalar(select(Player).where(Player.token_hash == hash_secret(token))) if token else None

    def find_class(session, code: str | None) -> Classroom | None:
        if not code:
            return None
        room = session.scalar(select(Classroom).where(Classroom.code == code.strip().upper()))
        if not room:
            raise HTTPException(404, "No class with that code. Check with your teacher!")
        return room

    def player_view(p: Player) -> dict:
        return {"id": p.id, "kitty_name": p.kitty_name,
                "class": {"code": p.classroom.code, "name": p.classroom.name} if p.classroom else None,
                "mastery": p.mastery or {}, "learning": adaptive.summary(p.mastery or {})}

    def learn(session, player: Player, observations: list[tuple[str, bool]]) -> None:
        player.mastery = adaptive.apply(player.mastery or {}, observations)
        session.add(player)

    # --- health & players --------------------------------------------------
    @app.get("/api/health")
    def health():
        return {"ok": True, "ai": bool(os.environ.get("ANTHROPIC_API_KEY")) or ai_client is not None,
                "levels": len(all_levels()), "today": today()}

    @app.post("/api/players")
    def join(body: JoinBody, session=Depends(db)):
        room = find_class(session, body.class_code)
        taken = set(session.scalars(select(Player.kitty_name)))
        token = secrets.token_urlsafe(32)
        player = Player(token_hash=hash_secret(token), kitty_name=make_name(taken),
                        classroom_id=room.id if room else None, mastery={})
        session.add(player)
        session.commit()
        session.refresh(player)
        return {"token": token, "player": player_view(player)}

    @app.get("/api/players/me")
    def me(player: Player = Depends(current_player)):
        return player_view(player)

    @app.post("/api/players/me/class")
    def join_class(body: JoinBody, player: Player = Depends(current_player), session=Depends(db)):
        room = find_class(session, body.class_code)
        player.classroom_id = room.id if room else None
        session.add(player)
        session.commit()
        session.refresh(player)
        return player_view(player)

    # --- Kitty Code ----------------------------------------------------------
    @app.get("/api/levels")
    def levels():
        return {"worlds": lv.WORLDS, "levels": [lv.public(level) for level in all_levels().values()]}

    @app.get("/api/daily")
    def daily():
        return lv.public(daily_for(today()))

    @app.get("/api/levels/remix")
    def remix(world: int = Query(1, ge=1, le=7)):
        # A brand-new practice level: same idea as the world, a map nobody has seen.
        return lv.public(lv.remix(world, secrets.token_hex(4)))

    @app.post("/api/levels/{level_id}/submit")
    def submit_level(level_id: str, body: CodeBody, player: Player = Depends(current_player), session=Depends(db)):
        if level_id.startswith("daily-"):
            if level_id != f"daily-{today()}":
                raise HTTPException(400, "That Daily Challenge is over. Try today's!")
            level = daily_for(today())
        else:
            level = all_levels().get(level_id)
        if not level:
            raise HTTPException(404, "Unknown level")
        result = run(body.code, level["map"], level["par"], level.get("battery"))  # the server re-runs the program
        result.pop("trace")
        best = session.scalar(select(LevelResult).where(LevelResult.player_id == player.id,
                                                        LevelResult.level_id == level_id))
        improved = False
        if result["status"] == "success":
            key = (result["stars"], -result["commands"], -result["steps"])
            if not best or key > (best.stars, -best.commands, -best.steps):
                improved = True
                if not best:
                    best = LevelResult(player_id=player.id, level_id=level_id)
                best.stars, best.commands, best.steps, best.code = result["stars"], result["commands"], result["steps"], body.code
                best.created = dt.datetime.now(dt.timezone.utc)
                session.add(best)
        if result["status"] != "error" and level.get("world"):
            learn(session, player, [(adaptive.WORLD_SKILLS[level["world"]], result["status"] == "success")])
        session.commit()
        return {"result": result, "saved": improved, "best": {"stars": best.stars, "commands": best.commands} if best else None}

    @app.post("/api/robot/compile")
    def robot_compile(body: CodeBody):
        try:
            program = parse(body.code)
        except KittyCodeError as err:
            raise HTTPException(400, err.as_dict()) from err
        return {"program": to_tree(program)}

    # --- quizzes -------------------------------------------------------------
    @app.get("/api/quizzes/{part}")
    def get_quiz(part: str, player: Player | None = Depends(optional_player)):
        bank = quizzes.load_bank()
        if part not in bank["parts"]:
            raise HTTPException(404, "Unknown quiz")
        chosen = quizzes.pick(part, player.mastery if player else None)
        return {"part": part, "title": bank["parts"][part]["title"], "questions": chosen}

    @app.post("/api/quizzes/{part}/submit")
    def submit_quiz(part: str, body: QuizBody, player: Player = Depends(current_player), session=Depends(db)):
        if part not in quizzes.load_bank()["parts"]:
            raise HTTPException(404, "Unknown quiz")
        scored = quizzes.score(part, body.answers)
        if scored["total"] == 0:
            raise HTTPException(400, "No answers to check")
        session.add(QuizResult(player_id=player.id, part=part, correct=scored["correct"], total=scored["total"],
                               stars=scored["stars"], results=scored["results"]))
        learn(session, player, [(r["skill"], r["correct"]) for r in scored["results"]])
        session.commit()
        return {**scored, "learning": adaptive.summary(player.mastery)}

    # --- leaderboards ----------------------------------------------------------
    def totals(session, player_ids: list[str]) -> dict[str, int]:
        if not player_ids:
            return {}
        level_stars = dict(session.execute(
            select(LevelResult.player_id, func.sum(LevelResult.stars))
            .where(LevelResult.player_id.in_(player_ids), ~LevelResult.level_id.startswith("daily-"))
            .group_by(LevelResult.player_id)).all())
        best_quiz = (select(QuizResult.player_id, QuizResult.part, func.max(QuizResult.stars).label("s"))
                     .where(QuizResult.player_id.in_(player_ids))
                     .group_by(QuizResult.player_id, QuizResult.part).subquery())
        quiz_stars = dict(session.execute(select(best_quiz.c.player_id, func.sum(best_quiz.c.s))
                                          .group_by(best_quiz.c.player_id)).all())
        return {pid: int(level_stars.get(pid) or 0) + int(quiz_stars.get(pid) or 0) for pid in player_ids}

    @app.get("/api/leaderboard/class/{code}")
    def class_board(code: str, session=Depends(db)):
        room = find_class(session, code)
        players = list(session.scalars(select(Player).where(Player.classroom_id == room.id)))
        stars = totals(session, [p.id for p in players])
        rows = sorted(({"kitty_name": p.kitty_name, "stars": stars[p.id]} for p in players),
                      key=lambda r: (-r["stars"], r["kitty_name"]))
        return {"class": room.name, "rows": [{"rank": i + 1, **r} for i, r in enumerate(rows)]}

    @app.get("/api/leaderboard/daily")
    def daily_board(day: str | None = None, session=Depends(db)):
        day = day or today()
        rows = session.execute(
            select(Player.kitty_name, LevelResult.stars, LevelResult.commands, LevelResult.steps)
            .join(Player, Player.id == LevelResult.player_id)
            .where(LevelResult.level_id == f"daily-{day}")
            .order_by(LevelResult.stars.desc(), LevelResult.commands, LevelResult.steps, LevelResult.created)
            .limit(100)).all()
        return {"day": day, "rows": [{"rank": i + 1, "kitty_name": r[0], "stars": r[1], "commands": r[2], "steps": r[3]}
                                     for i, r in enumerate(rows)]}

    # --- teachers ----------------------------------------------------------------
    @app.post("/api/classes")
    def create_class(body: ClassBody, session=Depends(db)):
        for _ in range(20):
            code = "".join(secrets.choice(CODE_ALPHABET) for _ in range(6))
            if not session.scalar(select(Classroom).where(Classroom.code == code)):
                break
        key = secrets.token_urlsafe(24)
        room = Classroom(code=code, name=body.name.strip() or "My class", teacher_key_hash=hash_secret(key))
        session.add(room)
        session.commit()
        return {"code": code, "name": room.name, "teacher_key": key}

    @app.get("/api/classes/{code}/insights")
    def insights(code: str, x_teacher_key: str = Header(default=""), session=Depends(db)):
        room = find_class(session, code)
        if not x_teacher_key or not secrets.compare_digest(hash_secret(x_teacher_key), room.teacher_key_hash):
            raise HTTPException(403, "Teacher key needed")
        players = list(session.scalars(select(Player).where(Player.classroom_id == room.id)))
        ids = [p.id for p in players]
        skills: dict[str, list[float]] = defaultdict(list)
        for p in players:
            for skill, value in (p.mastery or {}).items():
                skills[skill].append(value)
        questions: dict[str, list[bool]] = defaultdict(list)
        parts: dict[str, list[int]] = defaultdict(list)
        for q in session.scalars(select(QuizResult).where(QuizResult.player_id.in_(ids))) if ids else []:
            parts[q.part].append(q.correct * 100 // max(q.total, 1))
            for r in q.results:
                questions[r["id"]].append(bool(r["correct"]))
        worlds: dict[int, int] = defaultdict(int)
        for level_id, in session.execute(select(LevelResult.level_id).where(LevelResult.player_id.in_(ids))) if ids else []:
            if level_id.startswith("w"):
                worlds[int(level_id[1:].split("-")[0])] += 1
        bank = {q["id"]: q for q in quizzes.load_bank()["questions"]}
        hardest = sorted(((qid, sum(v) / len(v), len(v)) for qid, v in questions.items()), key=lambda t: t[1])[:5]
        stars = totals(session, ids)
        return {
            "class": {"code": room.code, "name": room.name, "players": len(players)},
            "skills": {s: round(sum(v) / len(v), 2) for s, v in sorted(skills.items())},
            "needs_practice": [s for s, v in skills.items() if sum(v) / len(v) < 0.5],
            "quiz_average": {p: round(sum(v) / len(v)) for p, v in parts.items()},
            "hardest_questions": [{"id": qid, "question": bank.get(qid, {}).get("q", {}).get("en", qid),
                                   "percent_right": round(rate * 100), "answers": n} for qid, rate, n in hardest],
            "levels_finished_by_world": dict(sorted(worlds.items())),
            "players": sorted(({"kitty_name": p.kitty_name, "stars": stars[p.id],
                                "practice": adaptive.summary(p.mastery or {})["practice"][:3]} for p in players),
                              key=lambda r: -r["stars"]),
        }

    # --- AI Dhrubo -----------------------------------------------------------------
    @app.post("/api/dhrubo/ask")
    async def ask(body: AskBody, request: Request, player: Player | None = Depends(optional_player)):
        key = player.id if player else (request.client.host if request.client else "anon")
        if not ask_limit.allow(key):
            lang = dhrubo.language_of(body.question)
            return {"answer": {"en": "Dhrubo needs a little rest. Try again a bit later!",
                               "bn": "ধ্রুবর একটু বিশ্রাম দরকার। একটু পরে আবার চেষ্টা করো!"}[lang], "mode": "rest"}
        summary = adaptive.summary(player.mastery or {}) if player else None
        return await dhrubo.ask(body.question, body.history, summary, client=ai_client)

    # --- sky & NASA ------------------------------------------------------------------
    @app.get("/api/sky/mars")
    def mars(lat: float = Query(22.82, ge=-90, le=90), lon: float = Query(89.55, ge=-180, le=180)):
        return {"mars": sky.mars_in_sky(lat, lon), "windows": sky.launch_windows(count=3)}

    @app.get("/api/sky/mars-time")
    def mars_time(lon: float = Query(184.0, ge=-360, le=360)):
        # Default longitude: Arcadia Planitia, where the Mars Colony's home base sits.
        return sky.mars_clock(lon_east=lon)

    @app.get("/api/sky/iss")
    def iss(lat: float = Query(22.82, ge=-90, le=90), lon: float = Query(89.55, ge=-180, le=180)):
        fresh = tle_cache.get("at", 0) > time.time() - 6 * 3600
        if not fresh:
            try:
                tle_cache["tle"] = (tle_loader or sky.fetch_iss_tle)()
                tle_cache["at"] = time.time()
            except Exception as err:
                if "tle" not in tle_cache:
                    raise HTTPException(503, "Can't reach the ISS tracker right now") from err
        return {"passes": sky.iss_passes(tle_cache["tle"], round(lat, 2), round(lon, 2))}

    @app.get("/api/feed")
    def feed():
        path = DIST / "data" / "nasa-feed.json"
        return json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}

    # --- My Mars Diary ------------------------------------------------------------------
    @app.get("/api/players/me/diary.pdf")
    def diary_pdf(player: Player = Depends(current_player), session=Depends(db)):
        level_rows = [{"id": r.level_id, "stars": r.stars} for r in
                      session.scalars(select(LevelResult).where(LevelResult.player_id == player.id))]
        best: dict[str, QuizResult] = {}
        for q in session.scalars(select(QuizResult).where(QuizResult.player_id == player.id)):
            if q.part not in best or q.stars > best[q.part].stars:
                best[q.part] = q
        quiz_rows = [{"part": q.part, "correct": q.correct, "total": q.total, "stars": q.stars} for q in best.values()]
        code = hash_secret(f"{player.id}-certificate")[:10].upper()
        pdf = diary.render(player.kitty_name, level_rows, quiz_rows, player.mastery or {}, code)
        return Response(pdf, media_type="application/pdf",
                        headers={"Content-Disposition": 'attachment; filename="my-mars-diary.pdf"'})

    # --- crew co-op ----------------------------------------------------------------------
    @app.post("/api/crew")
    def new_room():
        for _ in range(20):
            code = "".join(secrets.choice(CODE_ALPHABET) for _ in range(5))
            if code not in rooms:
                break
        rooms[code] = crew.Base(seed=secrets.randbelow(10**9))
        return {"room": code}

    async def broadcast(code: str) -> None:
        base = rooms.get(code)
        for pid, ws in list(sockets[code].items()):
            try:
                await ws.send_json({"type": "state", "state": base.view(pid)})
            except Exception:
                sockets[code].pop(pid, None)

    async def earth_reply(code: str, minutes: float) -> None:
        # Real Earth-Mars light time, sped up: one real minute becomes one second.
        await asyncio.sleep(min(minutes * 2, 50))  # there and back
        for ws in list(sockets[code].values()):
            try:
                await ws.send_json({"type": "earth", "minutes": round(minutes, 1),
                                    "text": {"en": "Mission Control: Message received. You are doing great, crew!",
                                             "bn": "মিশন কন্ট্রোল: বার্তা পেয়েছি। দারুণ করছ, দল!"}})
            except Exception:
                pass

    @app.websocket("/api/crew/{code}")
    async def crew_socket(ws: WebSocket, code: str, token: str = "", role: str = ""):
        code = code.upper()
        with Session() as session:
            player = session.scalar(select(Player).where(Player.token_hash == hash_secret(token))) if token else None
        await ws.accept()
        if not player or code not in rooms:
            await ws.send_json({"type": "error", "message": "Room not found or not signed in."})
            await ws.close()
            return
        base = rooms[code]
        try:
            base.join(player.id, player.kitty_name, role or None)
        except ValueError as err:
            await ws.send_json({"type": "error", "message": str(err)})
            await ws.close()
            return
        sockets[code][player.id] = ws
        await broadcast(code)
        try:
            while True:
                msg = await ws.receive_json()
                kind = msg.get("type")
                try:
                    if kind == "start":
                        base.start()
                    elif kind == "choose":
                        base.choose(player.id, str(msg.get("action")))
                    elif kind == "say":
                        # Only preset messages: kids can't type free text to each other.
                        if msg.get("message") in crew.MESSAGES:
                            for other in list(sockets[code].values()):
                                await other.send_json({"type": "say", "from": player.kitty_name,
                                                       "message": crew.MESSAGES[msg["message"]]})
                        continue
                    elif kind == "call_earth":
                        minutes = sky.light_delay_minutes()
                        await ws.send_json({"type": "earth_sent", "minutes": round(minutes, 1)})
                        asyncio.create_task(earth_reply(code, minutes))
                        continue
                    else:
                        continue
                except ValueError as err:
                    await ws.send_json({"type": "error", "message": str(err)})
                    continue
                await broadcast(code)
        except WebSocketDisconnect:
            pass
        finally:
            sockets[code].pop(player.id, None)
            base.leave(player.id)
            if not base.members:
                rooms.pop(code, None)
                sockets.pop(code, None)
            else:
                await broadcast(code)

    # --- the game itself -------------------------------------------------------------------
    if serve_dist if serve_dist is not None else os.environ.get("SERVE_DIST", "1") == "1":
        if DIST.exists():
            app.mount("/", StaticFiles(directory=DIST, html=True), name="game")
    else:
        @app.get("/")
        def root():
            return FileResponse(DIST / "index.html") if DIST.exists() else {"ok": True}

    return app


app = create_app()
