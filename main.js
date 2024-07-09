const rows = 500,
columns = 27;

const headRow = document.querySelector(".head-row");
const headCol = document.querySelector(".serialNo");
const body = document.querySelector(".body");

// Create header row cells
for (let i = 0; i < columns; i++) {
const headCell = document.createElement("div");
if (i === 0) {
  headRow.appendChild(headCell);
  continue;
}
headCell.innerText = String.fromCharCode(i + 64);
headCell.classList.add("col-head");
headRow.appendChild(headCell);
}

// Create rows and cells
for (let row = 1; row <= rows; row++) {
const headColCell = document.createElement("div");
headColCell.innerText = row;
headColCell.classList.add("sno-cell");
headCol.appendChild(headColCell);

const rowCells = document.createElement("div");
rowCells.classList.add("row");
for (let col = 1; col < columns; col++) {
  const colCell = document.createElement("div");
  colCell.classList.add("cell");
  colCell.contentEditable = true;
  colCell.id = `${String.fromCharCode(col + 64)}${row}`;
  rowCells.appendChild(colCell);
}
body.appendChild(rowCells);
}