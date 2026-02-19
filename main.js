const generatorBtn = document.getElementById('generator-btn');
const numbersContainer = document.getElementById('numbers-container');

generatorBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        numbersContainer.appendChild(circle);

        const color = getRandomColor();
        circle.style.backgroundColor = color;
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}