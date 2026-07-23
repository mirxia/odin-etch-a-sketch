const container = document.querySelector(".container");

function generateCells(width) {
    for (let i = 0; i < width; i++) {
        const col = document.createElement("div");
        col.classList.add("col")
        for (let j = 0; j < width; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell", "inactive");
            col.appendChild(cell);
        }
        container.appendChild(col);
    }
}

generateCells(16);