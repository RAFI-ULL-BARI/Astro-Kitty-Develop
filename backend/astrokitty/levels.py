"""Kitty Code worlds and levels.

World 1 is hand-made. Worlds 2-6 and the Daily Challenge are generated from a
seed, so the output is the same every build. Every level comes with a reference
solution, and :func:`check_level` runs it through the real interpreter: a level
is only shipped if its reference reaches the base with all three stars.
"""
from __future__ import annotations

import datetime as dt
import hashlib
import random

from .kittycode import DELTA, DIRS, run
from .surprise import gen_surprise, surprise_seed

BASIC = ["move", "turn left", "turn right", "drill", "scan"]
LOOPS = BASIC + ["repeat"]
LOGIC = LOOPS + ["repeat until", "if", "else", "rock ahead", "path ahead", "path left",
                 "path right", "sample here", "at base", "not"]
ALL = LOGIC + ["define"]
SURPRISE = ALL + ["wait"]

WORLDS = [
    {"id": 1, "place": {"en": "Landing Site", "bn": "অবতরণ স্থান"}, "concept": "sequence",
     "learn": {"en": "Give orders one step at a time", "bn": "একটার পর একটা নির্দেশ দাও"}, "toolbox": BASIC},
    {"id": 2, "place": {"en": "Jezero Crater", "bn": "জেজেরো খাদ"}, "concept": "loops",
     "learn": {"en": "REPEAT does the same thing again and again", "bn": "পুনরাবৃত্তি দিয়ে একই কাজ বারবার করো"}, "toolbox": LOOPS},
    {"id": 3, "place": {"en": "Gale Crater", "bn": "গেল খাদ"}, "concept": "conditions",
     "learn": {"en": "IF lets the rover decide by itself", "bn": "যদি দিয়ে রোভার নিজেই সিদ্ধান্ত নেয়"}, "toolbox": LOGIC},
    {"id": 4, "place": {"en": "Valles Marineris", "bn": "ভ্যালেস মেরিনারিস"}, "concept": "routines",
     "learn": {"en": "DEFINE your own command and reuse it", "bn": "নিজের কমান্ড বানাও, বারবার ব্যবহার করো"}, "toolbox": ALL},
    {"id": 5, "place": {"en": "Dust Storm Plains", "bn": "ধুলিঝড়ের সমভূমি"}, "concept": "combine",
     "learn": {"en": "Mix loops and decisions to beat the storm", "bn": "লুপ আর সিদ্ধান্ত মিলিয়ে ঝড়কে হারাও"}, "toolbox": ALL},
    {"id": 6, "place": {"en": "Olympus Mons", "bn": "অলিম্পাস মনস"}, "concept": "boss",
     "learn": {"en": "Boss missions on the tallest volcano", "bn": "সবচেয়ে উঁচু আগ্নেয়গিরিতে বস মিশন"}, "toolbox": ALL},
    {"id": 7, "place": {"en": "Surprise Storm", "bn": "চমকের ঝড়"}, "concept": "surprises",
     "learn": {"en": "Slippery ice, tired batteries and dust devils: plan for surprises!", "bn": "পিছলে যাওয়া বরফ, ক্লান্ত ব্যাটারি আর ধুলোর ঘূর্ণি: চমকের জন্য তৈরি থাকো!"}, "toolbox": SURPRISE},
]

