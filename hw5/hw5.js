// Задание 1

const min = (a, b) => (a < b) ? a:b;
console.log (min(8, 4));
console.log (min(6, 6));

// Задание 2

const isOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';
console.log (isOdd(2));
console.log (isOdd(5));

// Задание 3

function square(number) {
    console.log(number ** 2);
}

const pam = (n) => n**2;
square(7);
console.log(pam(5));

// Задание 4

function userAgg() {
    let userAgg =+ prompt('Сколько тебе лет?');

    if (userAgg < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAgg >= 0 && userAgg <= 12) {
        alert('Привет, друг!') ;    
    } else if (userAgg >= 13){
        alert('Добро пожаловать!');
    }
}
userAgg();

// Задание 5

const options = (a, b) => {
    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}
console.log(options(5, 10)); 
console.log(options('5', '10')); 
console.log(options(5, 'abc')); 
console.log(options('abc', 'zxc'));
console.log(options(5)); 

// Задание 6

function cubeNumber() {
    const input = prompt("Введите число от 0 до 10:");
    const num = Number(input);
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else if (num < 0 || num > 10) {
        return 'Пожалуйста, введите число от 0 до 10';
    } else if (cubeValue = Math.pow(num, 3));
        return `${num} в кубе равняется ${cubeValue}`;
}
console.log(cubeNumber());

// Задание 7

const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea()); 
console.log(circle1.getPerimeter());
console.log(circle2.getArea()); 
console.log(circle2.getPerimeter());
