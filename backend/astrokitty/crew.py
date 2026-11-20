"""Co-op Mars base: 2-4 classmates keep a base alive for five sols together.

Pure game rules live here so they can be tested without a network. The API
wraps them in a WebSocket room (see api.py). Kids can only send preset messages
and emoji: there is no free-text chat between children.
"""
from __future__ import annotations

import random
from dataclasses import dataclass, field

ROLES = {
    "engineer": {"en": "Engineer", "bn": "প্রকৌশলী", "emoji": "🔧"},
    "botanist": {"en": "Botanist", "bn": "উদ্ভিদবিদ", "emoji": "🌱"},
    "pilot": {"en": "Rover pilot", "bn": "রোভার চালক", "emoji": "🛞"},
    "scientist": {"en": "Scientist", "bn": "বিজ্ঞানী", "emoji": "🔬"},
}
ACTIONS = {
    "fix_panels": {"role": "engineer", "effect": {"power": 25}, "en": "Clean the solar panels", "bn": "সোলার প্যানেল পরিষ্কার"},
    "repair_air": {"role": "engineer", "effect": {"oxygen": 22, "power": -5}, "en": "Fix the oxygen maker", "bn": "অক্সিজেন যন্ত্র ঠিক করা"},
    "water_garden": {"role": "botanist", "effect": {"food": 22, "water": -8}, "en": "Water the space garden", "bn": "মহাকাশ বাগানে পানি"},
    "recycle_water": {"role": "botanist", "effect": {"water": 18, "power": -6}, "en": "Recycle water", "bn": "পানি পুনর্ব্যবহার"},
    "rover_ice": {"role": "pilot", "effect": {"water": 25, "power": -6}, "en": "Drive to dig ice", "bn": "বরফ খুঁড়তে রোভার চালানো"},
    "supply_run": {"role": "pilot", "effect": {"food": 12, "oxygen": 8}, "en": "Fetch the supply drop", "bn": "সরবরাহ আনা"},
    "forecast": {"role": "scientist", "effect": {}, "shield": True, "en": "Forecast the weather", "bn": "আবহাওয়ার পূর্বাভাস"},
    "make_oxygen": {"role": "scientist", "effect": {"oxygen": 15, "power": -8}, "en": "Make oxygen like MOXIE", "bn": "মক্সির মতো অক্সিজেন বানানো"},
    "rest": {"role": None, "effect": {}, "en": "Rest and save energy", "bn": "বিশ্রাম ও শক্তি সঞ্চয়"},
}
EVENTS = {
    "calm": {"effect": {}, "en": "A calm, sunny sol.", "bn": "শান্ত, রোদেলা এক সল।"},
    "dust_storm": {"effect": {"power": -22}, "en": "A dust storm covers the panels!", "bn": "ধুলিঝড় প্যানেল ঢেকে দিল!"},
    "cold_night": {"effect": {"power": -15}, "en": "A freezing night uses extra power for heat.", "bn": "জমাট ঠান্ডা রাতে গরম রাখতে বাড়তি বিদ্যুৎ লাগল।"},
    "air_leak": {"effect": {"oxygen": -16}, "en": "A tiny air leak!", "bn": "ছোট্ট একটা বাতাস লিক!"},
    "solar_flare": {"effect": {"oxygen": -6, "food": -6}, "en": "A solar flare! Everyone hides in the shelter.", "bn": "সৌরশিখা! সবাই আশ্রয়ে লুকাল।"},
    "thirsty_plants": {"effect": {"water": -14}, "en": "The plants are extra thirsty.", "bn": "গাছগুলোর বাড়তি পিপাসা।"},
}
# Every crew member breathes, drinks and eats each sol; the base itself needs power.
DAILY_PER_MEMBER = {"oxygen": -5, "water": -4, "food": -4, "power": -4}
BASE_UPKEEP = {"power": -4}
RESOURCES = ("oxygen", "water", "food", "power")
SOLS = 5
MESSAGES = {
    "hello": {"en": "Hello crew! 👋", "bn": "হ্যালো দল! 👋"},
    "help": {"en": "I need help! 🆘", "bn": "আমার সাহায্য লাগবে! 🆘"},
    "great": {"en": "Great job! ⭐", "bn": "দারুণ কাজ! ⭐"},
    "oxygen": {"en": "Oxygen is low! 🫁", "bn": "অক্সিজেন কম! 🫁"},
    "water": {"en": "We need water! 💧", "bn": "পানি লাগবে! 💧"},
    "power": {"en": "Power is low! 🔋", "bn": "বিদ্যুৎ কম! 🔋"},
    "food": {"en": "Food is low! 🥕", "bn": "খাবার কম! 🥕"},
    "ready": {"en": "I'm ready! ✅", "bn": "আমি প্রস্তুত! ✅"},
}


