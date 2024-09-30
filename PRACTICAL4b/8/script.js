function initGrid() {
    // Collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    // Generate color codes
    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // Select the colors div
    var colorsDiv = document.getElementById("colors");

    // Create colored tiles and append them to the colors div
    for (var i = 0; i < colors.length; i++) {
        var tile = document.createElement("div");
        tile.className = "choice";
        tile.style.backgroundColor = colors[i];
        
        // Add click event listener to the tile
        tile.addEventListener("click", (function(color) {
            return function() {
                // Set the selected div's background color and text
                var selectedDiv = document.getElementById("selected");
                selectedDiv.style.backgroundColor = color;
                selectedDiv.textContent = color;
            };
        })(colors[i]));

        // Append the tile to the colors div
        colorsDiv.appendChild(tile);
    }
}

window.onload = function () {
    initGrid();
};
