# Adding Dhrubo's voice with ElevenLabs

The game plays a recorded MP3 for a line when one exists. Any line without a recording uses the browser voice, so you can add recordings a few at a time.

`voice-lines.csv` lists every line. Each row has:

- **part**: which part of the game it belongs to
- **file**: the exact file name the game looks for
- **caption**: the line as shown on screen (do not change it; the file name comes from it)
- **say**: what ElevenLabs reads aloud. Change this freely to fix pronunciation, for example `Shabaash!` or `Dhroobo`.

## Way 1: make every file at once (recommended)

You need Node.js 18 or newer (https://nodejs.org).

1. On elevenlabs.io, pick a voice for Dhrubo. In **Voices**, open its menu and copy its **Voice ID**.
2. Open your profile, then **API Keys**, and create a key. Keep it private.
3. Open a terminal in the `Astro_Kitty` folder and run:

   Mac or Linux:
   ```
   ELEVEN_API_KEY=your_key ELEVEN_VOICE_ID=your_voice_id node voice/make-voice.mjs
   ```
   Windows (PowerShell):
   ```
   $env:ELEVEN_API_KEY="your_key"; $env:ELEVEN_VOICE_ID="your_voice_id"; node voice/make-voice.mjs
   ```

The script saves the MP3s in `dist/audio/voice/` and updates `dist/audio/voice/manifest.json`. If it stops (for example, you run out of credits), run it again later. It skips files it already made.

To redo one line, delete its MP3, edit its **say** text, and run the script again.

## Way 2: by hand on the website

1. Paste a line's **say** text into ElevenLabs Text to Speech and download the MP3.
2. Rename it to that row's **file** name, for example `v_b955b27e.mp3`.
3. Put it in `dist/audio/voice/`.
4. Run `node voice/make-voice.mjs --manifest-only` to list the new files in the manifest.

## After adding files

Upload the `dist/audio/voice` folder to GitHub. Vercel will redeploy the game with the new voice.
