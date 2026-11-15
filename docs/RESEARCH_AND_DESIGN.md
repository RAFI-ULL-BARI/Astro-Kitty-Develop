# Research behind the redesign

Research reviewed for this edition: 15 November 2026. Primary sources below support the science and general design principles. They do not establish that this particular game improves learning.

## Learning design

The U.S. Institute of Education Sciences practice guide, **Organizing Instruction and Study to Improve Student Learning**, recommends combining graphics and verbal descriptions and connecting concrete with abstract representations. It also discusses alternating worked examples with problem solving.
Source: https://ies.ed.gov/ncee/wwc/PracticeGuide/1

Application here: one short Dhrubo instruction, a visible physical problem, a player action, an animated consequence, then a brief reason. Longer detail stays behind Real. Movie narration is removed to avoid competing with the visual journey. There are no time penalties for reading or experimenting.

NASA/JPL's engineering design process includes testing and improving a solution.
Source: https://www.jpl.nasa.gov/edu/resources/image/engineering-design-process-flow-chart/

Application here: harmless retry loops, resources preserved after a wrong plant placement, collision previews through actual rover movement, and new rounds. These are design choices informed by the process, not claims about a specific age group's measured performance.

## Earth training science

**Pool practice:** NASA's Neutral Buoyancy Laboratory supports spacewalk training. Buoyancy offsets weight, but gravity and water drag remain. The pool drill therefore teaches force balance and steady work, not the disappearance of gravity.
https://www.nasa.gov/johnson/neutral-buoyancy-laboratory/

**Rover commands:** JPL's educational rover activity discusses planning and commanding a rover. Route planning is meaningful because communication delays prevent ordinary real-time driving from Earth.
https://www.jpl.nasa.gov/edu/resources/lesson-plan/explore-mars-with-scratch/

**Plants:** NASA describes controlled space-plant cultivation and the importance of water, light, nutrients and the root environment. The game uses explicit sensor diagnoses rather than suggesting that a wilted leaf always means one particular deficiency. Six species are illustrative examples, not a validated crop protocol.
https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/

**Gravity:** Apollo 15's hammer/feather demonstration illustrates equal free-fall acceleration without appreciable air resistance. The game uses rounded Earth/Mars surface accelerations, 9.81 and 3.71 m/s²; air-drag coefficients are illustrative. Shape, surface area relative to mass, and atmosphere matter in air. Exact object timing is not presented as NASA measurement data.
https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_15_feather_drop.html

**Life support:** NASA ECLSS describes oxygen generation, carbon dioxide removal and water recovery as distinct functions. Electricity splits water into oxygen and hydrogen; sorbents capture CO₂. Condensation collects water vapor, but potable water requires further treatment. This is a virtual sealed-system exercise, not a chemical recipe.
https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/

## Flight science

**Tiny impacts:** NASA's Hypervelocity Impact Technology group describes Whipple shields. An outer bumper breaks up small particles and spreads the resulting debris before it reaches the inner wall. The challenge explicitly uses a tiny particle and sensor inspection; it does not imply that a thin shield stops arbitrary large rocks.
https://hvit.jsc.nasa.gov/shield-development/

**Communications:** Directional dish antennas focus a narrow radio beam, making accurate pointing useful. Turning a dial is a simplified stand-in for spacecraft pointing hardware and control.
https://science.nasa.gov/learn/basics-of-space-flight/chapter10-1/

**Power:** Spacecraft distribute limited electrical power among onboard systems. The fictional scenario identifies a nonessential camera while keeping crew air running; this is not an actual spacecraft operating procedure.
https://science.nasa.gov/learn/basics-of-space-flight/chapter11-2/

**Solar arrays and cooling:** NASA describes Orion's rotating solar arrays and a thermal-control system that transfers heat to radiators. These support the alignment and cooling challenges. Orion is a lunar spacecraft; Astro Kitty's Mars vehicle is fictional.
https://www.nasa.gov/missions/meet-nasas-orion-spacecraft/

**Shelter:** NASA describes using onboard material, including water and stowage, to improve shielding during solar-particle events. The game's water-placement drill is a simplified concept, not complete radiation protection.
https://science.nasa.gov/science-research/heliophysics/how-nasa-will-protect-astronauts-from-space-radiation-at-the-moon/

## Art and geography

The existing game character renderer is reused so the kitty and robot stay consistent. Canvas animation uses requestAnimationFrame and capped time steps. Fullscreen means the full app/browser viewport; the game does not forcibly invoke the operating system's exclusive fullscreen mode. Earth foliage remains natural green while the architecture/UI use the Mars palette.

Country outlines: public-domain Natural Earth geometry, world 1:110m and Bangladesh 1:50m, bundled in data/academy-world.json. Khulna marker is geographic; city streets and campus are graphical fiction. No NASA logo is added.
https://www.naturalearthdata.com/
