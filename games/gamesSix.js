// Получаем кнопки по их ID
const colorButton = document.getElementById('colorButton');
const resetButton = document.getElementById('resetButton');

// Функция для генерации случайного цвета в формате RGB
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Функция, которая будет вызываться при нажатии на кнопку смены цвета
function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor; // Изменяем цвет фона страницы
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white'; 
}

colorButton.addEventListener('click', changeBackgroundColor);
resetButton.addEventListener('click', resetBackgroundColor); 