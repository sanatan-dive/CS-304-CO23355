class AudioPlayer {
  constructor(songUrl) {
      this.audio = new Audio(songUrl);
      this.isPlaying = false;
      this.kickCallbacks = [];
      this.setupAudioEvents();
  }

  setupAudioEvents() {
      // Listen for the 'play' event
      this.audio.addEventListener('play', () => {
          this.isPlaying = true;
      });

      // Listen for the 'pause' event
      this.audio.addEventListener('pause', () => {
          this.isPlaying = false;
      });

      // Assuming a beat detection library is used
      // Replace this with actual logic to detect "kick" beats
      this.audio.addEventListener('timeupdate', () => {
          if (this.audio.currentTime % 1 < 0.1) {
              this.onKick();
          }
      });
  }

  onKick() {
      this.kickCallbacks.forEach(callback => callback());
  }

  play() {
      this.audio.play();
  }

  pause() {
      this.audio.pause();
  }

  isPlaying() {
      return this.isPlaying;
  }

  // Attach a callback for kick events
  onKick(callback) {
      this.kickCallbacks.push(callback);
  }
}
