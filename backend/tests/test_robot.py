import ast
import sys
from pathlib import Path

from astrokitty import levels
from astrokitty.kittycode import DELTA, DIRS, World, parse, run, to_tree
from astrokitty.robot import build_main

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "robot"))
from rover_vm import RoverVM  # noqa: E402


class GridRover:
    """A pretend robot that drives on a game map, to test the robot runner."""

    def __init__(self, rows):
        self.w = World.from_map(rows)

    def forward(self):
        dx, dy = DELTA[self.w.dir]
        self.w.x += dx
        self.w.y += dy

    def turn(self, direction):
        self.w.dir = DIRS[(DIRS.index(self.w.dir) + (1 if direction == "right" else -1)) % 4]

    def drill(self):
        self.w.samples.discard((self.w.x, self.w.y))

    def scan(self):
        pass

    def rock_ahead(self):
        return self.w.look(0) == "#"

    def path_left(self):
        return self.w.look(-1) != "#"

    def path_right(self):
        return self.w.look(1) != "#"

    def sample_here(self):
        return (self.w.x, self.w.y) in self.w.samples

    def at_base(self):
        return (self.w.x, self.w.y) == self.w.base


def test_robot_runner_matches_the_game_engine_on_every_level():
    # The classroom robot drives on a plain mat: no virtual ice, batteries or dust devils.
    for level in [lv for lv in levels.build_all() if lv["world"] <= 6]:
        for source in (level["reference"], level["reference"].replace("LEFT", "RIGHT")):
            game = run(source, level["map"], level["par"])
            if game["status"] == "error":
                continue
            rover = GridRover(level["map"])
            status = RoverVM(rover, to_tree(parse(source))).run()
            assert status == game["status"], level["id"]
            assert (rover.w.x, rover.w.y, rover.w.dir) == tuple(game["final"].values()), level["id"]


def test_generated_main_py_is_valid_python_with_the_program():
    code = build_main("REPEAT 2 TIMES\nMOVE\nTURN LEFT\nEND")
    ast.parse(code)
    assert 'PROGRAM = [{"op": "repeat"' in code and "class RoverVM" in code
