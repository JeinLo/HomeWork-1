//Игра 1

function gamesOne() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    let attempts = 0;

    console.log("Угадайте число от 1 до 100!");

    while (guess !== randomNumber) {
        guess = Number(prompt("Введите ваше предположение:"));
        attempts++;
        if (isNaN(guess)) {
            console.log("Пожалуйста, введите корректное число.");
            continue; 
        }

        if (guess < randomNumber) {
            console.log("Слишком мало! Попробуйте еще раз.");
        } else if (guess > randomNumber) {
            console.log("Слишком много! Попробуйте еще раз.");
        } else {
            console.log(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
        }
    }
}
gamesOne();

// document.getElementById('myButton').onclick = gamesOne;

