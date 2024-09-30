var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];

    // Define start and end positions
    this.START_X = 0; // Starting row
    this.START_Y = 0; // Starting column
    this.END_X = 4;   // Ending row
    this.END_Y = 4;   // Ending column

    // Set initial character position to start position
    this.characterX = this.START_X;
    this.characterY = this.START_Y;
}

// Method to print the labyrinth map in the console
Labyrinth.prototype.printConsole = function() {
    for (var row = 0; row < this.map.length; row++) {
        var line = "";
        for (var col = 0; col < this.map[row].length; col++) {
            line += (this.map[row][col] === 1) ? "*" : " "; // Use * for walls, space for paths
        }
        console.log(line);
    }
};

// Method to draw the labyrinth on the screen
Labyrinth.prototype.printDisplay = function(id) {
    var container = document.getElementById(id);
    container.style.position = 'relative'; // Set positioning of the parent div
    container.style.width = this.map[0].length * CELL_SIZE + 'px'; // Width of the map
    container.style.height = this.map.length * CELL_SIZE + 'px'; // Height of the map
    container.style.border = '2px solid black'; // Border around the map
    container.innerHTML = ''; // Clear any existing content

    // Create cells for each part of the labyrinth
    for (var row = 0; row < this.map.length; row++) {
        for (var col = 0; col < this.map[row].length; col++) {
            var cell = document.createElement('div');
            cell.style.position = 'absolute'; // Absolute positioning for cells
            cell.style.width = CELL_SIZE + 'px'; // Set cell size
            cell.style.height = CELL_SIZE + 'px'; // Set cell size
            cell.style.left = col * CELL_SIZE + 'px'; // Position based on column
            cell.style.top = row * CELL_SIZE + 'px'; // Position based on row

            // Set background color based on cell type
            if (this.map[row][col] === 1) {
                cell.style.backgroundColor = 'grey'; // Wall color
            } else {
                cell.style.backgroundColor = 'white'; // Space color
            }

            container.appendChild(cell); // Add cell to the container
        }
    }

    // Draw the character
    this.drawCharacter(container);

    // Draw the destination
    this.drawDestination(container);
};

// Method to draw the character
Labyrinth.prototype.drawCharacter = function(container) {
    var character = document.createElement('div');
    character.style.position = 'absolute'; // Absolute positioning for the character
    character.style.width = CELL_SIZE + 'px'; // Set character size
    character.style.height = CELL_SIZE + 'px'; // Set character size
    character.style.left = this.characterY * CELL_SIZE + 'px'; // Position based on column
    character.style.top = this.characterX * CELL_SIZE + 'px'; // Position based on row
    character.style.backgroundColor = 'red'; // Character color
    character.id = 'character'; // Give an ID for future reference
    container.appendChild(character); // Add character to the container
};

// Method to draw the destination
Labyrinth.prototype.drawDestination = function(container) {
    var destination = document.createElement('div');
    destination.style.position = 'absolute'; // Absolute positioning for the destination
    destination.style.width = CELL_SIZE + 'px'; // Set destination size
    destination.style.height = CELL_SIZE + 'px'; // Set destination size
    destination.style.left = this.END_Y * CELL_SIZE + 'px'; // Position based on column
    destination.style.top = this.END_X * CELL_SIZE + 'px'; // Position based on row
    destination.style.backgroundColor = 'green'; // Destination color
    container.appendChild(destination); // Add destination to the container
};

// Method to move the character
Labyrinth.prototype.moveCharacter = function(direction) {
    var newX = this.characterX;
    var newY = this.characterY;

    // Update new coordinates based on direction
    switch (direction) {
        case 'up':
            newX--;
            break;
        case 'down':
            newX++;
            break;
        case 'left':
            newY--;
            break;
        case 'right':
            newY++;
            break;
    }

    // Check if new position is within bounds and not a wall
    if (this.isValidMove(newX, newY)) {
        this.characterX = newX;
        this.characterY = newY;
        this.updateCharacterPosition();
    }

    // Check if character has reached the destination
    if (this.characterX === this.END_X && this.characterY === this.END_Y) {
        alert("Congratulations!");
    }
};

// Method to check if the move is valid
Labyrinth.prototype.isValidMove = function(x, y) {
    // Check if out of bounds
    if (x < 0 || x >= this.map.length || y < 0 || y >= this.map[0].length) {
        return false;
    }
    // Check if moving onto a wall
    return this.map[x][y] === 0;
};

// Method to update the character's position on the map
Labyrinth.prototype.updateCharacterPosition = function() {
    var character = document.getElementById('character');
    character.style.left = this.characterY * CELL_SIZE + 'px'; // Update horizontal position
    character.style.top = this.characterX * CELL_SIZE + 'px'; // Update vertical position
};

window.onload = function() {
    // Create a Labyrinth object
    var labyrinth = new Labyrinth();
    
    // Call the printDisplay method to display the labyrinth in the map div
    labyrinth.printDisplay("map");

    // Handle keydown events to move the character
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp':
                labyrinth.moveCharacter('up');
                break;
            case 'ArrowDown':
                labyrinth.moveCharacter('down');
                break;
            case 'ArrowLeft':
                labyrinth.moveCharacter('left');
                break;
            case 'ArrowRight':
                labyrinth.moveCharacter('right');
                break;
        }
    });
};