# --- World 1: hand-made ----------------------------------------------------
W1 = [
    ("First drive", "Drive to the base.", "এগিয়ে ঘাঁটিতে যাও।",
     [">..B"], "MOVE 3"),
    ("Grab a sample", "Stop on the sample and DRILL it.", "নমুনার ওপর থেমে খনন করো।",
     [">.*..B"], "MOVE 2\nDRILL\nMOVE 3"),
    ("Turn right", "Go along, then TURN RIGHT.", "এগিয়ে যাও, তারপর ডানে ঘোরো।",
     [">..#", "##.#", "##B#"], "MOVE 2\nTURN RIGHT\nMOVE 2"),
    ("Turn left", "Go up, then TURN LEFT.", "ওপরে যাও, তারপর বামে ঘোরো।",
     ["B..#", "##.#", "##^#"], "MOVE 2\nTURN LEFT\nMOVE 2"),
    ("Around the rock", "A big rock! Drive around it.", "বড় পাথর! পাশ দিয়ে ঘুরে যাও।",
     [">.#..", "#....", "####B"],
     "MOVE\nTURN RIGHT\nMOVE\nTURN LEFT\nMOVE 3\nTURN RIGHT\nMOVE"),
    ("Two samples", "Collect both samples on the way.", "পথে দুটো নমুনাই তোলো।",
     [">*.*B"], "MOVE\nDRILL\nMOVE 2\nDRILL\nMOVE"),
    ("Zig and zag", "Right, left, right... follow the path.", "ডানে, বামে, ডানে... পথ ধরে চলো।",
     [">.###", "#..##", "##..#", "###.B"],
     "MOVE\nTURN RIGHT\nMOVE\nTURN LEFT\nMOVE\nTURN RIGHT\nMOVE\nTURN LEFT\nMOVE\nTURN RIGHT\nMOVE\nTURN LEFT\nMOVE"),
    ("Scan first", "SCAN tells you what is ahead. Then drive home.", "স্ক্যান বলে সামনে কী আছে। তারপর ঘাঁটিতে যাও।",
     ["v###", ".###", "*..B"], "SCAN\nMOVE 2\nDRILL\nTURN LEFT\nMOVE 3"),
    ("U-turn", "The base is behind a wall. Go around!", "দেয়ালের পেছনে ঘাঁটি। ঘুরে যাও!",
     ["...", ".#.", "^#B"], "MOVE 2\nTURN RIGHT\nMOVE 2\nTURN RIGHT\nMOVE 2"),
    ("Long road", "A long trip with a sample. Plan every step!", "নমুনাসহ লম্বা পথ। প্রতিটি ধাপ ভাবো!",
     [">...#", "###.#", "#*..#", "#.###", "#..*B"],
     "MOVE 3\nTURN RIGHT\nMOVE 2\nTURN RIGHT\nMOVE 2\nDRILL\nTURN LEFT\nMOVE 2\nTURN LEFT\nMOVE 2\nDRILL\nMOVE"),
]


def _grid(w: int, h: int, fill: str) -> list[list[str]]:
    return [[fill] * w for _ in range(h)]


def _render(grid: list[list[str]]) -> list[str]:
    return ["".join(r) for r in grid]


def _trace(moves: list[str], start_dir: str = "E") -> list[tuple[int, int]] | None:
    """Follow primitive moves (F, L, R) from (0,0); None if the path crosses itself."""
    x = y = 0
    d = start_dir
    cells = [(0, 0)]
    for m in moves:
        if m == "L":
            d = DIRS[(DIRS.index(d) - 1) % 4]
        elif m == "R":
            d = DIRS[(DIRS.index(d) + 1) % 4]
        else:
            dx, dy = DELTA[d]
            x, y = x + dx, y + dy
            if (x, y) in cells:
                return None
            cells.append((x, y))
    return cells


def _place(cells, start_dir, samples, rock_rate, rng, wall=False):
    xs, ys = [c[0] for c in cells], [c[1] for c in cells]
    ox, oy = min(xs), min(ys)
    w, h = max(xs) - ox + 1, max(ys) - oy + 1
    grid = _grid(w, h, "#" if wall else ".")
    path = {(x - ox, y - oy) for x, y in cells}
    if not wall:
        for j in range(h):
            for i in range(w):
                if (i, j) not in path and rng.random() < rock_rate:
                    grid[j][i] = "#"
    for i, j in path:
        grid[j][i] = "."
    for i, j in samples:
        grid[j - oy][i - ox] = "*"
    ex, ey = cells[-1]
    grid[ey - oy][ex - ox] = "B"
    sx, sy = cells[0]
    grid[sy - oy][sx - ox] = {"N": "^", "E": ">", "S": "v", "W": "<"}[start_dir]
    return _render(grid)


