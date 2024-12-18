function gameThree() {
    const text = prompt("Введите текст:"); 
    if (text) {
        const reversedText = text.split('').reverse().join(''); 
        alert(`Перевернутый текст: ${reversedText}`); 
    } else {
        alert('Игра отменена.'); 
    }
}
