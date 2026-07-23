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
    let cancelFlag = false;
    let width = 0;
    let promptMessage = "Set grid size (max 100): "

    do {
        let input = prompt(promptMessage);
        if (input === null) {
            cancelFlag = true;
            break;
        }
        width = parseInt(input);
        switch(true) {
            case (Number.isNaN(width)):
                promptMessage = "Must be an integer, try again: ";
                break;
            case (width < 1):
                promptMessage = "Must be a positive integer, try again: ";
                break;
            case (width > 100):
                promptMessage = "Max size is 100, try again: ";
                break;
        }
    } while (!(width > 0 && width <= 100));

    if (!cancelFlag) {
        container.replaceChildren();
        generateCells(width);
    }
    
});