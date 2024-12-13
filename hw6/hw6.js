// Задание 1

const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === 10) { 
        break; 
    }
}

// Задание 2

const item = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < item.length; i++) {
    if (item[i] === 4) { 
        index = i;
        break; 
    }
}
console.log(index);

// Задание 3

const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// Задание 4

const rows = 3; 
const cols = 3; 
const multiArray = [];

for (let i = 0; i < rows; i++) {
    const row = []; 
    for (let j = 0; j < cols; j++) {
        row.push(1); 
    }
    multiArray.push(row); 
}
console.log(multiArray);

// Задание 5

const type = [1, 1, 1];
type.push(2, 2, 2);

console.log(type);

// Задание 6

const arrType = [9, 8, 7, 'a', 6, 5];
arrType .sort((a, b) => a - b);
const filteredArray = arrType .filter(item => item !== 'a');

console.log(filteredArray);

// Задание 7

const num = [9, 8, 7, 6, 5];
const userInput = prompt("Угадайте число из массива [9, 8, 7, 6, 5]:");
const userNumber = Number(userInput);

if (num.includes(userNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// Задание 8

const original = 'abcdef';
const charArray = original.split('');

charArray.reverse();
const reversedString = charArray.join('');

console.log(reversedString);


// Задание 9

const nestedArray = [[1, 2, 3], [4, 5, 6]];
const newArray = []

for (let i = 0; i < nestedArray.length; i++) {
    newArray.push(nestedArray[i]);
}
console.log(newArray);

// Задание 10

const numbers = [3, 5, 1, 7, 9, 2]; 

for (let i = 0; i < numbers.length - 1; i++) {

    const sum = numbers[i] + numbers[i + 1];

    console.log(`Сумма элементов ${numbers[i]} и ${numbers[i + 1]}: ${sum}`);
}

// Задание 11

function getSquares(arr) {
    return arr.map(num => num * num);
}
const numArr = [1, 2, 3, 4, 5]; 
const squares = getSquares(numArr); 

console.log(squares);


// Задание 12

function getStringLengths(arr) {
    return arr.map(str => str.length);
}
const strings = ["apple", "banana", "cherry", "date"]; 
const lengths = getStringLengths(strings); 
console.log(lengths);


// Задание 13

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}
const act = [3, -1, 4, -2, 5, -3, 0]; 
const negativeNumbers = getNegativeNumbers(act); 

console.log(negativeNumbers);

// Задание 14

function generateRandomArray(size, min, max) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; 
        randomArray.push(randomNum);
    }
    return randomArray;
}

const originalArray = generateRandomArray(10, 0, 10);
const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log(`Исходный массив: ${originalArray}`);
console.log(`Массив четных чисел: ${evenNumbers}`);


// Задание 15

function generateRandomArray(size, min, max) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; 
        randomArray.push(randomNum);
    }
    return randomArray;
}
const numbersArray = generateRandomArray(6, 1, 10);
const average = numbersArray.reduce((sum, num) => sum + num, 0) / numbersArray.length;

console.log(`Сгенерированный массив: ${numbersArray}`);
console.log(`Среднее арифметическое: ${average}`);




