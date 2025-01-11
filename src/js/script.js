//first task

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;

console.log(a1, a2, a3, a4, a5);

// second task

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = "5" + 3;
let a9 = "5" - 3;
let a10 = 75 + "кг";

console.log(a6, a7, a8, a9, a10);

//third task
let min = 1;
let max = 100;

let randomNum = Math.random() * (max - min);

console.log(randomNum);

// four task

const firstNum = prompt("Введіть перше число:");
const secondNum = prompt("Введіть друге число:");

let sum = Number.parseInt(firstNum) + Number.parseInt(secondNum);

console.log(sum);

// creative task

let c1 = Number.parseInt("5px");
let c2 = Number.parseInt("2djd334");
let c3 = Number.parseInt("2.45asdwe12");
let c4 = Number.parseInt("qwqweeewq");

// second creative task

let k1 = Number.parseFloat("5px");
let k2 = Number.parseFloat("2djd334");
let k3 = Number.parseFloat("2.45asdwe12");
let k4 = Number.parseFloat("qwqweeewq");

//third creatie task

console.log(
  Math.max(2, 34, 99, 3, 22, 36, 733, 18),
  Math.min(2, 34, 99, 3, 22, 36, 733, 18)
);

// four creative task
let minNum = 3;
let maxNum = 19;

let random = Math.floor(Math.random() * maxNum) + minNum;

console.log(random);

// super-creative task

let width = 10;
let height = 23;

let area = width * height;

console.log(" Area of rectangle: " + area + " cm^2");

// second super-creative task

let diameter = 4;
let cylinderHeight = 10;

let cylinderAmount = Math.PI * diameter * cylinderHeight;

console.log("Cylinder amount", cylinderAmount.toFixed(2), "cm^3");

// third super-creative task

let sideA = 3;
let sideB = 4;

let hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

console.log("Hypotenuse is", hypotenuse, "cm");
