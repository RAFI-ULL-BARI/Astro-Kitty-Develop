"""Real sky maths for kids: where Mars is, when to launch, when the ISS flies over.

Planet positions use NASA JPL's "Approximate Positions of the Planets" Keplerian
elements (E. M. Standish, valid 1800-2050), so no ephemeris download is needed.
ISS passes use Skyfield with a live orbit (TLE) from CelesTrak.
"""
from __future__ import annotations

import datetime as dt
import math

AU_KM = 149_597_870.7
LIGHT_KM_S = 299_792.458
J2000 = 2451545.0
OBLIQUITY = math.radians(23.43928)

# a (AU), e, I (deg), L (deg), long. perihelion (deg), long. ascending node (deg):
# value at J2000 and rate per Julian century.
ELEMENTS = {
    "earth": ((1.00000261, 0.00000562), (0.01671123, -0.00004392), (-0.00001531, -0.01294668),
              (100.46457166, 35999.37244981), (102.93768193, 0.32327364), (0.0, 0.0)),
    "mars": ((1.52371034, 0.00001847), (0.09339410, 0.00007882), (1.84969142, -0.00813131),
             (-4.55343205, 19140.30268499), (-23.94362959, 0.44441088), (49.55953891, -0.29257343)),
}


def julian_day(when: dt.datetime) -> float:
    if when.tzinfo is None:
        when = when.replace(tzinfo=dt.timezone.utc)
    return when.timestamp() / 86400.0 + 2440587.5


def heliocentric(planet: str, jd: float) -> tuple[float, float, float]:
    """Ecliptic x, y, z in AU."""
    t = (jd - J2000) / 36525.0
    a, e, inc, mean_long, peri, node = (v0 + rate * t for v0, rate in ELEMENTS[planet])
    w = math.radians(peri - node)
    m = math.radians((mean_long - peri + 180) % 360 - 180)
    inc, node = math.radians(inc), math.radians(node)
    ecc_anom = m + e * math.sin(m)
    for _ in range(10):
        ecc_anom -= (ecc_anom - e * math.sin(ecc_anom) - m) / (1 - e * math.cos(ecc_anom))
    xp = a * (math.cos(ecc_anom) - e)
    yp = a * math.sqrt(1 - e * e) * math.sin(ecc_anom)
    cw, sw, cn, sn, ci, si = math.cos(w), math.sin(w), math.cos(node), math.sin(node), math.cos(inc), math.sin(inc)
    x = (cw * cn - sw * sn * ci) * xp + (-sw * cn - cw * sn * ci) * yp
    y = (cw * sn + sw * cn * ci) * xp + (-sw * sn + cw * cn * ci) * yp
    z = (sw * si) * xp + (cw * si) * yp
    return x, y, z


def mars_distance_km(when: dt.datetime) -> float:
    jd = julian_day(when)
    ex, ey, ez = heliocentric("earth", jd)
    mx, my, mz = heliocentric("mars", jd)
    return math.dist((ex, ey, ez), (mx, my, mz)) * AU_KM


def light_delay_minutes(when: dt.datetime | None = None) -> float:
    when = when or dt.datetime.now(dt.timezone.utc)
    return mars_distance_km(when) / LIGHT_KM_S / 60


# --- Mars time ---------------------------------------------------------------------
# NASA GISS "Mars24" (Allison & McEwen 2000), the same maths as the 3D colony's clock
# (src/colony/calendar.js), so the server and the game agree on the date on Mars.
MARS_YEAR_SOLS = 668.5991
_PERTURBERS = ((0.0071, 2.2353, 49.409), (0.0057, 2.7543, 168.173), (0.0039, 1.1177, 191.837),
               (0.0037, 15.7866, 21.736), (0.0021, 2.1354, 15.704), (0.0020, 2.4694, 95.528),
               (0.0018, 32.8493, 49.095))
_SEASONS = ("spring", "summer", "autumn", "winter")


