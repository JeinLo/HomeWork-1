//Игра 1

function gameOne() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 3;

    alert("Угадайте число от 1 до 100!");

    while (attempts < maxAttempts){
         const input = prompt("Введите ваше предположение (или нажмите 'Отмена' для выхода):"); 
    
        if (input === null) {
        alert("Игра остановлена. Спасибо за участие!");
        break;
     }

    const guess = Number(input);
 
    if (isNaN(guess)) {
      alert("Пожалуйста, введите корректное число.");
      continue;
    }
    attempts++;

        if (guess < randomNumber) {
            alert ("Слишком мало! Попробуйте еще раз.");
        } else if (guess > randomNumber) {
            alert ("Слишком много! Попробуйте еще раз.");
        } else {
            alert (`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
        }
        if (attempts === maxAttempts) {
            alert(`Вы исчерпали все попытки. Загаданное число было ${randomNumber}.`);
        }
    }
}


// Игра 2

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    
    if (operator === '/') {
        return `${num1 * num2} / ${num1}`; 
    }
    return `${num1} ${operator} ${num2}`;
}

function calculateAnswer(question) {
    const [num1, operator, num2] = question.split(' ');
    switch (operator) {
        case '+':
            return Number(num1) + Number(num2);
        case '-':
            return Number(num1) - Number(num2);
        case '*':
            return Number(num1) * Number(num2);
        case '/':
            return Number(num1) / Number(num2);
    }
}

function gameTwo() {
    while (true) {
        const question = generateQuestion();
        const userAnswer = prompt(`Решите задачу: ${question} (или введите 'Отмена' для выхода)`);


        if (userAnswer === null || userAnswer.toLowerCase() === 'exit') {
            alert('Игра окончена. Спасибо за участие!');
            break;
        }

        const correctAnswer = calculateAnswer(question);
        
        if (Number(userAnswer) === correctAnswer) {
            alert('Верный ответ!');
        } else {
            alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
        }
    }
}


// Игра 3

function gameThree() {
    const text = prompt("Введите текст:"); 
    if (text) {
        const reversedText = text.split('').reverse().join(''); 
        alert(`Перевернутый текст: ${reversedText}`); 
    } else {
        alert('Игра отменена.'); 
    }
}

// Игра 4

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function gameFour() {
    let score = 0;

    for (const { question, options, correctAnswer } of quiz) {
        const userAnswer = prompt(`${question}\n${options.join("\n")}\n\nНажмите "Отмена", чтобы выйти из викторины.`);
        if (userAnswer === null) return alert("Вы вышли из викторины.");
        if (parseInt(userAnswer) === correctAnswer) score++;
    }

    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}


// Игра 5

function gameFive() {
    const options = ["камень", "ножницы", "бумага"];
    let userChoice = prompt("Выберите: камень, ножницы или бумага. Нажмите 'отмена' для выхода.");

    if (userChoice === null) {
        alert("Игра отменена.");
        return;
    }

    userChoice = userChoice.toLowerCase();

    if (!options.includes(userChoice)) {
        alert("Неверный выбор. Пожалуйста, выберите камень, ножницы или бумагу.");
        return; 
    }

    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let result;

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}


// Игра 6

function gameSix() {

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    const miniGamesElement = document.querySelector('.galery__container');
    miniGamesElement.style.backgroundColor = randomColor;
}


//Скролы кнопки Поехали//

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__button').addEventListener('click', function() {
        let targetSection;
        
        if (window.innerWidth <= 768) { 
            targetSection = document.querySelector('.img'); 
        } else {
            targetSection = document.getElementById('galery'); 
        }

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