@dataclass
class Member:
    name: str
    role: str
    choice: str | None = None


@dataclass
class Base:
    seed: int
    sol: int = 1
    resources: dict = field(default_factory=lambda: {"oxygen": 60, "water": 60, "food": 60, "power": 60})
    members: dict = field(default_factory=dict)
    phase: str = "lobby"  # lobby -> playing -> won / lost
    log: list = field(default_factory=list)

    def __post_init__(self):
        rng = random.Random(self.seed)
        kinds = [k for k in EVENTS if k != "calm"]
        self.events = ["calm"] + [rng.choice(kinds) for _ in range(SOLS - 1)]

    # --- joining -----------------------------------------------------------
    def free_roles(self) -> list[str]:
        taken = {m.role for m in self.members.values()}
        return [r for r in ROLES if r not in taken]

    def join(self, player_id: str, name: str, role: str | None = None) -> Member:
        if player_id in self.members:
            return self.members[player_id]
        if self.phase != "lobby":
            raise ValueError("This mission has already started.")
        free = self.free_roles()
        if not free:
            raise ValueError("The crew is full (4 kitties).")
        role = role if role in free else free[0]
        member = Member(name, role)
        self.members[player_id] = member
        return member

    def leave(self, player_id: str) -> None:
        self.members.pop(player_id, None)
        if self.phase == "playing" and self.members and self.all_chosen():
            self.resolve()

    def start(self) -> None:
        if len(self.members) < 1:
            raise ValueError("Nobody is here yet.")
        self.phase = "playing"

    # --- playing -----------------------------------------------------------
    def allowed(self, player_id: str) -> list[str]:
        role = self.members[player_id].role
        return [a for a, spec in ACTIONS.items() if spec["role"] in (role, None)]

    def choose(self, player_id: str, action: str) -> bool:
        """Record a choice. Returns True when the sol was resolved."""
        if self.phase != "playing":
            raise ValueError("The mission is not running.")
        if action not in self.allowed(player_id):
            raise ValueError("That job belongs to another crew member.")
        self.members[player_id].choice = action
        if self.all_chosen():
            self.resolve()
            return True
        return False

    def all_chosen(self) -> bool:
        return all(m.choice for m in self.members.values())

    def resolve(self) -> dict:
        event = self.events[self.sol - 1]
        shield = any(ACTIONS[m.choice].get("shield") for m in self.members.values() if m.choice)
        change = dict.fromkeys(RESOURCES, 0)
        for k, v in DAILY_PER_MEMBER.items():
            change[k] += v * len(self.members)
        for k, v in BASE_UPKEEP.items():
            change[k] += v
        for m in self.members.values():
            for k, v in ACTIONS[m.choice or "rest"]["effect"].items():
                change[k] += v
        for k, v in EVENTS[event]["effect"].items():
            change[k] += v // 2 if shield else v
        if all(m.choice == "rest" for m in self.members.values()):
            change["power"] += 5
        for k in RESOURCES:
            self.resources[k] = max(0, min(100, self.resources[k] + change[k]))
        entry = {"sol": self.sol, "event": event, "shielded": shield, "change": change,
                 "choices": {m.name: m.choice for m in self.members.values()}}
        self.log.append(entry)
        for m in self.members.values():
            m.choice = None
        if any(self.resources[k] == 0 for k in RESOURCES):
            self.phase = "lost"
        elif self.sol >= SOLS:
            self.phase = "won"
        else:
            self.sol += 1
        return entry

    def forecast(self) -> str | None:
        """Scientists can see the coming event."""
        return self.events[self.sol - 1] if self.phase == "playing" else None

    def view(self, player_id: str | None = None) -> dict:
        me = self.members.get(player_id) if player_id else None
        return {
            "sol": self.sol,
            "sols": SOLS,
            "phase": self.phase,
            "resources": self.resources,
            "crew": [{"name": m.name, "role": m.role, "ready": bool(m.choice)} for m in self.members.values()],
            "free_roles": self.free_roles(),
            "you": {"name": me.name, "role": me.role, "actions": self.allowed(player_id)} if me else None,
            "forecast": self.forecast() if me and me.role == "scientist" else None,
            "last": self.log[-1] if self.log else None,
        }
