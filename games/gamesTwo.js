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
