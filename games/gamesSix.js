
const colorButton = document.getElementById('colorButton');

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

function gameSix() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}
colorButton.addEventListener('click', gameSix);