def _moves_code(pattern: list[tuple[str, int]]) -> list[str]:
    out = []
    for op, n in pattern:
        out.append(f"MOVE {n}" if op == "F" and n > 1 else "MOVE" if op == "F" else f"TURN {op}")
    return out


def _expand(pattern):
    prims = []
    for op, n in pattern:
        prims += ["F"] * n if op == "F" else ["L" if op == "LEFT" else "R"]
    return prims


def gen_stairs(rng: random.Random, reps: int, with_samples: bool, rock_rate=0.25):
    """A pattern repeated several times: the REPEAT world."""
    for _ in range(200):
        a, b = rng.randint(1, 3), rng.randint(1, 2)
        turn1 = rng.choice(["RIGHT", "LEFT"])
        turn2 = "LEFT" if turn1 == "RIGHT" else "RIGHT"
        pattern = [("F", a), (turn1, 1), ("F", b), (turn2, 1)]
        cells = _trace(_expand(pattern) * reps)
        if not cells:
            continue
        # The rover ends each repetition at the same relative spot: put a sample there.
        samples = []
        if with_samples:
            idx, pos = 0, []
            for i in range(reps):
                idx += a + b
                pos.append(cells[idx])
            samples = pos[:-1]
        body = _moves_code(pattern)
        if with_samples:
            ref = ["REPEAT %d TIMES" % reps, "  " + body[0], "  " + body[1], "  " + body[2],
                   "  IF SAMPLE HERE", "    DRILL", "  END", "  " + body[3], "END"]
        else:
            ref = ["REPEAT %d TIMES" % reps] + ["  " + line for line in body] + ["END"]
        rows = _place(cells, "E", samples, rock_rate, rng, wall=True)
        return rows, "\n".join(ref)
    raise RuntimeError("could not build stairs")


def _corridor(rng: random.Random, length: int, size: int):
    """A winding one-cell-wide tunnel with no shortcuts (so 'path ahead' is never ambiguous).

    Backtracking search: grow the tunnel one cell at a time, never letting a new
    cell touch an older one, and back up when stuck.
    """
    budget = [20000]

    def grow(cells: list, d: str, straight: int) -> list | None:
        if len(cells) == length:
            return cells
        budget[0] -= 1
        if budget[0] <= 0:
            return None
        x, y = cells[-1]
        turns = [d] if straight < 2 else []
        others = [DIRS[(DIRS.index(d) + t) % 4] for t in (1, -1)]
        rng.shuffle(others)
        options = turns + others if rng.random() < 0.6 else others + turns
        if straight < 2:
            options = [d] + [o for o in options if o != d]
        for nd in options:
            dx, dy = DELTA[nd]
            nx, ny = x + dx, y + dy
            if not (1 <= nx <= size and 1 <= ny <= size) or (nx, ny) in cells:
                continue
            if any(c in cells and c != (x, y) for c in ((nx + 1, ny), (nx - 1, ny), (nx, ny + 1), (nx, ny - 1))):
                continue
            found = grow(cells + [(nx, ny)], nd, straight + 1 if nd == d else 1)
            if found:
                return found
        return None

    for _ in range(50):
        budget[0] = 20000
        d = rng.choice("ES")
        cells = grow([(1, 1)], d, 0)
        if cells:
            (x0, y0), (x1, y1) = cells[0], cells[1]
            first_dir = next(k for k, (dx, dy) in DELTA.items() if (x0 + dx, y0 + dy) == (x1, y1))
            return cells, first_dir
    raise RuntimeError("could not build corridor")


FOLLOW = """REPEAT UNTIL AT BASE
{sample}  IF PATH AHEAD
    MOVE
  ELSE
    IF PATH LEFT
      TURN LEFT
    ELSE
      TURN RIGHT
    END
  END
END"""
FOLLOW_SAMPLE = "  IF SAMPLE HERE\n    DRILL\n  END\n"


