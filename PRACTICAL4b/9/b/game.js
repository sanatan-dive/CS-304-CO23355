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

window.onload = function() {
    // Create a Labyrinth object
    var labyrinth = new Labyrinth();
    
    // Call the printConsole method to display the labyrinth in the console
    labyrinth.printConsole();
};
