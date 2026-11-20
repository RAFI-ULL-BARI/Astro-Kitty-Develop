import datetime as dt

from fastapi.testclient import TestClient

from astrokitty import diary, sky
from astrokitty.api import create_app

UTC = dt.timezone.utc


def test_mars_clock_matches_nasa_mars24_reference():
    # Mars24 worked example: 6 January 2000, 00:00 UTC.
    c = sky.mars_clock(dt.datetime(2000, 1, 6, tzinfo=UTC))
    assert abs(c["msd"] - 44795.9998) < 0.001
    assert abs(c["ls"] - 277.187) < 0.05
    assert c["mars_year"] == 24 and c["northern_season"] == "winter" and c["dust_season"]


def test_mars_years_start_on_the_right_earth_days():
    # Mars Years start at Ls 0: MY37 on 2022-12-26, MY38 on 2024-11-12, MY39 on 2026-09-30.
    for day, year in [("2022-12-27", 37), ("2024-11-13", 38), ("2026-10-01", 39), ("2026-09-29", 38)]:
        when = dt.datetime.fromisoformat(day + "T12:00:00+00:00")
        assert sky.mars_clock(when)["mars_year"] == year, day
    assert sky.mars_clock(dt.datetime(2026, 10, 1, 12, tzinfo=UTC))["sol_of_year"] == 1
    assert sky.mars_clock(dt.datetime(2026, 9, 29, 12, tzinfo=UTC))["sol_of_year"] == 668


def test_local_mars_time_moves_with_longitude():
    when = dt.datetime(2026, 11, 20, 12, tzinfo=UTC)
    zero, arcadia = sky.mars_clock(when), sky.mars_clock(when, lon_east=184)
    assert zero["mtc"] == zero["local_time"] == "21:06"
    assert arcadia["local_time"] == "09:22"  # the same moment the Mars Colony shows at Home Base


def test_mars_time_endpoint_and_diary():
    app = create_app("sqlite://", serve_dist=False)
    c = TestClient(app)
    now = c.get("/api/sky/mars-time").json()
    assert now["mars_year"] >= 39 and set(now) >= {"msd", "local_time", "sol_of_year", "northern_season"}
    assert c.get("/api/sky/mars-time?lon=999").status_code == 422
    pdf = diary.render("Brave Comet Kitty", [], [], {}, "ABC123", dt.date(2026, 11, 20))
    assert pdf.startswith(b"%PDF")
