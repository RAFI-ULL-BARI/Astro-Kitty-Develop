"""Kitty Code: a tiny, forgiving pseudo-code language for kids aged 7-12.

Kids steer a rover across a grid map with plain words:

    REPEAT 3 TIMES
      MOVE 2
      TURN LEFT
    END
    IF SAMPLE HERE
      DRILL
    END

The same rules are implemented in ``dist/kitty-code-engine.js`` so the game can
run programs offline. The server re-runs every submitted program with this file,
so a score can never be faked. ``test/kitty-code-parity.test.mjs`` checks that the
two engines agree on every case in ``dist/data/kitty-code-cases.json``.

Map cells:  ``.`` ground  ``#`` rock  ``*`` sample  ``B`` base  ``^ > v <`` rover start
Surprises:  ``~`` ice (the rover slides on)  ``+`` charging pad  ``@`` dust devil moving
            east-west  ``$`` dust devil moving north-south
Optional battery: each MOVE step and TURN uses 1 charge; a charging pad fills it up again.
Dust devils move one cell after every action and bounce off rocks.
"""
from __future__ import annotations

import re
from dataclasses import dataclass, field

DIRS = "NESW"
DELTA = {"N": (0, -1), "E": (1, 0), "S": (0, 1), "W": (-1, 0)}
START_CHARS = {"^": "N", ">": "E", "v": "S", "<": "W"}
MAX_STEPS = 1000
MAX_TICKS = 5000
MAX_DEPTH = 20
MAX_LINES = 200
MAX_REPEAT = 99

CONDITIONS = ("rock ahead", "path ahead", "path left", "path right", "sample here", "at base")
KEYWORDS = ("move", "turn left", "turn right", "drill", "scan", "wait", "repeat", "times", "until",
            "if", "else", "end", "define", "not") + CONDITIONS

NUMBER_WORDS = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7,
                "eight": 8, "nine": 9, "ten": 10}

# Bangla phrases -> English keywords. Longer phrases first so they win.
BANGLA = [
    ("বামে ঘোরো", "turn left"), ("ডানে ঘোরো", "turn right"),
    ("পাথর সামনে", "rock ahead"), ("পথ সামনে", "path ahead"), ("পথ বামে", "path left"),
    ("পথ ডানে", "path right"), ("নমুনা এখানে", "sample here"), ("ঘাঁটিতে", "at base"),
    ("যতক্ষণ না", "until"), ("পুনরাবৃত্তি", "repeat"), ("এগোও", "move"), ("খনন", "drill"),
    ("স্ক্যান", "scan"), ("অপেক্ষা", "wait"), ("বার", "times"), ("যদি", "if"), ("নইলে", "else"), ("শেষ", "end"),
    ("নাম", "define"), ("না", "not"),
]
BANGLA_DIGITS = str.maketrans("০১২৩৪৫৬৭৮৯", "0123456789")
NAME_RE = re.compile(r"^[a-z_][a-z0-9_]{0,23}$")
DIGITS_RE = re.compile(r"^[0-9]+$")


class KittyCodeError(Exception):
    """A friendly error that points to a line and, when possible, suggests a fix."""

    def __init__(self, line: int, message: str, suggestion: str | None = None):
        super().__init__(message)
        self.line = line
        self.message = message
        self.suggestion = suggestion

    def as_dict(self) -> dict:
        return {"line": self.line, "message": self.message, "suggestion": self.suggestion}


@dataclass
class Stmt:
    op: str
    line: int
    arg: object = None
    cond: str | None = None
    negate: bool = False
    body: list = field(default_factory=list)
    other: list = field(default_factory=list)


def _edit_distance(a: str, b: str) -> int:
    """Edit distance where swapping two neighbouring letters counts as one typo."""
    d = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(len(a) + 1):
        d[i][0] = i
    for j in range(len(b) + 1):
        d[0][j] = j
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] != b[j - 1]))
            if i > 1 and j > 1 and a[i - 1] == b[j - 2] and a[i - 2] == b[j - 1]:
                d[i][j] = min(d[i][j], d[i - 2][j - 2] + 1)
    return d[-1][-1]


