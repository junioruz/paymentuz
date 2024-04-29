const cards = document.querySelectorAll('.payment__card');
const backBtn = document.querySelectorAll('.back');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});

backBtn.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});