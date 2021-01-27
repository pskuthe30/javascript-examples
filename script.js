"use strict";
function printSquare(width) {
  for (let i = 1; i <= width; i++) {
    for (let j = 1; j <= width; j++) {
      console.log(`#`);
    }
    console.log(`\n`);
  }
}
printSquare(3);