def suggest(word: str, extra: tuple = ()) -> str | None:
    """Nearest known keyword for a typo such as ``mvoe`` -> ``move``."""
    best, score = None, 99
    for kw in KEYWORDS + tuple(extra):
        d = _edit_distance(word, kw)
        if d < score:
            best, score = kw, d
    limit = 1 if len(word) <= 4 else 2
    return best.upper() if best and score <= limit else None


def normalize_line(raw: str) -> str:
    text = raw.split("#", 1)[0].split("//", 1)[0]
    text = text.translate(BANGLA_DIGITS).strip().lower()
    # Two-word Bangla phrases are swapped as phrases; one-word ones only as whole
    # words, so "না" (not) never matches inside a longer word such as "নমুনা".
    for bn, en in BANGLA:
        if " " in bn:
            text = text.replace(bn, f" {en} ")
    single = {bn: en for bn, en in BANGLA if " " not in bn}
    words = [str(NUMBER_WORDS.get(w, w)) for w in " ".join(single.get(w, w) for w in text.split()).split()]
    return " ".join(words)


def _parse_cond(words: list[str], line: int) -> tuple[str, bool]:
    negate = False
    if words and words[0] == "not":
        negate, words = True, words[1:]
    text = " ".join(words)
    if text in CONDITIONS:
        return text, negate
    hint = None
    for c in CONDITIONS:
        if _edit_distance(text, c) <= 3:
            hint = c.upper()
            break
    raise KittyCodeError(line, f"I don't know the check \"{text or '...'}\".",
                         hint or "Try ROCK AHEAD, PATH AHEAD, PATH LEFT, PATH RIGHT, SAMPLE HERE or AT BASE.")


