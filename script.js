let rowCount = 5;
let columnCount = 6;

let gridWrapper = document.querySelector("#gridWrapper")

for (let y = 0; y < rowCount; y++){
    let rowWrapper = document.createElement("div");
    rowWrapper.classList.add("rowWrapper");

    for (let x = 0; x < columnCount; x++){
        let div = document.createElement("div");
        div.classList.add("gridCell");

        rowWrapper.appendChild(div);
    }
    gridWrapper.appendChild(rowWrapper);
}