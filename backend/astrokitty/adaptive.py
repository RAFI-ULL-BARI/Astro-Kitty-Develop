"""Adaptive learning with Bayesian Knowledge Tracing (BKT).

For each skill we keep one number: the chance the kid has learned it. Every
answer or level result nudges that number up or down, allowing for lucky guesses
and silly slips. Quizzes then favour skills with low numbers.
"""
from __future__ import annotations

P_INIT = 0.3     # chance a skill is known before any evidence
P_LEARN = 0.15   # chance of learning it from one practice
P_GUESS = 0.25   # chance of a right answer without knowing
P_SLIP = 0.1     # chance of a wrong answer despite knowing
MASTERED = 0.85

# Kitty Code world concepts feed the same skill map as quiz questions.
WORLD_SKILLS = {1: "sequence", 2: "loops", 3: "conditions", 4: "routines", 5: "conditions", 6: "routines"}


def update(p_known: float, correct: bool) -> float:
    if correct:
        evidence = p_known * (1 - P_SLIP)
        posterior = evidence / (evidence + (1 - p_known) * P_GUESS)
    else:
        evidence = p_known * P_SLIP
        posterior = evidence / (evidence + (1 - p_known) * (1 - P_GUESS))
    return round(posterior + (1 - posterior) * P_LEARN, 4)


def apply(mastery: dict[str, float], observations: list[tuple[str, bool]]) -> dict[str, float]:
    out = dict(mastery)
    for skill, correct in observations:
        out[skill] = update(out.get(skill, P_INIT), correct)
    return out


def summary(mastery: dict[str, float]) -> dict:
    strong = sorted((s for s, p in mastery.items() if p >= MASTERED))
    weak = sorted((s for s, p in mastery.items() if p < 0.5), key=lambda s: mastery[s])
    return {"mastered": strong, "practice": weak}
