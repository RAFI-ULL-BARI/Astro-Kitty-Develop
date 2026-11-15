# Deploy Astro Kitty on Vercel

The deployed game is static HTML/CSS/JavaScript, built from JavaScript and selected TypeScript modules. Vercel serves it directly; Python is only a convenience for playing locally. No Python runtime or server function is required for hosting this version.

## Import from Git

1. Extract the ZIP and put the contents of the Astro_Kitty folder in your Git repository. Keep vercel.json, package.json, package-lock.json, tsconfig.json, src, scripts and dist together.
2. Import that repository into Vercel.
3. Select the folder containing vercel.json as the Root Directory. If you uploaded Astro_Kitty as a nested folder, choose Astro_Kitty. If its contents are at repository root, leave the root at its default.
4. Use Framework Preset: Other. The included vercel.json installs with npm ci --include=dev, builds with npm run build, and serves dist as the Output Directory.
5. Deploy. Open the resulting HTTPS address.

Do not add a catch-all rewrite to index.html. This game has multiple real HTML pages, including academy.html, outpost.html and teacher.html.

## Check the deployment

- The root address opens A new home on Mars.
- Earth Academy opens, its movie plays, and Skip arrival reaches the five labs.
- Fly to Mars shows the new preview and then the mission planner.
- Mars base opens its setup page.
- Sound can be muted and the preference follows navigation.

Progress is saved in the player's current browser. It is not shared across devices. The game includes bundled science data as a fallback if live NASA requests are unavailable. After deployment, test the game on the phones and tablets your audience will use.

The service worker response is configured to revalidate, helping the browser discover updates. The app's existing versioned assets and offline cache are retained.

Official guidance:
https://vercel.com/docs/builds/configure-a-build
https://vercel.com/docs/project-configuration/vercel-json
