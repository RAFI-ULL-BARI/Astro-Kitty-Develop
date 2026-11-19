"""AI Dhrubo: a kid-safe space buddy that answers questions in English or Bangla.

Uses Claude through the official Anthropic SDK when credentials are configured
(ANTHROPIC_API_KEY or another SDK credential source). Without them, or if the
API fails, Dhrubo answers from the NASA-sourced quiz explanations instead, so the
feature never breaks in a classroom.
"""
from __future__ import annotations

import os
import re

import anthropic

from . import quizzes

MODEL = os.environ.get("DHRUBO_MODEL", "claude-opus-5-5")
MAX_QUESTION_CHARS = 300
MAX_HISTORY = 6

SYSTEM_PROMPT = """You are Dhrubo (ধ্রুব, "pole star"), a cheerful robot buddy in Astro Kitty, a space game for children aged 7 to 12 in Bangladesh and around the world.

How you talk:
- Answer in the language the child used: English, or Bangla written in Bangla script.
- Keep answers short: two to four simple sentences a 7-year-old can follow. One fun fact is better than many.
- Be warm and encouraging. You may say "Shabbash!" (good job) or "Oshadharon!" (amazing).
- Use real science from NASA and other space agencies. If something is not known, say scientists are still finding out. Never make up facts or numbers.

What you talk about:
- Space, Mars, planets, rockets, astronauts, rovers, science, and the Astro Kitty game, including Kitty Code (MOVE, TURN LEFT/RIGHT, DRILL, SCAN, REPEAT, IF, DEFINE).
- For Kitty Code help, give a hint that points the child in the right direction. Do not write the full solution.
- If asked about something else, gently steer back to space in one friendly sentence.

Keeping children safe:
- Never ask for or repeat personal details: real names, age, school, address, phone, email, photos or where they live. If a child shares one, kindly remind them to keep it private.
- Nothing scary, violent, rude or grown-up. If a child seems sad, hurt or unsafe, say kindly that they should talk to a parent, teacher or another trusted grown-up right away.
- You are a friendly game robot, not a person. Do not pretend to be human."""

PERSONAL_INFO = [
    re.compile(r"[\w.+-]+@[\w-]+\.[\w.]+"),           # email
    re.compile(r"(?:\+?\d[\d\s-]{7,}\d)"),             # phone-like number
    re.compile(r"(?:\+?[০-৯][০-৯\s-]{7,}[০-৯])"),        # phone-like number, Bangla digits
]
PRIVATE_REPLY = {
    "en": "Oops! That looks like private information. Let's keep it secret, like a space mission code! What would you like to know about space?",
    "bn": "ওহ! এটা মনে হচ্ছে ব্যক্তিগত তথ্য। চলো এটা গোপন রাখি, মহাকাশ মিশনের কোডের মতো! মহাকাশ নিয়ে কী জানতে চাও?",
}
SAFE_REPLY = {
    "en": "Hmm, let's talk about something else! Did you know Mars has the tallest volcano in the whole solar system?",
    "bn": "হুম, চলো অন্য কিছু নিয়ে কথা বলি! তুমি কি জানো, পুরো সৌরজগতের সবচেয়ে উঁচু আগ্নেয়গিরি মঙ্গলে?",
}
FALLBACK_REPLY = {
    "en": "Great question! My space radio is a bit fuzzy right now. Try asking about Mars, rockets or rovers!",
    "bn": "দারুণ প্রশ্ন! আমার মহাকাশ রেডিও এখন একটু ঝিরঝির করছে। মঙ্গল, রকেট বা রোভার নিয়ে জিজ্ঞেস করো!",
}


def language_of(text: str) -> str:
    return "bn" if re.search(r"[ঀ-৿]", text) else "en"


def contains_personal_info(text: str) -> bool:
    return any(p.search(text) for p in PERSONAL_INFO)


def offline_answer(question: str, lang: str) -> dict:
    """Best match from the quiz explanations, scored by shared words."""
    words = set(re.findall(r"[a-z]{3,}|[ঀ-৿]{2,}", question.lower()))
    best, best_score = None, 0
    for q in quizzes.load_bank()["questions"]:
        text = f"{q['q'][lang]} {q['explain'][lang]}".lower()
        score = sum(1 for w in words if w in text)
        if score > best_score:
            best, best_score = q, score
    if best and best_score >= 2:
        return {"answer": best["explain"][lang], "source": best["source"], "mode": "offline"}
    return {"answer": FALLBACK_REPLY[lang], "source": None, "mode": "offline"}


def _context_note(mastery_summary: dict | None) -> str | None:
    if not mastery_summary:
        return None
    parts = []
    if mastery_summary.get("practice"):
        parts.append("still practising: " + ", ".join(mastery_summary["practice"][:3]))
    if mastery_summary.get("mastered"):
        parts.append("already good at: " + ", ".join(mastery_summary["mastered"][:3]))
    if not parts:
        return None
    return ("Game context, not from the child: this player is " + "; ".join(parts)
            + ". If it fits naturally, encourage practice on a weak topic.")


async def ask(question: str, history: list[dict] | None = None, mastery_summary: dict | None = None,
              client: anthropic.AsyncAnthropic | None = None) -> dict:
    question = (question or "").strip()[:MAX_QUESTION_CHARS]
    lang = language_of(question)
    if not question:
        return {"answer": FALLBACK_REPLY[lang], "source": None, "mode": "empty"}
    if contains_personal_info(question):
        return {"answer": PRIVATE_REPLY[lang], "source": None, "mode": "safety"}

    messages: list[dict] = []
    for turn in (history or [])[-MAX_HISTORY:]:
        role, text = turn.get("role"), str(turn.get("text", ""))[:MAX_QUESTION_CHARS * 2]
        if role in ("user", "assistant") and text:
            messages.append({"role": role, "content": text})
    while messages and messages[0]["role"] != "user":
        messages.pop(0)
    messages.append({"role": "user", "content": question})
    note = _context_note(mastery_summary)
    if note:
        # Mid-conversation operator note: keeps the cached system prompt unchanged.
        messages.append({"role": "system", "content": note})

    try:
        client = client or anthropic.AsyncAnthropic()
        response = await client.beta.messages.create(
            model=MODEL,
            max_tokens=4000,
            betas=["server-side-fallback-2026-07-01"],
            fallbacks="default",
            output_config={"effort": "low"},
            system=[{"type": "text", "text": SYSTEM_PROMPT, "cache_control": {"type": "ephemeral"}}],
            messages=messages,
        )
    except anthropic.RateLimitError:
        return offline_answer(question, lang)
    except anthropic.APIStatusError:
        return offline_answer(question, lang)
    except anthropic.APIConnectionError:
        return offline_answer(question, lang)
    except anthropic.AnthropicError:
        return offline_answer(question, lang)
    except TypeError:  # the SDK raises this when no credentials are configured at all
        return offline_answer(question, lang)

    if response.stop_reason == "refusal":
        return {"answer": SAFE_REPLY[lang], "source": None, "mode": "safety"}
    text = "".join(block.text for block in response.content if block.type == "text").strip()
    if not text:
        return offline_answer(question, lang)
    if contains_personal_info(text):
        return {"answer": SAFE_REPLY[lang], "source": None, "mode": "safety"}
    return {"answer": text, "source": None, "mode": "ai"}
