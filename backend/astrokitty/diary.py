"""My Mars Diary: a printable PDF of a kid's adventure."""
from __future__ import annotations

import datetime as dt
import io
import math

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

from . import sky

INK = colors.HexColor("#14233c")
CREAM = colors.HexColor("#fff0d7")
MINT = colors.HexColor("#a9e5d1")
SAND = colors.HexColor("#efb59c")

SKILL_NAMES = {
    "gravity": "Gravity", "training": "Astronaut training", "life-support": "Air, water and food",
    "rovers": "Rovers", "orbits": "Orbits and flight", "mars-facts": "Mars facts", "power": "Solar power",
    "weather": "Space weather", "sequence": "Step-by-step code", "loops": "Loops", "conditions": "IF decisions",
    "routines": "Own commands", "mars-places": "Places on Mars",
}
PART_NAMES = {"academy": "Earth Academy", "flight": "Fly to Mars", "training": "Astronaut training",
              "base": "Mars base", "kittycode": "Kitty Code", "mars3d": "Mars in 3D"}


def _stars(c: canvas.Canvas, x: float, y: float, n: int, size: float = 4 * mm) -> None:
    for i in range(3):
        c.setFillColor(SAND if i < n else colors.HexColor("#3a4a66"))
        cx, cy = x + i * size * 1.3, y
        pts = []
        for k in range(10):
            r = size / 2 if k % 2 == 0 else size / 5
            a = math.pi / 2 + k * math.pi / 5
            pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
        path = c.beginPath()
        path.moveTo(*pts[0])
        for p in pts[1:]:
            path.lineTo(*p)
        path.close()
        c.drawPath(path, fill=1, stroke=0)


def render(kitty_name: str, levels: list[dict], quizzes: list[dict], mastery: dict[str, float],
           certificate_code: str, today: dt.date | None = None) -> bytes:
    today = today or dt.date.today()
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)
    w, h = A4
    c.setTitle(f"My Mars Diary - {kitty_name}")

    # Page 1: certificate
    c.setFillColor(INK)
    c.rect(0, 0, w, h, fill=1, stroke=0)
    c.setFillColor(colors.white)
    for i in range(70):  # a few stars
        x, y = (i * 137) % int(w), (i * 251) % int(h)
        c.circle(x, y, 0.6 + (i % 3) * 0.3, fill=1, stroke=0)
    c.setStrokeColor(SAND)
    c.setLineWidth(3)
    c.roundRect(15 * mm, 15 * mm, w - 30 * mm, h - 30 * mm, 8 * mm)
    c.setFillColor(SAND)
    c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(w / 2, h - 45 * mm, "ASTRO KITTY  -  JUNIOR ASTRONAUT")
    c.setFillColor(CREAM)
    c.setFont("Helvetica-Bold", 38)
    c.drawCentredString(w / 2, h - 75 * mm, "My Mars Diary")
    c.setFont("Helvetica", 16)
    c.drawCentredString(w / 2, h - 95 * mm, "This certifies that")
    c.setFillColor(MINT)
    c.setFont("Helvetica-Bold", 28)
    c.drawCentredString(w / 2, h - 115 * mm, kitty_name)
    c.setFillColor(CREAM)
    c.setFont("Helvetica", 15)
    c.drawCentredString(w / 2, h - 133 * mm, "trained, coded and explored like a real Mars astronaut.")

    total_stars = sum(lv.get("stars", 0) for lv in levels) + sum(q.get("stars", 0) for q in quizzes)
    c.setFont("Helvetica-Bold", 20)
    c.drawCentredString(w / 2, h - 160 * mm, f"{total_stars} stars earned")
    c.setFont("Helvetica", 13)
    c.drawCentredString(w / 2, h - 172 * mm,
                        f"{len(levels)} Kitty Code missions  -  {len(quizzes)} quizzes completed")
    c.setFont("Helvetica", 11)
    c.setFillColor(colors.HexColor("#c5cfdf"))
    mars = sky.mars_clock(dt.datetime(today.year, today.month, today.day, 12, tzinfo=dt.timezone.utc))
    c.drawCentredString(w / 2, 47 * mm, f"On Mars it was sol {mars['sol_of_year']} of Mars Year {mars['mars_year']}, "
                                        f"{mars['northern_season']} in the north")
    c.drawCentredString(w / 2, 40 * mm, f"Certificate code {certificate_code}  -  {today.isoformat()}")
    c.drawCentredString(w / 2, 33 * mm, "Dhrubo the robot says: Shabbash! Keep exploring!")
    c.showPage()

    # Page 2: what I learned
    c.setFillColor(CREAM)
    c.rect(0, 0, w, h, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(20 * mm, h - 30 * mm, "What I learned")
    y = h - 45 * mm
    c.setFont("Helvetica", 12)
    for skill, p in sorted(mastery.items(), key=lambda kv: -kv[1]):
        c.setFillColor(INK)
        c.drawString(20 * mm, y, SKILL_NAMES.get(skill, skill.title()))
        c.setFillColor(colors.HexColor("#d9cbb3"))
        c.roundRect(85 * mm, y - 1 * mm, 90 * mm, 4 * mm, 2 * mm, fill=1, stroke=0)
        c.setFillColor(colors.HexColor("#4aa58a"))
        c.roundRect(85 * mm, y - 1 * mm, max(2 * mm, 90 * mm * p), 4 * mm, 2 * mm, fill=1, stroke=0)
        y -= 9 * mm
        if y < 120 * mm:
            break
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 18)
    y -= 6 * mm
    c.drawString(20 * mm, y, "My quizzes")
    y -= 9 * mm
    c.setFont("Helvetica", 12)
    for q in quizzes:
        c.drawString(20 * mm, y, f"{PART_NAMES.get(q['part'], q['part'])}: {q['correct']} of {q['total']} right")
        _stars(c, 120 * mm, y + 1.5 * mm, q.get("stars", 0))
        y -= 8 * mm
        if y < 25 * mm:
            break
    c.showPage()
    c.save()
    return buf.getvalue()
