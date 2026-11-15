> Updated in the HD Discovery edition: the arrival movie now lasts 24 seconds and includes bundled Dhrubo narration. See HD_EDITION.md for current visuals and build instructions.

# Astro Kitty — Mission Adventure edition

Start at `dist/index.html`, the **A new home on Mars** screen. Run the supplied Python launcher instead of opening HTML as a file. This is a static app with no build step and no required online account.

## What changed

Dhrubo guides automatically. One sound preference follows the player between Earth Academy, the flight, astronaut training and Mars base. There are no opt-in guidance popups. Captions and visual controls work without speech. Browser voices may require the first click before speaking.

Earth Academy uses the original game's navy, lavender, peach and cream palette and exactly the same character renderer. Kitty has a clothed humanoid body, kitty head and no tail. Only the pool drill uses a helmet. Dhrubo is the same hovering silver robot. The 18-second Earth → Bangladesh → Khulna → campus film fills the app viewport, has short location titles and no narration, and can be paused, skipped or replayed. Country boundaries are geographic; the city and National Kitty Space Center are fictional illustrations.

## Play loops and variation

- **Float Lab:** Balance up and down forces, settle, then repair. Four baseline buoyancies and three repair labels vary repeated rounds. Water, bubbles, body tilt and expressions show the result. Water supports Kitty; this is not actual zero gravity. The task remains a supported pool drill.
- **Rover Test Yard:** Drag through route dots in a sandy indoor analog yard. Flag locations, layout orientation and a waypoint offset vary. Full path segments are checked against rock clearance, not just endpoints. Every generated layout has at least one tested safe route. The vehicle animates along the route and stops at obstacles. Tap alternatives are available.
- **Grow Lunch:** Six illustrated species: lettuce, tomato, basil, radish, strawberry and bean. Three sensor-diagnosed needs per round rotate among water, light, mineral nutrients, cooling and drainage. Water quantities vary. The fixed supply tray exactly covers that round's needs. Wrong placements do not waste supplies. On phones, additional readable plant buttons complement the canvas. Adding supplies animates delivery and gradual recovery; real growth takes much longer.
- **Gravity Playground:** Pick any two of six illustrated objects. Compare Earth and Mars, with air or **Vacuum: no air**. Same-height, simultaneous release. One correct prediction earns the patch and reveals **Play more / Next lab**. Wrong predictions get encouragement and the reason, without a success celebration. The model accepts near-simultaneous arrival (within 25 milliseconds) as together. Object drag values are illustrative, not experimental measurements.
- **Air Makers:** Three rotating systems: water electrolysis, CO₂ capture, and water condensation. Place two components, start the rig, and watch the process. Oxygen generation also asks players to route oxygen and hydrogen separately. A CO₂ filter does not make oxygen. Condensed water still needs treatment.

## Fly to Mars

A new 16-second, silent, skippable **mission preview** shows the campus, boarding, launch and the route toward Mars. The existing mission planner and flight simulator follow. After a successful simulated flight, three crew challenges lead into the original Mars arrival film. The time and event order are a teaching sequence, not a realistic mission timeline.

Six challenges alternate across repeat journeys: a tiny meteoroid shield inspection, radio pointing, power conservation, cooling, solar-storm shelter practice and solar-panel alignment. Dial targets vary. Players adjust sliders, make a choice or drag a component; taps also work. Correct choices animate the result and explain why in one short line. Wrong choices keep the challenge open with “Good try… Try again.” The home screen's More menu includes Crew challenges for direct replay. Continuing the journey skips this optional practice without marking a challenge success.

## Accessibility and limits

Mouse, touch-style pointer events, tap alternatives, keyboard buttons, focus indicators, captions, pausing, and reduced motion are supported. Reduced motion removes decorative motion; informative simulation motion remains. Science explanations are collapsed under Real with a disclosure triangle and a short “Game: simplified” explanation.

The science and interaction models are tested, but the game has not yet been tested with a classroom of 7–12-year-olds. Reading difficulty, touch precision and learning outcomes should be validated with children before submission. Native speech availability and pronunciation depend on the browser/OS.

See RESEARCH_AND_DESIGN.md for sources and why these choices were made.
