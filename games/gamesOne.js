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

//Игра 2

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
        const userAnswer = prompt(`Решите задачу: ${question} (или введите 'exit' для выхода)`);

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
