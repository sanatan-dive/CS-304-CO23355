class MusicApp {
  constructor() {
      this.selectionScreen = new SelectionScreen(this);
      this.trackScreen = null;
  }

  startMusicScreen(selectedSong, theme) {
      this.trackScreen = new TrackScreen(this, selectedSong, theme);
  }
}

// Instantiate the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new MusicApp();
});