def gen_corridor(rng: random.Random, length: int, size: int, n_samples: int):
    """A tunnel the rover can follow with one smart rule: the IF world."""
    cells, d = _corridor(rng, length, size)
    pool = cells[1:-1]
    samples = rng.sample(pool, min(n_samples, len(pool)))
    w = max(c[0] for c in cells) + 2
    h = max(c[1] for c in cells) + 2
    grid = _grid(w, h, "#")
    for x, y in cells:
        grid[y][x] = "."
    for x, y in samples:
        grid[y][x] = "*"
    grid[cells[-1][1]][cells[-1][0]] = "B"
    grid[cells[0][1]][cells[0][0]] = {"N": "^", "E": ">", "S": "v", "W": "<"}[d]
    ref = FOLLOW.format(sample=FOLLOW_SAMPLE if samples else "")
    return _render(grid), ref


def gen_routine(rng: random.Random, uses: int):
    """A shape that appears several times, joined by plain moves: the DEFINE world."""
    for _ in range(500):
        a, b = rng.randint(1, 2), rng.randint(1, 2)
        t = rng.choice(["RIGHT", "LEFT"])
        u = "LEFT" if t == "RIGHT" else "RIGHT"
        hop = [("F", a), (t, 1), ("F", b), (u, 1), ("F", 1)]
        plan, code = [], []
        for i in range(uses):
            plan += hop
            code.append("HOP")
            if i < uses - 1:
                gap = rng.randint(1, 3)
                plan.append(("F", gap))
                code.append(f"MOVE {gap}" if gap > 1 else "MOVE")
        cells = _trace(_expand(plan))
        if not cells:
            continue
        rows = _place(cells, "E", [], 0.3, rng, wall=True)
        ref = ["DEFINE HOP"] + ["  " + c for c in _moves_code(hop)] + ["END"] + code
        return rows, "\n".join(ref)
    raise RuntimeError("could not build routine")


def check_level(level: dict) -> dict:
    """Run the reference solution. Raises if the level is not winnable with 3 stars."""
    result = run(level["reference"], level["map"], level["par"], level.get("battery"))
    if result["status"] != "success" or result["stars"] != 3:
        raise AssertionError(f"level {level['id']} is broken: {result['status']} {result['message']}")
    return result


def _level(world: int, index: int, title: str, hint_en: str, hint_bn: str, rows, ref, battery=None) -> dict:
    from .kittycode import count_commands, parse
    level = {
        "id": f"w{world}-{index}",
        "world": world,
        "index": index,
        "title": title,
        "hint": {"en": hint_en, "bn": hint_bn},
        "map": rows,
        "par": count_commands(parse(ref)),
        "reference": ref,
    }
    if battery is not None:
        level["battery"] = battery
    check_level(level)
    return level


TITLES = {
    2: ["Crater steps", "Delta hop", "Lake bed", "River stairs", "Sample stairs",
        "Rocky steps", "Old shoreline", "Mudstone march", "Big staircase", "Crater rim"],
    3: ["First tunnel", "Twisty cave", "Smart rover", "Lava tube", "Sample tunnel",
        "Deep cave", "Crystal path", "Mount Sharp trail", "Long tunnel", "Gale maze"],
    4: ["Canyon hop", "Hop again", "Cliff jumps", "Canyon steps", "Rift run",
        "Hop marathon", "Grand canyon", "Ledge dance", "Mega hops", "Canyon master"],
    5: ["Storm warning", "Dusty tunnel", "Race the storm", "Sand stairs", "Dust devils",
        "Hidden samples", "Storm maze", "Gusty steps", "Whiteout", "Storm survivor"],
    6: ["Volcano foot", "Lava field", "Steep stairs", "Caldera cave", "Summit samples",
        "Cloud tunnel", "Giant steps", "Boss maze", "Peak routine", "Top of the world"],
    7: ["Slippery start", "Ice rink", "Low battery", "Charge and go", "Dust devil dance",
        "Wait for it", "Icy whirlwinds", "Frosty power", "Devil maze", "The perfect storm"],
}

