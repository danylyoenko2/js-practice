// plus task 1

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const num of numbers) {
  if (smallestNumber > num) {
    smallestNumber = num;
  }
}

console.log(smallestNumber);
// plus task 2

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let sumOfArr1 = 0;
let sumOfArr2 = 0;

for (const num1 of array1) {
  sumOfArr1 += num1;
}

for (const num2 of array2) {
  sumOfArr2 += num2;
}

console.log(
  `Sum of first arr: ${sumOfArr1}, sum of second arr: ${sumOfArr2}, sum of first and second arr: ${
    sumOfArr1 + sumOfArr2
  }`
);
