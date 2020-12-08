const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

/**
 * Para cada card clicado, adiciona a classe 'active' e seleciona o video
 * correto através do ID de cada card
 */
for (let card of cards) {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;
    });
}

/**
 * Ao clicar para fechar o modal, remove a classe 'active' e remove o vídeo
 * ao setar src = ''
 */
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
});






