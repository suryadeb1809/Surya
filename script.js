let currentPage = 1;

function nextPage(page) {
    if (page === 1) {
        document.getElementById('page-1').style.transform = 'rotateY(180deg)';
        document.getElementById('page-2').style.transform = 'rotateY(0deg)';
    } else if (page === 2) {
        document.getElementById('page-2').style.transform = 'rotateY(180deg)';
        document.getElementById('page-3').style.transform = 'rotateY(0deg)';
    }
    startConfetti();
}

function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#ffd700', '#1e90ff', '#32cd32', '#ff69b4'];
    return colors[Math.floor(Math.random() * colors.length)];
}
