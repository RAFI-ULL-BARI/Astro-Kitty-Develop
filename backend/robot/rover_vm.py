# Kitty Code robot runner. Runs on MicroPython (BBC micro:bit V2, Raspberry Pi Pico)
# and on normal Python. It executes the JSON program tree made by
# `python -m astrokitty.robot` (or POST /api/robot/compile).
#
# Keep this file MicroPython-friendly: no dataclasses, typing or f-string tricks.

MAX_STEPS = 1000
MAX_TICKS = 5000
MAX_DEPTH = 20


class Stop(Exception):
    pass


class RoverVM:
    """`hw` must provide: forward(), turn(direction), drill(), scan(),
    rock_ahead(), path_left(), path_right(), sample_here(), at_base()."""

    def __init__(self, hw, program):
        self.hw = hw
        self.program = program
        self.routines = {}
        for node in program:
            if node["op"] == "define":
                self.routines[node["arg"]] = node.get("body", [])
        self.steps = 0
        self.ticks = 0
        self.status = "done"

    def _step(self):
        self.steps += 1
        if self.steps > MAX_STEPS:
            self.status = "too_long"
            raise Stop()

    def _tick(self):
        self.ticks += 1
        if self.ticks > MAX_TICKS:
            self.status = "too_long"
            raise Stop()

    def check(self, cond, negate):
        hw = self.hw
        if cond == "rock ahead":
            value = hw.rock_ahead()
        elif cond == "path ahead":
            value = not hw.rock_ahead()
        elif cond == "path left":
            value = hw.path_left()
        elif cond == "path right":
            value = hw.path_right()
        elif cond == "sample here":
            value = hw.sample_here()
        else:
            value = hw.at_base()
        return value != negate

    def execute(self, block, depth):
        for node in block:
            self._tick()
            op = node["op"]
            if op == "move":
                for _ in range(node.get("arg", 1)):
                    self._step()
                    if self.hw.rock_ahead():
                        self.status = "crashed"
                        raise Stop()
                    self.hw.forward()
            elif op == "turn":
                self._step()
                self.hw.turn(node["arg"])
            elif op == "drill":
                self._step()
                self.hw.drill()
            elif op == "scan":
                self._step()
                self.hw.scan()
            elif op == "repeat":
                for _ in range(node["arg"]):
                    self._tick()
                    self.execute(node.get("body", []), depth + 1)
            elif op == "until":
                while not self.check(node["cond"], node.get("not", False)):
                    self._tick()
                    self.execute(node.get("body", []), depth + 1)
            elif op == "if":
                if self.check(node["cond"], node.get("not", False)):
                    self.execute(node.get("body", []), depth + 1)
                else:
                    self.execute(node.get("else", []), depth + 1)
            elif op == "call":
                if depth >= MAX_DEPTH:
                    self.status = "too_long"
                    raise Stop()
                self.execute(self.routines[node["arg"]], depth + 1)

    def run(self):
        try:
            self.execute(self.program, 0)
        except Stop:
            pass
        if self.status == "done":
            self.status = "success" if self.hw.at_base() else "not_home"
        return self.status
