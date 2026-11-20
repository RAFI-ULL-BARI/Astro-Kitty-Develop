"""Surprise levels: random maps with ice, batteries and dust devils.

Every map is solved by a breadth-first search over everything the rover could do,
so a level is only kept if it can be won. The solution must also *use* the surprise
(slide on ice, stop at a charging pad, or WAIT for a dust devil), then it is checked
once more with the real Kitty Code engine.
"""
from __future__ import annotations

import random
from collections import deque

from .kittycode import DELTA, DIRS, START_CHARS, count_commands, parse, run

ACTIONS = ("move", "left", "right", "drill", "wait")
MAX_STATES = 120_000


def _grid(rows):
    grid = []
    for row in rows:
        grid.append(["." if ch in START_CHARS or ch in "@$" else ch for ch in row])
    return grid


def devil_track(rows, limit=240):
    """Dust devil positions after each step, and how often the pattern repeats."""
    grid = _grid(rows)
    cell = lambda x, y: grid[y][x] if 0 <= y < len(grid) and 0 <= x < len(grid[y]) else "#"
    devils = [[i, j, 1, 0] if ch == "@" else [i, j, 0, 1] for j, row in enumerate(rows) for i, ch in enumerate(row) if ch in "@$"]
    if not devils:
        return [()], 1
    seen, frames = {}, []
    for t in range(limit):
        key = tuple(tuple(d) for d in devils)
        if key in seen:
            return frames[:t], t - seen[key] if seen[key] == 0 else None
        seen[key] = t
        frames.append(frozenset((d[0], d[1]) for d in devils))
        for dv in devils:
            for _ in range(2):
                nx, ny = dv[0] + dv[2], dv[1] + dv[3]
                if cell(nx, ny) in "#B":
                    dv[2], dv[3] = -dv[2], -dv[3]
                    continue
                dv[0], dv[1] = nx, ny
                break
    return frames, None


def solve(rows, battery=None, max_states=MAX_STATES):
    """Shortest list of actions that collects every sample and ends at the base, or None."""
    grid = _grid(rows)
    cell = lambda x, y: grid[y][x] if 0 <= y < len(grid) and 0 <= x < len(grid[y]) else "#"
    start = base = None
    samples = []
    for j, row in enumerate(rows):
        for i, ch in enumerate(row):
            if ch in START_CHARS:
                start = (i, j, START_CHARS[ch])
            elif ch == "B":
                base = (i, j)
            elif ch == "*":
                samples.append((i, j))
    frames, period = devil_track(rows)
    if period is None:
        return None
    full = (1 << len(samples)) - 1
    first = (start[0], start[1], start[2], battery if battery is not None else 0, 0, 0)
    parent = {first: None}
    queue = deque([first])
    while queue:
        state = queue.popleft()
        x, y, d, e, mask, ph = state
        if (x, y) == base and mask == full:
            path = []
            while parent[state]:
                state, action = parent[state]
                path.append(action)
            return path[::-1]
        now = frames[ph]
        for action in ACTIONS:
            nx, ny, nd, ne, nm = x, y, d, e, mask
            if action == "wait" and len(frames) == 1:
                continue
            if action in ("move", "left", "right") and battery is not None:
                if ne <= 0:
                    continue
                ne -= 1
            if action == "move":
                dx, dy = DELTA[d]
                if cell(nx + dx, ny + dy) == "#" or (nx + dx, ny + dy) in now:
                    continue
                nx, ny = nx + dx, ny + dy
                blocked = False
                for _ in range(30):
                    if cell(nx, ny) != "~" or cell(nx + dx, ny + dy) == "#":
                        break
                    if (nx + dx, ny + dy) in now:
                        blocked = True
                        break
                    nx, ny = nx + dx, ny + dy
                if blocked:
                    continue
                if battery is not None and cell(nx, ny) == "+":
                    ne = battery
            elif action in ("left", "right"):
                nd = DIRS[(DIRS.index(d) + (1 if action == "right" else -1)) % 4]
            elif action == "drill":
                if (x, y) not in samples or mask & (1 << samples.index((x, y))):
                    continue
                nm = mask | (1 << samples.index((x, y)))
            nph = (ph + 1) % period
            if (nx, ny) in frames[nph]:
                continue
            nxt = (nx, ny, nd, ne, nm, nph)
            if nxt not in parent:
                parent[nxt] = (state, action)
                if len(parent) > max_states:
                    return None
                queue.append(nxt)
    return None