def parse(source: str) -> list[Stmt]:
    lines = [(i + 1, normalize_line(raw)) for i, raw in enumerate(source.splitlines())]
    lines = [(n, t) for n, t in lines if t]
    if len(lines) > MAX_LINES:
        raise KittyCodeError(lines[MAX_LINES][0], f"That's a lot of code! Keep it under {MAX_LINES} lines.")
    defined: set[str] = set()
    # Collect routine names first so calls can appear before their DEFINE.
    for n, t in lines:
        w = t.split()
        if w[0] == "define" and len(w) == 2 and NAME_RE.match(w[1]):
            defined.add(w[1])
    pos = 0

    def block(depth: int, closers: tuple[str, ...]) -> tuple[list[Stmt], str | None]:
        nonlocal pos
        out: list[Stmt] = []
        while pos < len(lines):
            n, t = lines[pos]
            w = t.split()
            head = w[0]
            if head in closers:
                return out, head
            pos += 1
            if head == "move":
                if len(w) == 1:
                    steps = 1
                elif len(w) == 2 and bool(DIGITS_RE.match(w[1])) and 1 <= int(w[1]) <= 9:
                    steps = int(w[1])
                else:
                    raise KittyCodeError(n, "MOVE needs a number from 1 to 9, like MOVE 3.")
                out.append(Stmt("move", n, steps))
            elif head == "turn":
                if len(w) == 2 and w[1] in ("left", "right"):
                    out.append(Stmt("turn", n, w[1]))
                else:
                    raise KittyCodeError(n, "Which way? Say TURN LEFT or TURN RIGHT.")
            elif head in ("drill", "scan") and len(w) == 1:
                out.append(Stmt(head, n))
            elif head == "wait":
                if len(w) == 1:
                    out.append(Stmt("wait", n, 1))
                elif len(w) == 2 and DIGITS_RE.match(w[1]) and 1 <= int(w[1]) <= 9:
                    out.append(Stmt("wait", n, int(w[1])))
                else:
                    raise KittyCodeError(n, "WAIT can have a number from 1 to 9, like WAIT 2.")
            elif head == "repeat":
                if len(w) >= 2 and w[1] == "until":
                    cond, neg = _parse_cond(w[2:], n)
                    s = Stmt("until", n, cond=cond, negate=neg)
                elif len(w) in (2, 3) and bool(DIGITS_RE.match(w[1])) and (len(w) == 2 or w[2] == "times"):
                    count = int(w[1])
                    if not 1 <= count <= MAX_REPEAT:
                        raise KittyCodeError(n, f"REPEAT works with 1 to {MAX_REPEAT} times.")
                    s = Stmt("repeat", n, count)
                else:
                    raise KittyCodeError(n, "Try REPEAT 3 TIMES or REPEAT UNTIL AT BASE.")
                if depth >= MAX_DEPTH:
                    raise KittyCodeError(n, "Too many blocks inside blocks!")
                s.body, closer = block(depth + 1, ("end",))
                if closer is None:
                    raise KittyCodeError(n, "This REPEAT needs an END.", "Add END after the lines to repeat.")
                pos += 1
                out.append(s)
            elif head == "if":
                cond, neg = _parse_cond(w[1:], n)
                s = Stmt("if", n, cond=cond, negate=neg)
                s.body, closer = block(depth + 1, ("else", "end"))
                if closer == "else":
                    pos += 1
                    s.other, closer = block(depth + 1, ("end",))
                if closer is None:
                    raise KittyCodeError(n, "This IF needs an END.", "Add END after the IF lines.")
                pos += 1
                out.append(s)
            elif head == "define":
                if depth != 0:
                    raise KittyCodeError(n, "Make routines at the top, not inside other blocks.")
                if len(w) != 2 or not NAME_RE.match(w[1]) or w[1] in KEYWORDS:
                    raise KittyCodeError(n, "Give your routine a one-word name, like DEFINE HOP.")
                s = Stmt("define", n, w[1])
                s.body, closer = block(depth + 1, ("end",))
                if closer is None:
                    raise KittyCodeError(n, "This DEFINE needs an END.")
                pos += 1
                out.append(s)
            elif len(w) == 1 and head in defined:
                out.append(Stmt("call", n, head))
            elif head in ("end", "else"):
                raise KittyCodeError(n, f"This {head.upper()} has nothing to finish.",
                                     "Check that every REPEAT, IF and DEFINE has one END.")
            else:
                raise KittyCodeError(n, f"Hmm, I don't know \"{t}\".", suggest(head, tuple(defined)))
        return out, None

    program, closer = block(0, ())
    return program


def count_commands(program: list[Stmt]) -> int:
    total = 0
    for s in program:
        total += 1 + count_commands(s.body) + count_commands(s.other)
    return total


def to_tree(program: list[Stmt]) -> list:
    """Plain-JSON form of a program, used by the classroom robot runner."""
    out = []
    for s in program:
        node = {"op": s.op, "line": s.line}
        if s.arg is not None:
            node["arg"] = s.arg
        if s.cond:
            node["cond"], node["not"] = s.cond, s.negate
        if s.body:
            node["body"] = to_tree(s.body)
        if s.other:
            node["else"] = to_tree(s.other)
        out.append(node)
    return out


class _Stop(Exception):
    pass


