// additional task

const processArray = (arr, callback) => {
  const proccess = callback(arr);
  return proccess;
};

const getAverage = (arr) =>
  arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

const areAllEven = (arr) => arr.every((num) => num % 2 === 0);

const isAnyGreaterThan = (arr, value) => arr.some((num) => num > value);

console.log(processArray([2, 4, 6], getAverage)); // Виведе середнє значення
console.log(processArray([2, 4, 6], areAllEven)); // Виведе true
console.log(processArray([2, 4, 7], (arr) => isAnyGreaterThan(arr, 5))); // Виведе true

// 2 additional task

const combineNumbers = (a, b, callback) => {
  return callback(a, b);
};

const powNumbers = (a, b) => Math.pow(a, b);
const divisionNumbers = (a, b) => a / b;

console.log(combineNumbers(2, 6, powNumbers));
console.log(combineNumbers(12, 2, divisionNumbers));
