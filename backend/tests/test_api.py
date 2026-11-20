import asyncio
import datetime as dt
from types import SimpleNamespace

import pytest
from fastapi.testclient import TestClient

from astrokitty import dhrubo, levels, nasa_feed, quizzes
from astrokitty.api import create_app

TLE = ("1 25544U 98067A   24001.50000000  .00016717  00000-0  30306-3 0  9993",
       "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.49815800431236")


class FakeMessages:
    def __init__(self, text="Mars is red because of rusty dust!", stop="end_turn"):
        self.text, self.stop, self.calls = text, stop, []

    async def create(self, **kwargs):
        self.calls.append(kwargs)
        return SimpleNamespace(stop_reason=self.stop, content=[SimpleNamespace(type="text", text=self.text)])


def fake_client(**kw):
    messages = FakeMessages(**kw)
    return SimpleNamespace(beta=SimpleNamespace(messages=messages)), messages


@pytest.fixture
def client():
    ai, _ = fake_client()
    app = create_app("sqlite://", serve_dist=False, ai_client=ai, tle_loader=lambda: TLE)
    return TestClient(app)


def join(client, code=None):
    r = client.post("/api/players", json={"class_code": code})
    assert r.status_code == 200
    return r.json()["token"], {"Authorization": f"Bearer {r.json()['token']}"}


def test_join_gives_kitty_name_and_no_personal_data(client):
    r = client.post("/api/players", json={})
    body = r.json()
    assert body["player"]["kitty_name"].endswith("Kitty") or "Kitty" in body["player"]["kitty_name"]
    assert set(body["player"]) == {"id", "kitty_name", "class", "mastery", "learning"}
    assert client.get("/api/players/me").status_code == 401


def test_level_submission_is_verified_on_server(client):
    _, auth = join(client)
    good = client.post("/api/levels/w1-1/submit", json={"code": "MOVE 3"}, headers=auth).json()
    assert good["result"]["stars"] == 3 and good["saved"]
    # Claiming a win with code that doesn't work earns nothing.
    bad = client.post("/api/levels/w1-2/submit", json={"code": "MOVE 1"}, headers=auth).json()
    assert bad["result"]["status"] == "not_home" and not bad["saved"]
    # A worse run never replaces a better best.
    again = client.post("/api/levels/w1-1/submit", json={"code": "MOVE\nMOVE\nMOVE"}, headers=auth).json()
    assert again["saved"] is False and again["best"]["stars"] == 3


def test_reference_solutions_are_never_sent(client):
    data = client.get("/api/levels").json()
    assert all("reference" not in level for level in data["levels"])
    assert "reference" not in client.get("/api/daily").json()


def test_class_leaderboard_and_teacher_insights(client):
    room = client.post("/api/classes", json={"name": "Class 4 Rose"}).json()
    _, a = join(client, room["code"])
    _, b = join(client, room["code"].lower())
    client.post("/api/levels/w1-1/submit", json={"code": "MOVE 3"}, headers=a)
    q = quizzes.questions_for("academy")[0]
    client.post("/api/quizzes/academy/submit", json={"answers": {q["id"]: q["answer"]}}, headers=b)
    board = client.get(f"/api/leaderboard/class/{room['code']}").json()
    assert [r["rank"] for r in board["rows"]] == [1, 2] and board["rows"][0]["stars"] >= 3
    assert client.get(f"/api/classes/{room['code']}/insights").status_code == 403
    insight = client.get(f"/api/classes/{room['code']}/insights", headers={"X-Teacher-Key": room["teacher_key"]}).json()
    assert insight["class"]["players"] == 2
    assert insight["levels_finished_by_world"] == {"1": 1}
    assert insight["hardest_questions"][0]["id"] == q["id"]
    assert client.get("/api/leaderboard/class/NOPE00").status_code == 404


def test_daily_leaderboard_orders_by_stars_then_shortest_code(client):
    level = levels.daily_level()
    _, a = join(client)
    _, b = join(client)
    day_id = f"daily-{dt.datetime.now(dt.timezone.utc).date().isoformat()}"
    long_code = level["reference"]
    client.post(f"/api/levels/{day_id}/submit", json={"code": long_code}, headers=a)
    client.post(f"/api/levels/{day_id}/submit", json={"code": long_code}, headers=b)
    rows = client.get("/api/leaderboard/daily").json()["rows"]
    assert len(rows) == 2 and rows[0]["stars"] == 3
    assert client.post("/api/levels/daily-2000-01-01/submit", json={"code": "MOVE"}, headers=a).status_code == 400


def test_quiz_flow_updates_learning(client):
    _, auth = join(client)
    quiz = client.get("/api/quizzes/flight", headers=auth).json()
    assert len(quiz["questions"]) == 5
    answers = {}
    for q in quiz["questions"]:
        answers[q["id"]] = (q["answer"] if q["type"] != "order" else list(range(len(q["options"]))))
    result = client.post("/api/quizzes/flight/submit", json={"answers": answers}, headers=auth).json()
    assert result["stars"] == 3
    me = client.get("/api/players/me", headers=auth).json()
    assert me["mastery"]
    assert client.get("/api/quizzes/nope").status_code == 404


def test_dhrubo_uses_claude_with_safety_settings():
    ai, messages = fake_client()
    reply = asyncio.run(dhrubo.ask("Why is Mars red?", client=ai, mastery_summary={"practice": ["loops"]}))
    assert reply["mode"] == "ai" and "rusty" in reply["answer"]
    call = messages.calls[0]
    assert call["model"] == "claude-opus-5-5" and call["fallbacks"] == "default"
    assert call["messages"][-1]["role"] == "system" and "loops" in call["messages"][-1]["content"]