@dataclass
class World:
    grid: list[list[str]]
    x: int
    y: int
    dir: str
    samples: set
    base: tuple
    devils: list = field(default_factory=list)

    @classmethod
    def from_map(cls, rows: list[str]) -> "World":
        grid, x, y, d, samples, base, devils = [], 0, 0, "E", set(), None, []
        for j, row in enumerate(rows):
            cells = list(row)
            for i, ch in enumerate(cells):
                if ch in START_CHARS:
                    x, y, d = i, j, START_CHARS[ch]
                    cells[i] = "."
                elif ch == "*":
                    samples.add((i, j))
                elif ch == "B":
                    base = (i, j)
                elif ch in "@$":
                    devils.append([i, j, 1, 0] if ch == "@" else [i, j, 0, 1])
                    cells[i] = "."
            grid.append(cells)
        if base is None:
            raise ValueError("map has no base")
        return cls(grid, x, y, d, samples, base, devils)

    def devil_at(self, x: int, y: int) -> bool:
        return any(dv[0] == x and dv[1] == y for dv in self.devils)

    def move_devils(self) -> None:
        """Each dust devil moves one cell, bouncing off rocks, the map edge and the base."""
        for dv in self.devils:
            for _ in range(2):
                nx, ny = dv[0] + dv[2], dv[1] + dv[3]
                if self.cell(nx, ny) in "#B":
                    dv[2], dv[3] = -dv[2], -dv[3]
                    continue
                dv[0], dv[1] = nx, ny
                break

    def cell(self, x: int, y: int) -> str:
        if 0 <= y < len(self.grid) and 0 <= x < len(self.grid[y]):
            return self.grid[y][x]
        return "#"

    def look(self, turn: int) -> str:
        d = DIRS[(DIRS.index(self.dir) + turn) % 4]
        dx, dy = DELTA[d]
        return self.cell(self.x + dx, self.y + dy)

    def clear(self, turn: int) -> bool:
        """A path: no rock and no dust devil."""
        d = DIRS[(DIRS.index(self.dir) + turn) % 4]
        dx, dy = DELTA[d]
        return self.cell(self.x + dx, self.y + dy) != "#" and not self.devil_at(self.x + dx, self.y + dy)


