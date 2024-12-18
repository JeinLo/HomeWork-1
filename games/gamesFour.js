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

