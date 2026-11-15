# Mission Adventure verification

- Automated Node suite: **244 tests passed, 0 failed**.
- Added checks cover 48 rover rounds with a safe path, plant resource budgets and invalid placements across 24 rounds, all vacuum object pairs, Mars/Earth timing, flight answer validation and scenario rotation, and distinct ECLSS processes.
- Browser: home opens without a guide-choice popup; Earth film enters full viewport and skips to campus; new departure movie hands off to the existing mission planner; Mars base enters its existing setup without the removed popup.
- Browser: completed a pool balance/repair; planned and drove a safe rover route; completed a three-plant round and observed different needs on replay; tried a wrong vacuum prediction, corrected it, and saw Play more / Next lab; completed oxygen generation/routing and opened the CO₂ round.
- Browser: tested wrong and correct meteoroid responses, pointing slider, power choice, and actual pointer dragging of the cooling component onto its target. Unit tests cover all six challenge answer rules.
- Browser: mute carried from Academy to home. The phone-sized home and greenhouse were inspected at 390×844, including readable plant buttons. The temporary viewport override was restored afterward.
- Startup caching issue found and fixed with versioned module/style URLs and a new offline cache version. The launcher sends no-cache headers for revalidation.
- ZIP integrity and local module dependency checks passed.

Limits: no classroom study, real-device touch testing, or listening-based voice-quality assessment was performed. Browser checks sampled the major paths; they did not replay every possible complete Mars mission. Models and sources are documented in RESEARCH_AND_DESIGN.md.

## HD Discovery edition

The current release passes 249 automated tests, including strict compilation of the TypeScript modules. New checks cover frame-rate-independent smoothing, angle wrapping, bounded canvas resolution, bundled narration file durations, chapter boundaries, and autoplay-block/pause/resume/mute behavior.

Browser checks in the HD edition completed a greenhouse round, rover path with new easing and flag collection, vacuum prediction and CO₂ cleaning. The departure preview reached the existing flight planner without console errors. The narrated Earth arrival was tested with both an explicit Play arrival gesture and automatic playback after navigation; its speaking indicator activated and its captions, pause and skip controls responded. A 390×844 layout check verified the full-height portrait movie, readable plant buttons and an actual pointer drag of the cooling fan onto the hot plant. This is desktop browser emulation of a phone-sized viewport, not testing on physical mobile hardware.

Sampled desktop rendering at 1280×720: greenhouse averaged approximately 1.01 ms drawing time and a 16.65 ms frame interval; rover approximately 0.86 ms and 16.67 ms. These are samples from this browser and machine, not guarantees for other devices. Render timing is sampled locally in canvas data attributes for debugging; it is not uploaded anywhere.

The Vercel install/build workflow was checked locally with npm ci and npm run build. The emitted game remains runnable with the Python launcher. Actual Vercel hosting has not been performed in this chat.

## Training/setup bugfix verification

251 automated checks pass. The new navigation tests cover a previous destination for every training stage and replay preferences. The Canvas test fixture now provides measureText, a real Canvas API used by the warning-sign sizing fix.

Browser checks: entered a saved monitor stage, used Back to power, shelter, airlock, return and warning; inspected the large Restart button and the phone-sized Back header; checked the callsign gap. Landing-site narration stayed at the same local speech version (1) while choosing two different sites; entering design advanced it to 2, selecting a module to 3 and placing it to 4. The design card displayed the matching spoken guidance. No Vercel deployment was performed.
