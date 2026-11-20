"""Daily NASA feed: Astronomy Picture of the Day, new Mars images and solar flares.

    NASA_API_KEY=... python -m astrokitty.nasa_feed   # writes dist/data/nasa-feed.json

Runs every day in GitHub Actions (.github/workflows/nasa-feed.yml). Each source is
fetched on its own: if one fails, the last good copy of that section is kept, so
the game always has something to show, even offline.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import sys
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path(__file__).resolve().parents[2] / "dist" / "data" / "nasa-feed.json"
UA = {"User-Agent": "astro-kitty-feed/1.0"}


def get_json(url: str, params: dict, timeout: float = 20.0):
    full = f"{url}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(full, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as resp:  # noqa: S310 (fixed https hosts)
        return json.loads(resp.read().decode())


def apod(key: str, fetch=get_json) -> dict:
    data = fetch("https://api.nasa.gov/planetary/apod", {"api_key": key, "thumbs": "true"})
    image = data.get("url") if data.get("media_type") == "image" else data.get("thumbnail_url")
    return {
        "date": data.get("date"),
        "title": data.get("title"),
        "explanation": data.get("explanation", "")[:600],
        "image": image,
        "hd": data.get("hdurl"),
        "credit": data.get("copyright", "NASA").strip(),
        "link": f"https://apod.nasa.gov/apod/ap{data.get('date', '').replace('-', '')[2:]}.html",
    }


def mars_images(fetch=get_json, limit: int = 8) -> list[dict]:
    data = fetch("https://images-api.nasa.gov/search",
                 {"q": "Perseverance Mars", "media_type": "image", "page_size": 30})
    items = []
    for item in data.get("collection", {}).get("items", []):
        meta = (item.get("data") or [{}])[0]
        links = item.get("links") or [{}]
        if not links[0].get("href"):
            continue
        items.append({
            "title": meta.get("title"),
            "date": (meta.get("date_created") or "")[:10],
            "description": (meta.get("description") or "")[:300],
            "image": links[0]["href"],
            "nasa_id": meta.get("nasa_id"),
            "link": f"https://images.nasa.gov/details/{meta.get('nasa_id')}",
        })
    items.sort(key=lambda i: i["date"], reverse=True)
    return items[:limit]


def solar_flares(key: str, today: dt.date, fetch=get_json) -> list[dict]:
    start = today - dt.timedelta(days=7)
    data = fetch("https://api.nasa.gov/DONKI/FLR",
                 {"startDate": start.isoformat(), "endDate": today.isoformat(), "api_key": key})
    flares = [{"class": f.get("classType"), "peak": f.get("peakTime"), "link": f.get("link")}
              for f in (data or []) if f.get("classType")]
    flares.sort(key=lambda f: f["peak"] or "", reverse=True)
    return flares[:10]


def build(previous: dict, key: str, today: dt.date, fetch=get_json) -> tuple[dict, list[str]]:
    feed = dict(previous)
    errors = []
    for name, job in (("apod", lambda: apod(key, fetch)),
                      ("mars_images", lambda: mars_images(fetch)),
                      ("solar_flares", lambda: solar_flares(key, today, fetch))):
        try:
            feed[name] = job()
        except Exception as err:  # keep the last good copy of this section
            errors.append(f"{name}: {err}")
    feed["updated"] = today.isoformat()
    return feed, errors


def main() -> int:
    key = os.environ.get("NASA_API_KEY", "DEMO_KEY")
    previous = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}
    feed, errors = build(previous, key, dt.datetime.now(dt.timezone.utc).date())
    for e in errors:
        print("warning:", e, file=sys.stderr)
    OUT.write_text(json.dumps(feed, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print("wrote", OUT)
    return 0 if len(errors) < 3 else 1


if __name__ == "__main__":
    sys.exit(main())
