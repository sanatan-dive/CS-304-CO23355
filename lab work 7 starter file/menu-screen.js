class SelectionScreen {
  constructor(app) {
      this.app = app;  // Pass the app instance if needed
      this.songSelector = document.getElementById('song-selector');
      this.themeInput = document.getElementById('theme-input');
      this.form = document.getElementById('menu-form');
      this.error = document.getElementById('error');

      this.themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];

      // Manually defined song data
      this.songsData = {
          cranes: {
              songUrl: "https://yayinternet.github.io/hw4-music/songs/solange-cranes-kaytranada.mp3",
              title: "Cranes in the Sky [KAYTRANADA Remix]",
              artist: "Solange"
          },
          timeless: {
              songUrl: "https://yayinternet.github.io/hw4-music/songs/james-blake-timeless.mp3",
              title: "Timeless",
              artist: "James Blake"
          },
          knock: {
              songUrl: "https://yayinternet.github.io/hw4-music/songs/knockknock.mp4",
              title: "Twice",
              artist: "Knock Knock"
          },
          deep: {
              songUrl: "https://yayinternet.github.io/hw4-music/songs/janet-jackson-go-deep.mp3",
              title: "Go Deep [Alesia Remix]",
              artist: "Janet Jackson"
          },
          discretion: {
              songUrl: "https://yayinternet.github.io/hw4-music/songs/mitis-innocent-discretion.mp3",
              title: "Innocent Discretion",
              artist: "MitiS"
          },
          spear: {
              songUrl: "https://yayinternet.github.io/hw4-music/songs/toby-fox-spear-of-justice.mp3",
              title: "Spear of Justice (ALMOST NO KICKS)",
              artist: "Toby Fox"
          }
      };

      // Populate songs and theme input
      this.populateSongSelector();
      this.prepopulateTheme();

      // Handle form submission
      this.form.addEventListener('submit', (event) => {
          event.preventDefault();
          this.handleFormSubmit();
      });
  }

  // Populate the select element with songs from the manually defined songsData
  populateSongSelector() {
      // Clear any existing options (if necessary)
      this.songSelector.innerHTML = '';

      // Iterate through the song object to create options
      for (const key in this.songsData) {
          if (this.songsData.hasOwnProperty(key)) {
              const song = this.songsData[key];
              const option = document.createElement('option');
              option.value = song.songUrl; // The URL of the song
              option.textContent = `${song.title} by ${song.artist}`; // Title and artist of the song
              this.songSelector.appendChild(option);
          }
      }
  }

  // Prepopulate the theme input with a random theme
  prepopulateTheme() {
      const randomTheme = this.themes[Math.floor(Math.random() * this.themes.length)];
      this.themeInput.value = randomTheme;
  }

  // Handle form submission
  handleFormSubmit() {
      const selectedSong = this.songSelector.value;
      const theme = this.themeInput.value.trim();

      if (!selectedSong || !theme) {
          this.error.classList.remove('inactive');
          return;
      }

      // Hide the menu
      document.getElementById('menu').classList.add('hidden');

      // Print out the song and theme (this will be replaced by navigating to the music screen later)
      console.log('Selected Song:', selectedSong);
      console.log('Theme:', theme);

      // Call app logic to switch to the music screen
      this.app.startMusicScreen(selectedSong, theme);
  }
}
