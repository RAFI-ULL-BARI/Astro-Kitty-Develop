# Astro Kitty backend (Python)

The Python side of Astro Kitty. The game still runs fully offline as a static site.
When the backend is online, the game also gets leaderboards, class codes,
adaptive quizzes, AI Dhrubo, live sky data and crew missions.

```
backend/
  astrokitty/
    kittycode.py   Kitty Code language: parser + interpreter (English and Bangla)
    levels.py      6 worlds, 60 levels, Daily Challenge; every level checked by its reference solution
    quizzes.py     quiz bank loader, quality checker, adaptive picker, server-side scoring
    adaptive.py    Bayesian Knowledge Tracing: what each kid has learned
    names.py       safe generated kitty names (kids never type a name)
    dhrubo.py      AI Dhrubo (Claude) with child-safety rules and an offline fallback
    sky.py         Mars position, light delay, Hohmann launch windows, ISS passes
    nasa_feed.py   daily APOD, Mars images and solar flares -> dist/data/nasa-feed.json
    crew.py        co-op Mars base rules (2-4 players, preset messages only)
    diary.py       "My Mars Diary" PDF certificate
    robot.py       turns Kitty Code into main.py for a micro:bit rover
    build.py       writes the game's data files in dist/data/
    api.py         FastAPI app tying it all together (also serves ../dist)
  content/quizzes.yaml   the question bank (English + Bangla, NASA sources)
  robot/                 MicroPython rover runner + micro:bit driver
  tests/                 pytest suite
```

## Run it locally

```bash
cd backend
pip install -r requirements-dev.txt
uvicorn astrokitty.api:app --reload
```

Open http://localhost:8000. The API and the game are served together, so every
online feature works straight away. Data goes to `astro-kitty.db` (SQLite).

To switch on AI Dhrubo, set an Anthropic API key before starting:

```bash
export ANTHROPIC_API_KEY=...
```

Without a key, Dhrubo still answers from the NASA facts in the quiz bank.

## Tests and data files

```bash
python -m pytest -q
```

```bash
python -m astrokitty.build
```

Run `python -m astrokitty.build` after you change levels or `content/quizzes.yaml`.
It rewrites `dist/data/kitty-code-levels.json`, `quizzes.json` and
`kitty-code-cases.json`. CI runs `python -m astrokitty.build --check`, which fails if
a question is missing Bangla text, an explanation or a NASA source, if the wording is
too hard for ages 7-12, or if the data files are out of date.

The browser runs its own copy of the Kitty Code engine (`dist/kitty-code-engine.js`).
`test/kitty-code-parity.test.mjs` checks it gives exactly the same results as the
Python engine on every level and edge case.

## Deploy

**Render (one click):** `render.yaml` at the repository root creates the web
service and a free Postgres database. Add `ANTHROPIC_API_KEY` in the dashboard.

**Any Docker host:**

```bash
docker build -f backend/Dockerfile -t astro-kitty .
```

```bash
docker run -p 8000:8000 -e ANTHROPIC_API_KEY=... astro-kitty
```

**Keeping the game on Vercel:** deploy the backend somewhere else, then set its
address in `dist/data/online-config.json`, for example
`{"apiBase": "https://astro-kitty.onrender.com"}`. Set `ALLOWED_ORIGINS` on the
backend to your Vercel address.

| Variable | Default | What it does |
|---|---|---|
| `DATABASE_URL` | `sqlite:///./astro-kitty.db` | Postgres URLs (`postgres://...`) work too |
| `ANTHROPIC_API_KEY` | not set | turns on AI Dhrubo |
| `DHRUBO_MODEL` | `claude-opus-5-5` | Claude model for Dhrubo |
| `DHRUBO_PER_HOUR` | `30` | questions per player per hour |
| `ALLOWED_ORIGINS` | `*` | comma-separated origins allowed to call the API |
| `SERVE_DIST` | `1` | serve the game from `../dist` |
| `NASA_API_KEY` | `DEMO_KEY` | for the daily feed (GitHub secret in CI) |

## Kids' safety and privacy

- No real names, emails, ages or birthdays are collected. A player is a generated
  kitty name ("Brave Comet Kitty") plus a random token kept on their device.
- There is no free chat between kids. Crew missions use preset messages and emoji.
- Dhrubo's instructions keep it on space topics and at a 7-year-old's reading level,
  and stop it asking for personal details. Questions that contain an email or
  phone number are blocked before they reach the AI. Each player has an hourly
  question limit.
- Teachers see kitty names and topic results only. Class dashboards need the
  teacher key shown when the class is created.
- Every Kitty Code program and quiz answer is re-checked on the server, so scores
  on leaderboards can't be faked.

## Classroom robot

```bash
python -m astrokitty.robot my-program.txt > main.py
```

Flash `main.py` to a BBC micro:bit V2 on a two-motor rover with an ultrasonic
sensor. Pins and timings are at the top of `robot/microbit_main.py`.
The runner (`robot/rover_vm.py`) is tested against the game engine on all 60
levels. The micro:bit driver itself has not been tested on real hardware yet.

## API at a glance

| Method | Path | |
|---|---|---|
| GET | `/api/health` | status |
| POST | `/api/players` | join: returns a kitty name and a token |
| GET | `/api/players/me` | your name, class and learning |
| POST | `/api/players/me/class` | join a class by code |
| GET | `/api/levels`, `/api/daily` | levels (no solutions) and today's challenge |
| POST | `/api/levels/{id}/submit` | the server runs your code and saves your best |
| GET/POST | `/api/quizzes/{part}`, `/api/quizzes/{part}/submit` | adaptive quiz; server scoring |
| GET | `/api/leaderboard/class/{code}`, `/api/leaderboard/daily` | leaderboards |
| POST | `/api/classes` | teacher: new class code and teacher key |
| GET | `/api/classes/{code}/insights` | teacher dashboard (`X-Teacher-Key` header) |
| POST | `/api/dhrubo/ask` | ask Dhrubo |
| GET | `/api/sky/mars`, `/api/sky/iss`, `/api/feed` | sky and NASA data |
| GET | `/api/players/me/diary.pdf` | My Mars Diary |
| POST | `/api/robot/compile` | Kitty Code to a robot program |
| POST, WS | `/api/crew`, `/api/crew/{room}` | crew missions |
