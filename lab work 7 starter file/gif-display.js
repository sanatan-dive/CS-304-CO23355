class GifDisplay {
    constructor(theme) {
        this.theme = theme;
        this.gifContainer = document.getElementById('gif-display');
        this.gifs = [];
        this.gifChangeInterval = null; // To store the interval ID
    }
  
    async preloadGifs() {
        // const giphyApiKey = 'bbWVpo9cx8mhONQar2wNphNN6GeI2NzD'; // Replace with your Giphy API key
        const response = await fetch(`https://api.giphy.com/v2/emoji?api_key=bbWVpo9cx8mhONQar2wNphNN6GeI2NzD&limit=10&offset=0`);
        const data = await response.json();
        this.gifs = data.data.map(gif => gif.images.original.url);
    }
  
    setInitialGifs() {
        this.setupGifDisplay();
        this.showNextGif();
        this.startGifChange(); // Start changing GIFs
    }
  
    setupGifDisplay() {
        this.gifContainer.innerHTML = '';
    }
  
    showNextGif() {
        if (this.gifs.length === 0) return; // Check if there are any GIFs
        const randomIndex = Math.floor(Math.random() * this.gifs.length);
        const gifUrl = this.gifs[randomIndex];
  
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = 'GIF';
        img.className = 'gif';
        this.gifContainer.innerHTML = ''; // Clear previous gifs
        this.gifContainer.appendChild(img);
    }

    startGifChange() {
        // Change GIF every 500 milliseconds (or adjust based on your beat)
        this.gifChangeInterval = setInterval(() => {
            this.showNextGif();
        }, 1000);
    }

    
}

// Example usage

