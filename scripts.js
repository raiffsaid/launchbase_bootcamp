const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

// Para cada card clicado, adiciona a classe 'active'
for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });
}

// Ao clicar para fechar o modal, remove a classe 'active'
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});



