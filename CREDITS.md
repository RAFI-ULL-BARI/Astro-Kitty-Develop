# Astro Kitty credits

## This edition at a glance

- **Dhrubo's voice:** 234 lines are recorded clips made with ElevenLabs text to speech from the team's own script. Lines without a clip use the device's built-in voice.
- **Music and sound effects:** generated in the browser with WebAudio. No music or effect recordings are bundled.
- **Art:** 2D art is drawn in canvas and SVG code. The 3D Mars world, Kitty and the equipment are built in code with Three.js (MIT licence); the habitat is a bundled GLB model.

Made by Rafiull Bari and Saad Uddin Ahmad Basit, Bangladesh. Independent educational prototype. Not endorsed by NASA. NASA/JPL science and map credits are in README.md and linked in the game. No NASA logo is used.

## Sound recordings

No recorded sound file is bundled yet. Current success effects use the game's soft WebAudio chime. The hiss, click, thunk and gentle wrong-match buzz are generated locally in WebAudio. They require no audio download.

The team may add CC0 sounds or its own recordings under `dist/audio/sfx/`:

| File | Use | Creator / original source / licence |
| --- | --- | --- |
| `yay.mp3` | Each correct step | Not supplied; fill in before adding. |
| `applause.mp3` | Challenge finish | Not supplied; fill in before adding. |
| `meow.mp3` | Challenge finish | Not supplied; fill in before adding. |
| `purr.mp3` | The “Purr-fect!” compliment | Not supplied; fill in before adding. |

After adding a file, list its exact filename in `dist/audio/sfx/manifest.json`'s `files` array. Only list files that exist. The sound loader and offline installer read that list; missing or failed files keep the chime fallback. This avoids broken requests for placeholders. Bump the cache when releasing new recordings. Mute and pause stop recordings and all generated sounds.

## Official NASA Space Apps resources used

- NASA Open APIs (https://api.nasa.gov/) and DONKI (https://ccmc.gsfc.nasa.gov/tools/DONKI/): every solar storm in the game is a real DONKI flare record.
- Mars Trek (https://trek.nasa.gov/mars/): linked from each landing site.
- OSDR and RadLab (https://visualization.osdr.nasa.gov/radlab/gui/data-api/): linked as further reading on astronaut health and radiation.
- Canadian Space Agency youth resources and the food production toolkit: linked as further reading.

NASA does not endorse any non-U.S. Government entity and is not responsible for information contained on non-U.S. Government websites.


## Earth Academy cartography
Country outlines: Natural Earth public-domain vector data (world 1:110m; Bangladesh 1:50m), from https://github.com/nvkelso/natural-earth-vector . Khulna city/campus drawings are original illustrations of a fictional training center.

HD Discovery edition: new code-drawn vector scenery and shared material/lighting treatments. Earth arrival narration synthesized with the macOS Samantha voice and bundled as PCM WAV. No NASA logo was added.

Mission film update: new illustrations use the game's canvas artwork. New Dhrubo lines are synthesized locally with Flite's SLT voice and bundled as MP3 for offline playback. The five earlier Earth Academy recordings still use Samantha.

Dhrubo cinema polish: Nunito is bundled under the SIL Open Font License. The font license accompanies the local font file in `dist/assets/fonts`.

Unified-story pass: the older Samantha and Flite movie demos above are retained as inactive source assets. Current runtime narration uses one consistent device voice across all sections, or a verified complete single-voice recording pack. No new synthetic recordings or voice clone were generated for this pass. Dhrubo artwork and new habitat-room illustrations are drawn locally in canvas/SVG. ChatGPT/Codex edited the code and scripts; the project's existing Claude disclosure is retained.


## Mars Explorer

Viking globe texture: Caltech/JPL/USGS, https://space.jpl.nasa.gov/tmaps/mars.html. Weather: NASA/JPL-Caltech/CAB (CSIC-INTA), Curiosity REMS outreach feed. Solar records: NASA DONKI. Historical Mars storm stories: NASA (20 May 2024 solar storm; Opportunity, 10 June 2018 dust). Sources and dates are listed in README. The procedural terrain and storm effects are illustrative game art made in code, not NASA scans or live imagery. No new AI image or voice was generated in this update.

Mars walk terrain, Kitty rig, equipment, and effects are built in code. The supplied `Habitat.stl` was simplified and colored for the browser. The introductory Mars exploration and dust drill were informed by the [Mission Mohakash gameplay reference](https://www.youtube.com/watch?v=Q1XFB1vX118). Mars dust science is sourced from [NASA Science](https://science.nasa.gov/solar-system/planets/mars/10-things-dust-in-the-wind-on-mars-and-well-beyond/). Three.js is used under its MIT license.
