//Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет!'); 
}

//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);  
}

//Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);  
}

//Задание 4

const obj = {
    Коля: '200',
    Vasiliy: '300',
    Petr: '400'
}
for (const item in obj) {
    console.log(`${item} - Заработная плата ${obj[item]} долларов`);
}

//Задание 5

// let n = 1000;
// let num = 0;
// while (n >= 50){
//     n /= 2;
//     console.log(n);
//     num++;
// }
// console.log(`Количество циклов: ${num}`);

//Задание 6

const firstFriday = 3;
const daysInMont = 31;
for (let i = firstFriday; i <= daysInMont; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет`);  
}

// Дополнительные задания
// Задание 1

// let k = 100;
// let iterations = 0;
// while (n >= 0) {
//     k -= 7;
//     iterations++;
// }
// console.log(`Результат ${k}`);
// console.log(`Количество циклов: ${iterations}`);

//Задание 2

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]
months.forEach((months, i) => {
    console.log(`${i + 1}. ${months}`)}
);

//Задание 3

const book = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    genre: 'Роман'
};

for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

//Задание 4

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 20));
}
let min = array[0];
for (let num of array) {
  if (num < min) {
    min = num;
  }
}
console.log(`Минимальное число в массиве: ${min}`);