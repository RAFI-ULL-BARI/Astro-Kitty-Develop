# One Dhrubo voice

All movies, story prompts, Academy lessons, field training and Mars Base use `dist/narration.js`. It picks one device voice and keeps it for the session. The preferred voice URI is saved on this device, independently of game progress. Captions remain available if the device has no speech engine.

The supplied project only contains six gameplay samples and older movie demos made with two other voices. Those demos are retained as source assets but are **not used by the current narrator**. A partial recording folder must not make Dhrubo switch voices mid-game.

## Use your own complete voice pack

1. Review `CURRENT_SCRIPT.md`. It contains the revised movie and training lines. `voice-lines.csv` is the generation list; its `caption` is the spoken text as well as the displayed caption.
2. Set `ELEVENLABS_API_KEY` and `ELEVENLABS_VOICE_ID` privately in your terminal environment. Existing `ELEVEN_API_KEY` / `ELEVEN_VOICE_ID` variables still work. Do not put a key in `dist` or commit it.
3. From the project folder, run `node voice/make-voice.mjs`.
4. The generator uses the same voice, model, stability, speed defaults and style for every line. It records verified provenance in the manifest, so it does not silently reuse older samples from a different voice. Interrupted runs can resume safely.
5. When all rows are verified, the manifest has `complete: true`. Reload the page: all scenes then use that recorded pack. Missing dynamic lines display their captions; they never switch to a different speaker.
6. Run `npm test`, then redeploy `dist/`. The service worker caches all listed recordings for offline play.

Existing MP3s without a provenance manifest cannot be verified as your voice automatically. Keep your 280 original recordings backed up before running the generator; it regenerates unverified paths. No API key is needed to play the game.

This update did not generate a replacement clone or spend ElevenLabs credits. Device speech availability and the available voices vary by browser, especially offline. A complete recorded pack is the portable, consistent-voice option.
