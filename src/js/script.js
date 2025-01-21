// 1 task

// const userAnswer = prompt("Яка “офіційна” назва JavaScript?");

// if (userAnswer === "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert("Ви не знаєте? ECMAScript!");
// }

// 2 task

// const userNum = Number(prompt("Введіть число:"));

// if (userNum > 0) {
//   console.log("1");
// } else if (userNum < 0) {
//   console.log("-1");
// } else {
//   console.log("0");
// }

// 3 task

let a = 1;
let b = 4;

const result = a + b < 4 ? "-" : "+";

console.log(result);

// 4 task

const x1 = 10;
const x2 = 30;
const number = 45;

if (number < x1) {
  console.log("Менше х1");
} else if (x1 < number && number < x2) {
  console.log("Від х1 до х2");
} else if (number < x1 || number > x2) {
  console.log("До х1 або після х2");
} else if (number > x1) {
  console.log("Більше х1");
}

// 5 task

const isOnline = false;
const isFriend = true;
const isDnd = false;

if (isFriend === false) {
  console.log(
    "Ви не можете відкрити чат з цим користувачем, він має бути у вас в друзях"
  );
} else if (isOnline === false) {
  console.log("Ви не можете відкрити чат з цим користувачем, він не в онлайн");
} else if (isDnd === false) {
  console.log(
    "Ви не можете відкрити чат з цим користувачем, він в режимі не турбувати"
  );
} else {
  console.log("Чат відкрито!");
}

// 6 task

const userSubscribe = 1;

const defaultSubscribe = 0;
const proSubscribe = 1;
const vipSubscribe = 2;

if (userSubscribe === 0) {
  console.log(
    "Щоб отримати доступ до контенту потрібно мати підписку PRO або VIP"
  );
} else {
  console.log("Контент відкрито!");
}

// 7 task

// let balance = Number(prompt("Введіть ваш баланс:"));
// const payment = Number(prompt("Введіть суму покупки:"));
// alert(
//   `Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`
// );

// if (balance >= payment) {
//   alert(`На рахунку залишилося ${balance - payment} кредитів`);
// } else {
//   alert("На рахунку недостатньо коштів для проведення операції!");
// }
// alert("Операція завершена");

// 9 task

const totalSpent = Number(prompt("Введіть загальну суму витрачених коштів"));
const payment = Number(prompt("Введіть суму поточного платежу"));
let discount;

if (totalSpent > 100 && totalSpent + payment < 1000) {
  discount = 2;
  alert("бронзовий партнер, знижка 2%");
} else if (totalSpent >= 1000 && totalSpent + payment < 5000) {
  discount = 5;
  alert(`срібний партнер, знижка 5%`);
} else if (totalSpent >= 5000) {
  discount = 10;
  alert(`золотий партнер, знижка 10%`);
} else {
  alert("У вас ще немає партнерської знижки");
}

alert(
  `Oформляємо замовлення на суму ${
    totalSpent - (totalSpent * discount) / 100
  } зі знижкою ${discount}%`
);
