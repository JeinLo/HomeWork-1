//Игра 1

function gamesOne() {
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