def test_dhrubo_blocks_personal_info_before_calling_ai():
    ai, messages = fake_client()
    reply = asyncio.run(dhrubo.ask("my phone is 01712 345678", client=ai))
    assert reply["mode"] == "safety" and not messages.calls


def test_dhrubo_refusal_gives_kind_reply():
    ai, _ = fake_client(stop="refusal", text="")
    assert asyncio.run(dhrubo.ask("tell me something", client=ai))["mode"] == "safety"


def test_dhrubo_offline_answer_in_bangla():
    reply = dhrubo.offline_answer("মঙ্গলের কয়টা চাঁদ আছে?", "bn")
    assert "ফোবোস" in reply["answer"]


def test_dhrubo_endpoint_rate_limit(monkeypatch):
    monkeypatch.setenv("DHRUBO_PER_HOUR", "2")
    ai, _ = fake_client()
    c = TestClient(create_app("sqlite://", serve_dist=False, ai_client=ai))
    modes = [c.post("/api/dhrubo/ask", json={"question": "Why is Mars red?"}).json()["mode"] for _ in range(3)]
    assert modes == ["ai", "ai", "rest"]


def test_sky_endpoints(client):
    mars = client.get("/api/sky/mars?lat=22.8&lon=89.5").json()
    assert 50_000_000 < mars["mars"]["distance_km"] < 410_000_000
    assert len(mars["windows"]) == 3
    iss = client.get("/api/sky/iss").json()
    assert "passes" in iss


def test_diary_pdf(client):
    _, auth = join(client)
    client.post("/api/levels/w1-1/submit", json={"code": "MOVE 3"}, headers=auth)
    r = client.get("/api/players/me/diary.pdf", headers=auth)
    assert r.status_code == 200 and r.content.startswith(b"%PDF")


def test_robot_compile(client):
    ok = client.post("/api/robot/compile", json={"code": "REPEAT 2 TIMES\nMOVE\nEND"}).json()
    assert ok["program"][0]["op"] == "repeat"
    bad = client.post("/api/robot/compile", json={"code": "FLY"})
    assert bad.status_code == 400 and bad.json()["detail"]["line"] == 1


def test_crew_room_over_websocket(client):
    token_a, _ = join(client)
    token_b, _ = join(client)
    room = client.post("/api/crew").json()["room"]
    with client.websocket_connect(f"/api/crew/{room}?token={token_a}&role=engineer") as a:
        assert a.receive_json()["state"]["you"]["role"] == "engineer"
        with client.websocket_connect(f"/api/crew/{room}?token={token_b}&role=engineer") as b:
            state_b = b.receive_json()["state"]
            assert state_b["you"]["role"] != "engineer"  # roles are unique
            a.receive_json()
            a.send_json({"type": "start"})
            a.receive_json(); b.receive_json()
            a.send_json({"type": "say", "message": "hello"})
            assert a.receive_json()["type"] == "say" and b.receive_json()["type"] == "say"
            a.send_json({"type": "say", "message": "anything I want"})  # free text is ignored
            a.send_json({"type": "choose", "action": "fix_panels"})
            a.receive_json(); b.receive_json()
            b.send_json({"type": "choose", "action": state_b["you"]["actions"][0]})
            state = b.receive_json()["state"]
            assert state["sol"] == 2 and state["last"]["event"] == "calm"


def test_nasa_feed_keeps_last_good_copy_when_a_source_fails():
    def fetch(url, params, timeout=20.0):
        if "apod" in url:
            return {"date": "2026-11-19", "title": "Mars at dawn", "media_type": "image", "url": "https://apod.nasa.gov/x.jpg"}
        if "images-api" in url:
            raise OSError("offline")
        return [{"classType": "M1.2", "peakTime": "2026-11-18T10:00Z", "link": "https://kauai.ccmc.gsfc.nasa.gov/x"}]
    previous = {"mars_images": [{"title": "old"}]}
    feed, errors = nasa_feed.build(previous, "DEMO_KEY", dt.date(2026, 11, 19), fetch)
    assert feed["apod"]["title"] == "Mars at dawn" and feed["apod"]["link"].endswith("ap261119.html")
    assert feed["mars_images"] == [{"title": "old"}] and len(errors) == 1
    assert feed["solar_flares"][0]["class"] == "M1.2"


def test_dhrubo_without_credentials_answers_offline(monkeypatch):
    for var in ("ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_PROFILE"):
        monkeypatch.delenv(var, raising=False)
    monkeypatch.setenv("ANTHROPIC_CONFIG_DIR", "/nonexistent-astro-kitty")
    reply = asyncio.run(dhrubo.ask("How many moons does Mars have?"))
    assert reply["mode"] == "offline" and "Phobos" in reply["answer"]


def test_remix_endpoint_gives_fresh_levels(client):
    a = client.get("/api/levels/remix?world=7").json()
    b = client.get("/api/levels/remix?world=7").json()
    assert "reference" not in a and a["map"] != b["map"]


def test_world7_submission_uses_the_battery(client):
    _, auth = join(client)
    level = next(lv for lv in levels.build_all() if lv.get("battery"))
    good = client.post(f"/api/levels/{level['id']}/submit", json={"code": level["reference"]}, headers=auth).json()
    assert good["result"]["stars"] == 3
