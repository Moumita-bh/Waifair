let currentIndex = 0;

    function updateGrid() {
    const grid = document.querySelector('.deals-grid');
    const newTransform = -currentIndex * 20; // move by 20% for each card
    grid.style.transform = `translateX(${newTransform}%)`;
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    // Show/hide next button based on currentIndex
    if (currentIndex >= 5) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
    // Show/hide prev button based on currentIndex
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
}

function nextSlide() {
    if (currentIndex < 5) { // Show first 5 cards initially
        currentIndex++;
    } else if (currentIndex < 10) { // when scrolled, show the next 5 cards
        currentIndex += 5;
    }
    updateGrid();
}

function prevSlide() {
    if (currentIndex > 0) {
        if (currentIndex > 5) { // when scrolled, show the previous 5 cards
            currentIndex -= 5;
        } else {
            currentIndex--;
        }
        updateGrid();
    }
}