def run(source: str, rows: list[str], par: int | None = None, battery: int | None = None) -> dict:
    """Parse and run a program on a map. Returns a JSON-friendly result."""
    try:
        program = parse(source)
    except KittyCodeError as err:
        return {"status": "error", "error": err.as_dict(), "trace": [], "stars": 0,
                "commands": 0, "steps": 0, "collected": 0}
    world = World.from_map(rows)
    total_samples = len(world.samples)
    routines = {s.arg: s for s in program if s.op == "define"}
    trace: list[dict] = []
    collected: list = []
    counters = {"steps": 0, "ticks": 0}
    outcome = {"status": "done", "message": ""}
    energy = {"left": battery}

    def record(s: Stmt, op: str, note: str = "") -> None:
        entry = {"line": s.line, "op": op, "x": world.x, "y": world.y, "dir": world.dir, "note": note}
        if world.devils:
            entry["devils"] = [[dv[0], dv[1]] for dv in world.devils]
        if battery is not None:
            entry["energy"] = energy["left"]
        trace.append(entry)

    def use_energy(s: Stmt) -> None:
        if battery is None:
            return
        if energy["left"] <= 0:
            record(s, "flat")
            outcome.update(status="flat", message="The battery is empty! Plan a route past a charging pad.", line=s.line)
            raise _Stop
        energy["left"] -= 1

    def blown(s: Stmt) -> None:
        record(s, "blown")
        outcome.update(status="blown", message="Whoosh! A dust devil blew the rover off course. Wait for it to pass!", line=s.line)
        raise _Stop

    def world_turn(s: Stmt) -> None:
        # After every action the dust devils move one cell.
        if not world.devils:
            return
        world.move_devils()
        if trace:
            trace[-1]["devils"] = [[dv[0], dv[1]] for dv in world.devils]
        if world.devil_at(world.x, world.y):
            blown(s)

    def step(s: Stmt) -> None:
        counters["steps"] += 1
        if counters["steps"] > MAX_STEPS:
            outcome.update(status="too_long", message="The rover got tired! Your program ran too many steps.")
            raise _Stop

    def tick(s: Stmt) -> None:
        counters["ticks"] += 1
        if counters["ticks"] > MAX_TICKS:
            outcome.update(status="too_long", message="Your loop never ends. Does it ever reach the base?")
            raise _Stop

    def check(cond: str, negate: bool) -> bool:
        value = {
            "rock ahead": lambda: world.look(0) == "#",
            "path ahead": lambda: world.clear(0),
            "path left": lambda: world.clear(-1),
            "path right": lambda: world.clear(1),
            "sample here": lambda: (world.x, world.y) in world.samples,
            "at base": lambda: (world.x, world.y) == world.base,
        }[cond]()
        return value != negate

    def execute(block: list[Stmt], depth: int) -> None:
        for s in block:
            tick(s)
            if s.op == "move":
                for _ in range(s.arg):
                    step(s)
                    use_energy(s)
                    dx, dy = DELTA[world.dir]
                    if world.cell(world.x + dx, world.y + dy) == "#":
                        record(s, "bonk", "rock")
                        outcome.update(status="crashed", message="Bonk! A rock is in the way.", line=s.line)
                        raise _Stop
                    if world.devil_at(world.x + dx, world.y + dy):
                        blown(s)
                    world.x += dx
                    world.y += dy
                    record(s, "move")
                    # Ice: keep sliding until you reach normal ground or something solid.
                    for _slide in range(30):
                        if world.cell(world.x, world.y) != "~" or world.cell(world.x + dx, world.y + dy) == "#":
                            break
                        if world.devil_at(world.x + dx, world.y + dy):
                            blown(s)
                        world.x += dx
                        world.y += dy
                        record(s, "slide")
                    if battery is not None and world.cell(world.x, world.y) == "+":
                        energy["left"] = battery
                        record(s, "charge")
                    world_turn(s)
            elif s.op == "turn":
                step(s)
                use_energy(s)
                world.dir = DIRS[(DIRS.index(world.dir) + (1 if s.arg == "right" else -1)) % 4]
                record(s, "turn")
                world_turn(s)
            elif s.op == "wait":
                for _ in range(s.arg):
                    step(s)
                    record(s, "wait")
                    world_turn(s)
            elif s.op == "drill":
                step(s)
                here = (world.x, world.y)
                if here in world.samples:
                    world.samples.discard(here)
                    collected.append(here)
                    record(s, "drill", "sample")
                else:
                    record(s, "drill", "empty")
                world_turn(s)
            elif s.op == "scan":
                step(s)
                ahead = world.look(0)
                dx, dy = DELTA[world.dir]
                note = "devil" if world.devil_at(world.x + dx, world.y + dy) else {"#": "rock", "*": "sample", "B": "base", "~": "ice", "+": "pad"}.get(ahead, "path")
                record(s, "scan", note)
                world_turn(s)
            elif s.op == "repeat":
                for _ in range(s.arg):
                    tick(s)
                    execute(s.body, depth + 1)
            elif s.op == "until":
                while not check(s.cond, s.negate):
                    tick(s)
                    execute(s.body, depth + 1)
            elif s.op == "if":
                execute(s.body if check(s.cond, s.negate) else s.other, depth + 1)
            elif s.op == "call":
                if depth >= MAX_DEPTH:
                    outcome.update(status="too_long", message="Your routines keep calling each other forever!")
                    raise _Stop
                execute(routines[s.arg].body, depth + 1)
            # "define" only declares a routine; it does nothing when reached.

    try:
        execute(program, 0)
    except _Stop:
        pass
    at_base = (world.x, world.y) == world.base
    commands = count_commands(program)
    if outcome["status"] == "done":
        outcome["status"] = "success" if at_base else "not_home"
        if not at_base:
            outcome["message"] = "The program finished, but the rover isn't at the base yet."
    stars = 0
    if outcome["status"] == "success":
        stars = 1 + (par is not None and commands <= par) + (len(collected) == total_samples)
    result = {
        "status": outcome["status"],
        "message": outcome.get("message", ""),
        "stars": stars,
        "commands": commands,
        "steps": counters["steps"],
        "collected": len(collected),
        "samples": total_samples,
        "final": {"x": world.x, "y": world.y, "dir": world.dir},
        "energy": energy["left"],
        "trace": trace,
    }
    if "line" in outcome:
        result["line"] = outcome["line"]
    return result