def to_program(actions):
    """Turn single actions into Kitty Code, joining repeats (MOVE 3, WAIT 2)."""
    lines, i = [], 0
    while i < len(actions):
        a = actions[i]
        j = i
        while j < len(actions) and actions[j] == a and a in ("move", "wait") and j - i < 9:
            j += 1
        n = max(1, j - i)
        if a == "move":
            lines.append(f"MOVE {n}" if n > 1 else "MOVE")
        elif a == "wait":
            lines.append(f"WAIT {n}" if n > 1 else "WAIT")
        elif a in ("left", "right"):
            lines.append(f"TURN {a.upper()}")
        else:
            lines.append("DRILL")
        i = i + n if a in ("move", "wait") else i + 1
    return "\n".join(lines)


def _free(grid, random_, taken):
    h, w = len(grid), len(grid[0])
    for _ in range(200):
        x, y = random_.randrange(w), random_.randrange(h)
        if grid[y][x] == "." and (x, y) not in taken:
            return x, y
    return None


def make_map(random_, w, h, *, ice=False, battery=False, devils=0, samples=1, rocks=0.2):
    grid = [["#" if random_.random() < rocks else "." for _ in range(w)] for _ in range(h)]
    taken = set()
    sx, sy = _free(grid, random_, taken) or (0, 0)
    grid[sy][sx] = "."
    taken.add((sx, sy))
    far = [(x, y) for y in range(h) for x in range(w) if abs(x - sx) + abs(y - sy) >= (w + h) // 2]
    bx, by = random_.choice(far) if far else (w - 1, h - 1)
    grid[by][bx] = "B"
    taken.add((bx, by))
    for _ in range(samples):
        spot = _free(grid, random_, taken)
        if spot:
            grid[spot[1]][spot[0]] = "*"
            taken.add(spot)
    if ice:
        for _ in range(random_.randint(2, 3)):
            spot = _free(grid, random_, taken)
            if not spot:
                continue
            x, y = spot
            dx, dy = random_.choice(list(DELTA.values()))
            for _ in range(random_.randint(2, 4)):
                if 0 <= x < w and 0 <= y < h and grid[y][x] == "." and (x, y) not in taken:
                    grid[y][x] = "~"
                x, y = x + dx, y + dy
    if battery:
        for _ in range(random_.randint(1, 2)):
            spot = _free(grid, random_, taken)
            if spot:
                grid[spot[1]][spot[0]] = "+"
                taken.add(spot)
    for _ in range(devils):
        spot = _free(grid, random_, taken | {(sx + dx, sy + dy) for dx, dy in DELTA.values()})
        if spot:
            grid[spot[1]][spot[0]] = random_.choice("@$")
            taken.add(spot)
    grid[sy][sx] = random_.choice("^>v<")
    return ["".join(r) for r in grid]


def gen_surprise(random_, w, h, *, ice=False, battery=False, devils=0, samples=1, min_steps=6, max_steps=60, tries=400):
    """A random surprise level that can be won and needs its surprise. Returns (rows, reference, battery)."""
    for _ in range(tries):
        rows = make_map(random_, w, h, ice=ice, battery=battery, devils=devils, samples=samples)
        cap = None
        if battery:
            free_run = solve(rows)
            if not free_run:
                continue
            spend = sum(a in ("move", "left", "right") for a in free_run)
            cap = max(4, int(spend * 0.6))
            actions = None
            while cap < spend:
                actions = solve(rows, cap)
                if actions:
                    break
                cap += 1
            if not actions or cap >= spend:
                continue
        else:
            actions = solve(rows)
        if not actions or not (min_steps <= len(actions) <= max_steps):
            continue
        if devils and "wait" not in actions:
            continue
        reference = to_program(actions)
        par = count_commands(parse(reference))
        result = run(reference, rows, par, cap)
        ops = {t["op"] for t in result["trace"]}
        if result["status"] != "success" or result["stars"] != 3:
            continue
        if ice and "slide" not in ops:
            continue
        if battery and "charge" not in ops:
            continue
        return rows, reference, cap
    raise RuntimeError("could not build a surprise level")


def surprise_seed(*parts) -> random.Random:
    return random.Random("-".join(str(p) for p in ("astro-kitty-surprise", *parts)))
