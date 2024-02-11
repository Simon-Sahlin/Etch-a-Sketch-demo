let rowCount = 100;
let columnCount = 100;

let gridWrapper = document.querySelector("#gridWrapper")

for (let y = 0; y < rowCount; y++){
    let rowWrapper = document.createElement("div");
    rowWrapper.classList.add("rowWrapper");

    for (let x = 0; x < columnCount; x++){
        let div = document.createElement("div");
        div.classList.add("gridCell");

        div.addEventListener("mouseenter", () =>{
            div.style.backgroundColor = "black";
        });

        rowWrapper.appendChild(div);
    }
    gridWrapper.appendChild(rowWrapper);
}