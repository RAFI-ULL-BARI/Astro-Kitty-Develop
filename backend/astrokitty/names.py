"""Safe, generated kitty names. Kids never type a name, so nothing rude or
identifying can appear on a leaderboard."""
from __future__ import annotations

import secrets

ADJECTIVES = [
    "Brave", "Bright", "Clever", "Cosmic", "Curious", "Daring", "Dreamy", "Fizzy", "Fluffy",
    "Gentle", "Giggly", "Happy", "Jolly", "Lucky", "Mighty", "Nimble", "Plucky", "Quick",
    "Shiny", "Sleepy", "Snappy", "Sparkly", "Speedy", "Starry", "Sunny", "Swift", "Tiny",
    "Twinkly", "Zippy", "Bouncy",
]
SPACE_WORDS = [
    "Comet", "Rocket", "Nebula", "Meteor", "Orbit", "Galaxy", "Crater", "Rover", "Moon",
    "Star", "Phobos", "Deimos", "Aurora", "Pulsar", "Quasar", "Lander", "Satellite", "Cosmo",
    "Nova", "Jupiter", "Saturn", "Dune", "Asteroid", "Eclipse",
]


def make_name(taken: set[str] | None = None) -> str:
    taken = taken or set()
    for _ in range(50):
        name = f"{secrets.choice(ADJECTIVES)} {secrets.choice(SPACE_WORDS)} Kitty"
        if name not in taken:
            return name
    # Very crowded server: add a small number.
    while True:
        name = f"{secrets.choice(ADJECTIVES)} {secrets.choice(SPACE_WORDS)} Kitty {secrets.randbelow(900) + 100}"
        if name not in taken:
            return name


def is_generated(name: str) -> bool:
    parts = name.split()
    if len(parts) not in (3, 4) or parts[2] != "Kitty":
        return False
    if parts[0] not in ADJECTIVES or parts[1] not in SPACE_WORDS:
        return False
    return len(parts) == 3 or (parts[3].isdigit() and len(parts[3]) == 3)
