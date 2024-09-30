var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];
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
};


window.onload = function() {
    // Create a Labyrinth object
    var labyrinth = new Labyrinth();
    
    // Call the printDisplay method to display the labyrinth in the map div
    labyrinth.printDisplay("map");
};

