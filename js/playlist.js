function adjustCards() {
    const cards = document.querySelectorAll('.col:not(.arrow-left):not(.arrow-right)');
    if (window.innerWidth <= 780) {
        cards.forEach((card, index) => {
            card.style.display = (index >= 1 && index <= 3) ? 'block' : 'none';
        });
    } else {
        cards.forEach(card => card.style.display = 'block');
    }
  }
window.addEventListener('resize', adjustCards);
window.addEventListener('load', adjustCards);