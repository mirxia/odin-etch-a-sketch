const container = document.querySelector(".container");

container.addEventListener("mouseover", e => {
    e.stopPropagation();
    console.log(e.target);
    e.target.classList.add("active");
});

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

const button = document.querySelector("#SetSizeButton");
button.addEventListener("click", e => {
    let width = parseInt(prompt("Enter grid with (max 100): ",""));
    while (width === NaN || width < 1 || width > 100) {
        switch(true) {
            case (width === NaN):
                width = parseInt(prompt("Not an integer, try again: ",""));
                break
            case (width < 1):
                width = parseInt(prompt("Must be positive, try again: ",""));
                break
            case (width > 100):
                width = parseInt(prompt("Max size is 100, try again: ",""));
                break
        }
        width = parseInt(prompt("Invalid value (max 100): ",""));
    }
    container.replaceChildren();
    generateCells(width);
});