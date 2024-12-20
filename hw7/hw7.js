// Задание 1

let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);

// Задание 2

function filterStringsByPrefix(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

const strings = ['Apple', 'banana', 'tomato', 'grape', 'avocado'];
const prefix = 'ap';
const result = filterStringsByPrefix(strings, prefix);

console.log(result); 


// Задание 3

const number = 32.58884;

const floorValue = Math.floor(number);
console.log(`Округлено до меньшего целого: ${floorValue}`); 

const ceilValue = Math.ceil(number);
console.log(`Округлено до большего целого: ${ceilValue}`); 

const roundValue = Math.round(number);
console.log(`Округлено до ближайшего целого: ${roundValue}`);


// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
console.log(`Минимальное значение: ${minValue}`);

const maxValue = Math.max(...numbers);
console.log(`Максимальное значение: ${maxValue}`); 



// Задание 5

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Случайное число от 1 до 10: ${randomNumber}`);
}
getRandomNumber();


// Задание 6

function generateRandomArray(n) {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('Введите положительное целое число.');
    }

    const length = Math.floor(n / 2); 
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * n);
        randomArray.push(randomNumber);
    }

    return randomArray;
}

const res = generateRandomArray(10);
console.log(`Случайный массив: ${res}`);


// Задание 7

function getRandomInRange(min, max) {

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Оба аргумента должны быть целыми числами.');
    }
    if (min >= max) {
        throw new Error('Первый аргумент должен быть меньше второго.');
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
const randomNum = getRandomInRange(5, 15);
console.log(`Случайное число в диапазоне от 5 до 15: ${randomNum}`);

// Задание 8

const currentDate = new Date();
console.log(`Текущая дата: ${currentDate}`);

// Задание 9

const currentDateDays = new Date();
console.log(`Текущая дата: ${currentDateDays}`);

const futureDate = new Date(currentDateDays);
futureDate.setDate(currentDateDays.getDate() + 73); 

console.log(`Дата через 73 дня: ${futureDate}`);

// Задание 10

function formatDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    const time = date.toTimeString().split(' ')[0]; 

    return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${time}`;
}

console.log(formatDate(new Date()));