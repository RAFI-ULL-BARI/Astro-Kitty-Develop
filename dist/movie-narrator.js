import { ARRIVAL_CHAPTERS } from './visual-core.js';
// @ts-ignore The shared runtime is a dependency-free JavaScript module.
import { dhruboNarrator } from './narration.js';
export class MovieNarrator {
    blocked;
    speaking;
    voice;
    chapter = -1;
    enabled = true;
    constructor(blocked, speaking, voice = dhruboNarrator()) {
        this.blocked = blocked;
        this.speaking = speaking;
        this.voice = voice;
    }
    async play(index) {
        this.stop();
        this.chapter = index;
        if (!this.enabled)
            return;
        const part = ARRIVAL_CHAPTERS[index];
        if (!part)
            return;
        void this.voice.play(part.line, { onstart: () => this.speaking(true), onend: () => this.speaking(false), onblocked: this.blocked });
    }
    stop() { this.voice.stop(); this.speaking(false); }
    pause() { this.voice.pause(); this.speaking(false); }
    async resume() { if (this.enabled)
        await this.voice.resume(); }
    setEnabled(enabled) { this.enabled = enabled; if (!enabled)
        this.stop(); }
}
