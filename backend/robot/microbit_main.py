# Kitty Code on a real classroom rover: BBC micro:bit V2 + a two-motor driver board.
#
# Wiring (change the pins below to match your kit):
#   left motor  forward/back: pin13 / pin14     right motor forward/back: pin15 / pin16
#   HC-SR04 ultrasonic (3.3 V model): trigger pin1, echo pin2  -> "ROCK AHEAD"
#   light sensor under the rover: pin0 (analog)                 -> dark tape = sample, very dark = base
#
# The map is a mat with a square grid. Calibrate STEP_MS and TURN_MS so one MOVE
# drives exactly one square and one TURN is exactly 90 degrees.
#
# NOTE: this driver has not been tested on hardware yet. The logic it runs
# (rover_vm.py) is tested against the game's own engine.
#
# `python -m astrokitty.robot program.txt` writes a ready-to-flash main.py that
# contains this file, rover_vm.py and your program.
from microbit import display, Image, pin0, pin1, pin2, pin13, pin14, pin15, pin16, sleep, button_a
import machine
import utime

STEP_MS = 900
TURN_MS = 520
SPEED = 800          # 0-1023
ROCK_CM = 12
SAMPLE_BELOW = 450   # analog light level for dark tape
BASE_BELOW = 150     # analog light level for the black base square


def motors(left, right):
    for fwd, back, value in ((pin13, pin14, left), (pin15, pin16, right)):
        fwd.write_analog(max(0, value))
        back.write_analog(max(0, -value))


def stop():
    motors(0, 0)


def distance_cm():
    pin1.write_digital(0)
    utime.sleep_us(2)
    pin1.write_digital(1)
    utime.sleep_us(10)
    pin1.write_digital(0)
    pulse = machine.time_pulse_us(pin2, 1, 30000)
    return 999 if pulse < 0 else pulse / 58


class MicrobitRover:
    def forward(self):
        display.show(Image.ARROW_N)
        motors(SPEED, SPEED)
        sleep(STEP_MS)
        stop()

    def turn(self, direction):
        display.show(Image.ARROW_W if direction == "left" else Image.ARROW_E)
        motors(-SPEED, SPEED) if direction == "left" else motors(SPEED, -SPEED)
        sleep(TURN_MS)
        stop()

    def drill(self):
        display.show(Image.DIAMOND if self.sample_here() else Image.SAD)
        sleep(600)

    def scan(self):
        display.show(Image.SKULL if self.rock_ahead() else Image.YES)
        sleep(400)

    def wait(self):
        display.show(Image.CLOCK12)
        sleep(800)

    def rock_ahead(self):
        return distance_cm() < ROCK_CM

    def _peek(self, direction):
        self.turn(direction)
        clear = not self.rock_ahead()
        self.turn("right" if direction == "left" else "left")
        return clear

    def path_left(self):
        return self._peek("left")

    def path_right(self):
        return self._peek("right")

    def sample_here(self):
        level = pin0.read_analog()
        return BASE_BELOW <= level < SAMPLE_BELOW

    def at_base(self):
        return pin0.read_analog() < BASE_BELOW


def main(program):
    display.scroll("A=GO")
    while not button_a.was_pressed():
        sleep(50)
    status = RoverVM(MicrobitRover(), program).run()  # noqa: F821 (joined in by astrokitty.robot)
    stop()
    display.show(Image.HAPPY if status == "success" else Image.CONFUSED)
