"""Quiz bank: load, check, pick questions and score answers on the server."""
from __future__ import annotations

import random
import re
from functools import lru_cache
from pathlib import Path

import yaml

BANK = Path(__file__).resolve().parent.parent / "content" / "quizzes.yaml"
QUIZ_SIZE = 5
TYPES = {"choice", "truefalse", "order"}
# Readability guard for ages 7-12: short sentences, mostly short words.
MAX_WORDS_PER_SENTENCE = 26
MAX_LONG_WORD_SHARE = 0.25  # words of 9+ letters


@lru_cache(maxsize=1)
def load_bank(path: str = str(BANK)) -> dict:
    with open(path, encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    return data


def _readability_problems(text: str) -> list[str]:
    problems = []
    for sentence in re.split(r"[.!?]+", text):
        words = re.findall(r"[A-Za-z']+", sentence)
        if len(words) > MAX_WORDS_PER_SENTENCE:
            problems.append(f"sentence too long ({len(words)} words)")
    # Names such as "Ingenuity" or "Perseverance" are fine: skip capitalised words.
    words = [w for w in re.findall(r"[A-Za-z']+", text) if not w[0].isupper()]
    if len(words) >= 4:
        long_share = sum(len(w) >= 9 for w in words) / len(words)
        if long_share > MAX_LONG_WORD_SHARE:
            problems.append(f"too many long words ({long_share:.0%})")
    return problems


def validate(bank: dict) -> list[str]:
    """Return a list of problems. An empty list means the bank is ready to ship."""
    errors: list[str] = []
    parts = bank.get("parts", {})
    seen: set[str] = set()
    per_part: dict[str, int] = {p: 0 for p in parts}
    for q in bank.get("questions", []):
        qid = q.get("id", "?")
        where = f"{qid}:"
        if qid in seen:
            errors.append(f"{where} duplicate id")
        seen.add(qid)
        if q.get("part") not in parts:
            errors.append(f"{where} unknown part {q.get('part')!r}")
        else:
            per_part[q["part"]] += 1
        if q.get("type") not in TYPES:
            errors.append(f"{where} unknown type {q.get('type')!r}")
            continue
        for field in ("q", "explain"):
            block = q.get(field) or {}
            for lang in ("en", "bn"):
                if not str(block.get(lang, "")).strip():
                    errors.append(f"{where} missing {field}.{lang}")
            errors += [f"{where} {field}.en {p}" for p in _readability_problems(str(block.get("en", "")))]
        if not str(q.get("source", "")).startswith("https://") or "nasa.gov" not in q.get("source", ""):
            errors.append(f"{where} needs a NASA source link")
        if q.get("level") not in (1, 2, 3):
            errors.append(f"{where} level must be 1, 2 or 3")
        if not q.get("skill"):
            errors.append(f"{where} needs a skill")
        if q["type"] == "truefalse":
            if not isinstance(q.get("answer"), bool):
                errors.append(f"{where} truefalse answer must be true or false")
        else:
            options = q.get("options") or []
            if len(options) < 2:
                errors.append(f"{where} needs at least 2 options")
            for i, opt in enumerate(options):
                for lang in ("en", "bn"):
                    if not str(opt.get(lang, "")).strip():
                        errors.append(f"{where} option {i} missing {lang}")
            labels = [o.get("en") for o in options]
            if len(set(labels)) != len(labels):
                errors.append(f"{where} options repeat")
            if q["type"] == "choice":
                ans = q.get("answer")
                if not isinstance(ans, int) or isinstance(ans, bool) or not 0 <= ans < len(options):
                    errors.append(f"{where} choice answer must point to exactly one option")
    for part, count in per_part.items():
        if count < QUIZ_SIZE:
            errors.append(f"part {part}: needs at least {QUIZ_SIZE} questions, has {count}")
    return errors


def questions_for(part: str, bank: dict | None = None) -> list[dict]:
    bank = bank or load_bank()
    return [q for q in bank["questions"] if q["part"] == part]


def pick(part: str, mastery: dict[str, float] | None = None, seed: int | None = None,
         size: int = QUIZ_SIZE, bank: dict | None = None) -> list[dict]:
    """Choose questions, weighting skills the kid has not mastered yet.

    ``mastery`` maps skill -> probability the skill is known (0..1). Unknown
    skills count as 0.3, so new topics show up early.
    """
    pool = questions_for(part, bank)
    rng = random.Random(seed)
    mastery = mastery or {}
    weighted = []
    for q in pool:
        known = mastery.get(q["skill"], 0.3)
        weight = 0.25 + (1 - known) * 2 + (0.3 if q["level"] == 1 and known < 0.4 else 0)
        weighted.append((rng.random() ** (1 / weight), q))
    weighted.sort(key=lambda pair: pair[0], reverse=True)
    chosen = [q for _, q in weighted[:size]]
    chosen.sort(key=lambda q: q["level"])  # easy first
    return chosen


def is_correct(question: dict, answer) -> bool:
    t = question["type"]
    if t == "truefalse":
        return isinstance(answer, bool) and answer == question["answer"]
    if t == "choice":
        return isinstance(answer, int) and not isinstance(answer, bool) and answer == question["answer"]
    if t == "order":
        # The game sends option indexes in the order the kid placed them.
        return isinstance(answer, list) and answer == list(range(len(question["options"])))
    return False


def score(part: str, answers: dict, bank: dict | None = None) -> dict:
    """Score answers ``{question_id: answer}`` for one part. Unknown ids are ignored."""
    by_id = {q["id"]: q for q in questions_for(part, bank)}
    results = []
    for qid, answer in answers.items():
        q = by_id.get(qid)
        if q is None:
            continue
        results.append({"id": qid, "skill": q["skill"], "correct": is_correct(q, answer)})
    correct = sum(r["correct"] for r in results)
    total = len(results)
    stars = 0 if total == 0 else 3 if correct == total else 2 if correct >= total * 0.6 else 1
    return {"part": part, "correct": correct, "total": total, "stars": stars, "results": results}


def client_bank(bank: dict | None = None) -> dict:
    """The bank as the game uses it offline. Answers are included for instant feedback;
    the server still re-scores every submission before it counts on a leaderboard."""
    bank = bank or load_bank()
    return {"parts": bank["parts"], "size": QUIZ_SIZE, "questions": bank["questions"]}
