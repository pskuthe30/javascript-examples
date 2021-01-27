"use strict";
function printSquare(width) {
  for (let i = 1; i <= width; i++) {
    let pound = "";
    for (let j = 1; j <= width; j++) {
      pound += "#";
    }
    console.log(pound);
  }
}
printSquare(3);

const printTriangle = (width) => {
  for (let i = 0; i <= width; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
};
printTriangle(4);
