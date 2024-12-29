const pages = document.querySelectorAll('.card-front, .card-middle, .card-back');

// Add event listeners to each page
pages.forEach(page => {
    page.addEventListener('click', unfoldNextPage);
});

function unfoldNextPage(event) {
    const currentPage = event.currentTarget;
    const nextPage = getNextPage(currentPage);

    if (nextPage) {
        // Move the current page out of view
        currentPage.style.transform = 'translateX(-100%)';

        // Move the next page into view
        nextPage.style.transform = 'translateX(0)';
        nextPage.style.zIndex = '3'; // Bring next page to the front
    }
}

function getNextPage(currentPage) {
    const currentPageIndex = Array.from(pages).indexOf(currentPage);

    if (currentPageIndex === pages.length - 1) {
        return null; // No more pages to unfold
    }

    return pages[currentPageIndex + 1]; // Get next page in the sequence
}
