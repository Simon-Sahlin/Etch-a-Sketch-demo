let submitButton = document.querySelector("#submitButton");
let gridWrapper = document.querySelector("#gridWrapper")

submitButton.addEventListener("click", ()=>{
    while (gridWrapper.firstChild){
        gridWrapper.removeChild(gridWrapper.firstChild);
    }
    let gridSize = +prompt("Grid Size:");
    if (gridSize > 200){
        alert("Size of grid can be a maximum of 200!");
        return;
    }
    generateGrid(gridSize);
}
)

function generateGrid(size = 90){
    for (let y = 0; y < size; y++){
        let rowWrapper = document.createElement("div");
        rowWrapper.classList.add("rowWrapper");
    
        for (let x = 0; x < size; x++){
            let div = document.createElement("div");
            div.classList.add("gridCell");
            div.style.width = `${900/size}px`;
            div.style.height = `${900/size}px`;
    
            div.addEventListener("mouseenter", () =>{
                div.style.backgroundColor = "black";
                // div.style.backgroundColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
            });
    
            rowWrapper.appendChild(div);
        }
        gridWrapper.appendChild(rowWrapper);
    }
}
