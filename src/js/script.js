// dop task

let input;
let total = 0;

do {
  input = prompt("Write any number");
  total += Number(input);
} while (input !== null);

alert(`Total sum: ${total}`);