def _mars_core(when: dt.datetime) -> tuple[float, float]:
    """Solar longitude Ls (degrees) and Mars Sol Date for a moment."""
    jd_tt = julian_day(when) + 69.184 / 86400  # Terrestrial Time runs 69.184 s ahead of UTC
    d = jd_tt - J2000
    m = math.radians(19.3871 + 0.52402073 * d)
    alpha = 270.3871 + 0.524038496 * d
    pbs = sum(a * math.cos(math.radians(0.985626 * d / tau + phi)) for a, tau, phi in _PERTURBERS)
    center = ((10.691 + 3.0e-7 * d) * math.sin(m) + 0.623 * math.sin(2 * m) + 0.050 * math.sin(3 * m)
              + 0.005 * math.sin(4 * m) + 0.0005 * math.sin(5 * m) + pbs)
    ls = (alpha + center) % 360
    msd = (jd_tt - 2405522.0028779) / 1.0274912517
    return ls, msd


# Mars Year 38 began (Ls 0) on 12 November 2024 (Clancy et al. numbering).
_MY38_START = _mars_core(dt.datetime(2024, 11, 12, 12, tzinfo=dt.timezone.utc))[1]


def mars_clock(when: dt.datetime | None = None, lon_east: float = 0.0) -> dict:
    """What day and time it is on Mars right now (or at `when`), at a longitude east."""
    when = when or dt.datetime.now(dt.timezone.utc)
    ls, msd = _mars_core(when)
    mtc = (msd % 1) * 24
    lmst = (mtc + lon_east / 15) % 24
    since_year_start = ls / 360 * MARS_YEAR_SOLS
    mars_year = 38 + round((msd - _MY38_START - since_year_start) / MARS_YEAR_SOLS)
    year_start = _MY38_START + (mars_year - 38) * MARS_YEAR_SOLS
    quarter = int(ls // 90) % 4

    def hhmm(hours: float) -> str:
        minutes = int(hours * 60) % (24 * 60)
        return f"{minutes // 60:02d}:{minutes % 60:02d}"

    return {
        "msd": round(msd, 4),
        "mtc": hhmm(mtc),
        "local_time": hhmm(lmst),
        "ls": round(ls, 2),
        "mars_year": mars_year,
        "sol_of_year": max(1, int(msd - year_start) + 1),
        "northern_season": _SEASONS[quarter],
        "southern_season": _SEASONS[(quarter + 2) % 4],
        # Big dust storms mostly happen when Mars is closest to the Sun (southern spring and summer).
        "dust_season": 180 <= ls <= 330,
    }


def mars_in_sky(lat: float, lon: float, when: dt.datetime | None = None) -> dict:
    """Altitude/azimuth of Mars for someone at (lat, lon). Good to about a degree."""
    when = when or dt.datetime.now(dt.timezone.utc)
    jd = julian_day(when)
    ex, ey, ez = heliocentric("earth", jd)
    mx, my, mz = heliocentric("mars", jd)
    x, y, z = mx - ex, my - ey, mz - ez
    # Ecliptic -> equatorial
    ye = y * math.cos(OBLIQUITY) - z * math.sin(OBLIQUITY)
    ze = y * math.sin(OBLIQUITY) + z * math.cos(OBLIQUITY)
    ra = math.atan2(ye, x)
    dec = math.atan2(ze, math.hypot(x, ye))
    gmst = math.radians((280.46061837 + 360.98564736629 * (jd - J2000)) % 360)
    hour_angle = gmst + math.radians(lon) - ra
    phi = math.radians(lat)
    alt = math.asin(math.sin(phi) * math.sin(dec) + math.cos(phi) * math.cos(dec) * math.cos(hour_angle))
    az = math.atan2(-math.sin(hour_angle), math.tan(dec) * math.cos(phi) - math.sin(phi) * math.cos(hour_angle))
    az_deg = math.degrees(az) % 360
    compass = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"][
        int((az_deg + 22.5) // 45) % 8]
    distance = math.dist((ex, ey, ez), (mx, my, mz)) * AU_KM
    return {
        "altitude_deg": round(math.degrees(alt), 1),
        "azimuth_deg": round(az_deg, 1),
        "direction": compass,
        "visible": math.degrees(alt) > 5,
        "distance_km": round(distance),
        "light_minutes": round(distance / LIGHT_KM_S / 60, 1),
        "ra_hours": round((math.degrees(ra) % 360) / 15, 3),
        "dec_deg": round(math.degrees(dec), 2),
    }


def _lead_angle(jd: float) -> float:
    """How far Mars is ahead of Earth around the Sun, in degrees (0..360)."""
    ex, ey, _ = heliocentric("earth", jd)
    mx, my, _ = heliocentric("mars", jd)
    return (math.degrees(math.atan2(my, mx) - math.atan2(ey, ex))) % 360


def launch_windows(start: dt.date | None = None, count: int = 3) -> list[dict]:
    """Next Hohmann-transfer launch windows: Mars about 44 degrees ahead of Earth.

    A Hohmann transfer is the fuel-saving path half way round the Sun (about 259 days).
    Real missions launch in a few weeks around this date.
    """
    start = start or dt.datetime.now(dt.timezone.utc).date()
    jd = julian_day(dt.datetime(start.year, start.month, start.day, tzinfo=dt.timezone.utc))
    transfer_days = 259
    target = 44.0
    windows = []
    prev = _lead_angle(jd)
    day = 0
    while len(windows) < count and day < 365 * 10:
        day += 1
        cur = _lead_angle(jd + day)
        # The lead angle shrinks over time; find where it passes the target.
        if prev >= target > cur and prev - cur < 180:
            when = dt.date.fromordinal(start.toordinal() + day)
            arrive = dt.date.fromordinal(when.toordinal() + transfer_days)
            windows.append({"launch": when.isoformat(), "arrive": arrive.isoformat(), "trip_days": transfer_days})
        prev = cur
    return windows


def iss_passes(tle: tuple[str, str], lat: float, lon: float, start: dt.datetime | None = None,
               days: float = 3.0, min_altitude: float = 20.0) -> list[dict]:
    """Visible-ish ISS passes over a place (rise, highest point, set)."""
    from skyfield.api import EarthSatellite, load, wgs84

    ts = load.timescale(builtin=True)
    sat = EarthSatellite(tle[0], tle[1], "ISS", ts)
    start = start or dt.datetime.now(dt.timezone.utc)
    t0 = ts.from_datetime(start)
    t1 = ts.from_datetime(start + dt.timedelta(days=days))
    place = wgs84.latlon(lat, lon)
    times, events = sat.find_events(place, t0, t1, altitude_degrees=10.0)
    passes, current = [], {}
    for t, event in zip(times, events):
        if event == 0:
            current = {"rise": t.utc_datetime().isoformat()}
        elif event == 1 and current:
            alt, az, _ = (sat - place).at(t).altaz()
            current["peak"] = t.utc_datetime().isoformat()
            current["max_altitude_deg"] = round(float(alt.degrees), 1)
            current["peak_azimuth_deg"] = round(float(az.degrees), 1)
        elif event == 2 and current.get("peak"):
            current["set"] = t.utc_datetime().isoformat()
            if current["max_altitude_deg"] >= min_altitude:
                passes.append(current)
            current = {}
    return passes


def fetch_iss_tle(timeout: float = 10.0) -> tuple[str, str]:
    import urllib.request

    url = "https://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=tle"
    with urllib.request.urlopen(url, timeout=timeout) as resp:  # noqa: S310 (fixed https URL)
        lines = [line.strip() for line in resp.read().decode().splitlines() if line.strip()]
    tle = [line for line in lines if line[:2] in ("1 ", "2 ")]
    if len(tle) != 2:
        raise ValueError("unexpected TLE response")
    return tle[0], tle[1]