# World 7 mixes the surprises: ice, batteries with charging pads and dust devils.
SURPRISE_PLAN = [
    dict(w=6, h=5, ice=True, samples=1), dict(w=7, h=6, ice=True, samples=2),
    dict(w=7, h=6, battery=True, samples=1), dict(w=8, h=7, battery=True, samples=2),
    dict(w=7, h=5, devils=1, samples=0), dict(w=8, h=6, devils=1, samples=1),
    dict(w=8, h=7, ice=True, devils=1, samples=1), dict(w=8, h=7, ice=True, battery=True, samples=1),
    dict(w=8, h=8, devils=2, battery=True, samples=1), dict(w=9, h=8, ice=True, battery=True, devils=2, samples=2),
]
SURPRISE_HINTS = {
    "ice": ("On ice you keep sliding until you reach normal ground!", "বরফে স্বাভাবিক মাটিতে না পৌঁছানো পর্যন্ত পিছলে যাবে!"),
    "battery": ("Each MOVE and TURN uses battery. Stop on a ⚡ charging pad to fill up.", "প্রতিটি এগোও আর ঘোরো ব্যাটারি খরচ করে। ⚡ চার্জিং প্যাডে থেমে ভরে নাও।"),
    "devils": ("Dust devils move every step. WAIT until the way is clear!", "ধুলোর ঘূর্ণি প্রতি ধাপে সরে। পথ খালি না হওয়া পর্যন্ত অপেক্ষা করো!"),
}
def surprise_hint(plan):
    key = "devils" if plan.get("devils") else "battery" if plan.get("battery") else "ice"
    return SURPRISE_HINTS[key]

HINTS = {
    2: ("Find the part that repeats. Put it inside REPEAT ... END.",
        "যে অংশটা বারবার আসে, সেটা পুনরাবৃত্তি ... শেষ-এর ভেতরে রাখো।"),
    3: ("Use REPEAT UNTIL AT BASE with IF PATH AHEAD to follow the tunnel.",
        "সুড়ঙ্গ ধরে চলতে 'পুনরাবৃত্তি যতক্ষণ না ঘাঁটিতে' আর 'যদি পথ সামনে' ব্যবহার করো।"),
    4: ("DEFINE HOP once, then use HOP as a new command.",
        "একবার 'নাম HOP' বানাও, তারপর HOP নতুন কমান্ড হিসেবে ব্যবহার করো।"),
    5: ("Mix REPEAT, IF and DEFINE. Grab every sample before the storm!",
        "পুনরাবৃত্তি, যদি আর নাম মিলিয়ে নাও। ঝড়ের আগে সব নমুনা তোলো!"),
    6: ("Boss level! Think first, then code.", "বস লেভেল! আগে ভাবো, তারপর কোড লেখো।"),
}


