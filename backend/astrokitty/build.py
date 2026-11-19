"""Build the game's data files from Python.

    python -m astrokitty.build          # write dist/data/*.json
    python -m astrokitty.build --check  # fail if the quiz bank or levels have problems,
                                        # or if the committed files are out of date (CI)
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from . import levels as lv
from . import quizzes
from .kittycode import run

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "dist" / "data"

# Extra programs that exercise errors and edge cases in both engines.
EXTRA_CASES = [
    ("MOVE 3", [">..B"]),
    ("move three", [">..B"]),
    ("এগোও ৩", [">..B"]),
    ("পুনরাবৃত্তি ৩ বার\n  এগোও\nশেষ", [">..B"]),
    ("mvoe 3", [">..B"]),
    ("MOVE 10", [">..B"]),
    ("MOVE 4", [">..B"]),
    ("TURN AROUND", [">..B"]),
    ("REPEAT 3 TIMES\nMOVE", [">..B"]),
    ("END", [">..B"]),
    ("IF ROKC AHEAD\nMOVE\nEND", [">..B"]),
    ("REPEAT UNTIL AT BASE\nTURN LEFT\nEND", [">..B"]),
    ("REPEAT 100 TIMES\nMOVE\nEND", [">..B"]),
    ("DEFINE GO\nMOVE\nGO\nEND\nGO", [">..B"]),
    ("GO\nDEFINE GO\nMOVE 3\nEND", [">..B"]),
    ("DEFINE MOVE\nMOVE\nEND", [">..B"]),
    ("IF NOT PATH AHEAD\nTURN LEFT\nELSE\nMOVE 3\nEND", [">..B"]),
    ("SCAN\nDRILL\nMOVE\nSCAN\nMOVE 2", [">*.B"]),
    ("# just a comment\nMOVE 3 // go!", [">..B"]),
    ("TURN RIGHT\nMOVE", [">..B"]),
    ("REPEAT 2\n  MOVE\nEND\nMOVE", [">..B"]),
    ("repeat until at base\n  if path ahead\n    move\n  else\n    turn right\n  end\nend", [">.#", "#.#", "#B#"]),
    ("যদি পথ সামনে\n  এগোও ৩\nনইলে\n  বামে ঘোরো\nশেষ", [">..B"]),
    ("TURN LEFT\nMOVE", ["...", ".>.", "..B"]),
    ("", [">..B"]),
]


def cases(all_levels: list[dict]) -> list[dict]:
    out = []

    def add(source, rows, par=None):
        result = run(source, rows, par)
        result.pop("trace")
        out.append({"source": source, "map": rows, "par": par, "expect": result})

    for level in all_levels:
        ref = level["reference"]
        add(ref, level["map"], level["par"])
        lines = ref.splitlines()
        add("\n".join(lines[:-1]), level["map"], level["par"])
        add("MOVE 9\n" + ref, level["map"], level["par"])
        add(ref.replace("LEFT", "RIGHT"), level["map"], level["par"])
    for source, rows in EXTRA_CASES:
        add(source, rows, 3)
    return out


def outputs() -> dict[str, object]:
    all_levels = lv.build_all()
    bank = quizzes.load_bank()
    return {
        "kitty-code-levels.json": {"worlds": lv.WORLDS, "levels": [lv.public(level) for level in all_levels]},
        "kitty-code-cases.json": cases(all_levels),
        "quizzes.json": quizzes.client_bank(bank),
    }


def dump(data) -> str:
    return json.dumps(data, ensure_ascii=False, indent=1, sort_keys=True) + "\n"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="validate and compare instead of writing")
    args = parser.parse_args(argv)
    problems = quizzes.validate(quizzes.load_bank())
    for p in problems:
        print("quiz bank:", p, file=sys.stderr)
    files = outputs()
    stale = []
    for name, data in files.items():
        path = DATA / name
        text = dump(data)
        if args.check:
            if not path.exists() or path.read_text(encoding="utf-8") != text:
                stale.append(name)
        else:
            path.write_text(text, encoding="utf-8")
            print("wrote", path.relative_to(ROOT))
    for name in stale:
        print(f"dist/data/{name} is out of date: run `python -m astrokitty.build`", file=sys.stderr)
    return 1 if problems or stale else 0


if __name__ == "__main__":
    sys.exit(main())
