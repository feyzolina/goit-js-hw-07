const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    createBoxes(amount);
    input.value = '';
});

// Destroy butonuna tıklanıldığında tüm öğeleri sil
destroyBtn.addEventListener('click', destroyBoxes);

// Yeni kutu koleksiyonunu oluşturma fonksiyonu
function createBoxes(amount) {
    // Önceki kutuları temizle
    destroyBoxes();

    // Yeni kutuları ekle
    const boxes = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10; // 30px başlangıç, her kutu 10px daha geniş
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor(); // Rastgele renk
        box.style.margin = '5px';
        boxes.push(box);
    }
    // Tüm kutuları DOM'a ekle
    boxesContainer.append(...boxes);
}

// Kutu koleksiyonunu temizleme fonksiyonu
function destroyBoxes() {
    boxesContainer.innerHTML = ''; // İçeriği temizle
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

