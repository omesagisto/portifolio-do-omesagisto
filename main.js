document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel]');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');

    if (!track || !prevBtn || !nextBtn) return;

    const scrollByCard = () => {
        const firstItem = track.querySelector('.carousel-item');
        if (!firstItem) return 0;

        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.columnGap || style.gap || 0);

        return firstItem.getBoundingClientRect().width + gap;
    };

    prevBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -scrollByCard(),
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({
            left: scrollByCard(),
            behavior: 'smooth'
        });
    });
});
