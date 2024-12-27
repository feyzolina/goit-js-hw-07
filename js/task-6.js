const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


function createBoxes(amount) {
    destroyBoxes();

    const boxes = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10; 
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor(); 
        box.style.margin = '5px';
        boxes.push(box);
    }
   
    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = ''; 
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    createBoxes(amount);
    input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);



