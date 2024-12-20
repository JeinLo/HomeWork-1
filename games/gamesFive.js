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