def build_world(world: int, seed: int = 2026) -> list[dict]:
    if world == 1:
        return [_level(1, i + 1, t, he, hb, rows, ref) for i, (t, he, hb, rows, ref) in enumerate(W1)]
    if world == 7:
        out = []
        for i, plan in enumerate(SURPRISE_PLAN):
            rows, ref, battery = gen_surprise(surprise_seed("world7", seed, i), **plan)
            out.append(_level(7, i + 1, TITLES[7][i], *surprise_hint(plan), rows, ref, battery))
        return out
    rng = random.Random(f"astro-kitty-world-{world}-{seed}")
    he, hb = HINTS[world]
    out = []
    for i in range(10):
        if world == 2:
            rows, ref = gen_stairs(rng, reps=2 + i // 3, with_samples=i >= 4)
        elif world == 3:
            rows, ref = gen_corridor(rng, length=8 + i * 2, size=6 + i // 2, n_samples=0 if i < 4 else 1 + i // 4)
        elif world == 4:
            rows, ref = gen_routine(rng, uses=2 + i // 3)
        elif world == 5:
            kind = i % 3
            if kind == 0:
                rows, ref = gen_corridor(rng, length=14 + i * 2, size=8 + i // 3, n_samples=2 + i // 3)
            elif kind == 1:
                rows, ref = gen_stairs(rng, reps=3 + i // 3, with_samples=True, rock_rate=0.35)
            else:
                rows, ref = gen_routine(rng, uses=3 + i // 3)
        else:
            kind = i % 3
            if kind == 0:
                rows, ref = gen_corridor(rng, length=24 + i * 2, size=11, n_samples=3 + i // 3)
            elif kind == 1:
                rows, ref = gen_stairs(rng, reps=4 + i // 3, with_samples=True, rock_rate=0.4)
            else:
                rows, ref = gen_routine(rng, uses=4 + i // 3)
        out.append(_level(world, i + 1, TITLES[world][i], he, hb, rows, ref))
    return out


def build_all(seed: int = 2026) -> list[dict]:
    levels = []
    for w in WORLDS:
        levels += build_world(w["id"], seed)
    return levels


def remix(world: int, seed) -> dict:
    """A brand-new level that practises the same idea as a world. Different every time."""
    rng = random.Random(f"remix-{world}-{seed}")
    battery = None
    if world == 1:
        rows, ref, battery = gen_surprise(rng, rng.randint(5, 7), rng.randint(4, 5), samples=rng.randint(0, 2), min_steps=4, max_steps=16)
    elif world == 2:
        rows, ref = gen_stairs(rng, reps=rng.randint(2, 4), with_samples=rng.random() < 0.6)
    elif world == 3:
        rows, ref = gen_corridor(rng, length=rng.randint(10, 18), size=rng.randint(7, 9), n_samples=rng.randint(0, 2))
    elif world == 4:
        rows, ref = gen_routine(rng, uses=rng.randint(2, 4))
    elif world in (5, 6):
        kind = rng.randint(0, 2)
        big = world == 6
        if kind == 0:
            rows, ref = gen_corridor(rng, length=rng.randint(16, 26 if big else 20), size=10 if big else 9, n_samples=rng.randint(1, 3))
        elif kind == 1:
            rows, ref = gen_stairs(rng, reps=rng.randint(3, 5), with_samples=True, rock_rate=0.35)
        else:
            rows, ref = gen_routine(rng, uses=rng.randint(3, 5))
    else:
        plan = dict(rng.choice(SURPRISE_PLAN))
        rows, ref, battery = gen_surprise(rng, **plan)
    hint = surprise_hint(plan) if world == 7 else HINTS.get(world, ("Reach the base and grab the samples!", "ঘাঁটিতে পৌঁছাও আর নমুনা তোলো!"))
    level = _level(world, 0, "Remix", *hint, rows, ref, battery)
    level["id"] = f"remix-w{world}-{seed}"
    level["remix"] = True
    return level


def remix_pool(per_world: int = 8, seed: int = 2026) -> dict:
    return {str(w["id"]): [public(remix(w["id"], f"{seed}-{i}")) for i in range(per_world)] for w in WORLDS}


def daily_level(day: dt.date | None = None) -> dict:
    """The Daily Challenge: the same level for every player on the same (UTC) day."""
    day = day or dt.datetime.now(dt.timezone.utc).date()
    seed = int(hashlib.sha256(f"daily-{day.isoformat()}".encode()).hexdigest()[:12], 16)
    rng = random.Random(seed)
    kind = seed % 4
    battery = None
    if kind == 0:
        rows, ref = gen_corridor(rng, length=rng.randint(14, 22), size=9, n_samples=rng.randint(1, 3))
    elif kind == 1:
        rows, ref = gen_stairs(rng, reps=rng.randint(3, 5), with_samples=True, rock_rate=0.3)
    elif kind == 2:
        rows, ref = gen_routine(rng, uses=rng.randint(3, 4))
    else:
        rows, ref, battery = gen_surprise(rng, **dict(rng.choice(SURPRISE_PLAN[2:])))
    level = _level(0, 0, "Daily Challenge", "A new mission every day. Same level for every kitty!",
                   "প্রতিদিন নতুন মিশন। সব বিড়ালের জন্য একই লেভেল!", rows, ref, battery)
    level["id"] = f"daily-{day.isoformat()}"
    level["date"] = day.isoformat()
    return level


def public(level: dict) -> dict:
    """What the game is allowed to see: everything except the reference solution."""
    return {k: v for k, v in level.items() if k != "reference"}
