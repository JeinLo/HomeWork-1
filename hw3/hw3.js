//Задание 1

let password = 'пароль';
let user = prompt('Введите пароль');
if (user === password) {
    alert('Пароль введен верно');
} else{
    alert('Пароль введен неправильно');
}

//Задание 2

let c = 5;
if (c>=0 && c<=0) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 3

let e = 200;
let d = 50;
if (e>=100 || d>=0) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5

let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12: 
        alert('Зима');   
        break;
    case 3:
    case 4:
    case 5: 
        alert('Весна');   
        break;
    case 6:
    case 7:
    case 8: 
        alert('Лето');   
        break;
    case 9:
    case 10:
    case 11: 
        alert('Осень');   
        break;
    default:
        alert('Неверно');
        break;
}

//Дополнительные задания
//Задание 1

let input = prompt("Пожалуйста, введите любое число");
let number = Number(input);
if (isNaN(number)) {
    alert("Вы ввели не число. Пожалуйста, введите корректное значение.");
} else {
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}
//Задание 2

let clientOS = 0; 
if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке.");
} else if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке.");
} else {
    console.log("Неизвестная операционная система.");
}

//Задание 3

let clientA = prompt("Введите 0 для iOS или 1 для Android: ");
let clientDeviceYear = prompt("Введите год выпуска Вашего устройства: ");

if (isNaN(clientDeviceYear) || clientDeviceYear.trim() === "") {
    alert("Введите корректный год выпуска.");
} else {
    clientDeviceYear = Number(clientDeviceYear);
    if (clientA == 0) {

        if (clientDeviceYear < 2015) {
            alert("Установите облегченную версию приложения для iOS по ссылке.");
        } else {
            alert("Установите версию приложения для iOS по ссылке.");
        }
    } else if (clientA == 1) {
        if (clientDeviceYear < 2015) {
            alert("Установите облегченную версию приложения для Android по ссылке.");
        } else {
            alert("Установите версию приложения для Android по ссылке.");
        }
    } else {
        alert("Неверный ввод. Пожалуйста, используйте 0 для iOS и 1 для Android.");
    }
}