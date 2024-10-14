class TrackScreen {
  constructor(app, selectedSong, theme) {
      this.app = app;
      this.selectedSong = selectedSong;
      this.theme = theme;
      this.audioPlayer = new AudioPlayer(selectedSong);
      this.gifDisplay = new GifDisplay(theme);
      this.init();
  }

  init() {
      this.setupLayout();
      this.setupEventListeners();
      this.gifDisplay.preloadGifs().then(() => {
          this.gifDisplay.setInitialGifs();
          this.show();
          this.audioPlayer.play();
      });
  }

  setupLayout() {
      const musicScreen = document.getElementById('music');
      musicScreen.classList.remove('hidden');
      this.gifDisplay.setupGifDisplay();
  }

  setupEventListeners() {
      const playButton = document.getElementById('play-button');
      playButton.addEventListener('click', () => {
          if (this.audioPlayer.isPlaying()) {
              this.audioPlayer.pause();
              this.updatePlayButton(false);
          } else {
              this.audioPlayer.play();
              this.updatePlayButton(true);
          }
      });

      this.audioPlayer.onKick(() => {
          this.gifDisplay.showNextGif();
      });
  }

  updatePlayButton(isPlaying) {
      const playButtonImage = document.querySelector('#play-button img');
      playButtonImage.src = isPlaying ? 'images/pause.png' : 'images/play.png';
  }

  show() {
      const musicScreen = document.getElementById('music');
      musicScreen.classList.remove('hidden');
  }
}
