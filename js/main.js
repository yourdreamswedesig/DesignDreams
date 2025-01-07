window.addEventListener("load", function () {
    // Select the stars container
    const starsContainer = document.getElementById('starsContainer');
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('img');
        star.src = "https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png";
        star.classList.add('star-image');

        // Randomize position, size, and animation
        const randomX = Math.random() * window.innerWidth; // Random horizontal position
        const randomY = Math.random() * window.innerHeight; // Random vertical position
        // const randomSize = Math.random() * 20 + 10; // Random size between 10px and 30px
        const randomDelay = 1; // Random animation delay
        const randomTranslateX = Math.random() * 200 - 100; // Random translateX (-100 to 100)
        const randomTranslateY = Math.random() * 200 - 100; // Random translateY (-100 to 100)
        const randomTwinkleDuration = Math.random() * 5 + 1; // 1s to 6s
        star.style.animationDuration = `45s, ${randomTwinkleDuration}s`;
        // Apply random properties
        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;
        //  star.style.width = `${randomSize}px`;
        //  star.style.height = `${randomSize}px`;
        star.style.animationDelay = `${randomDelay}s`;

        // Use CSS variable for random translation
        star.style.setProperty('--translate', `${randomTranslateY}s`);

        starsContainer.appendChild(star);
    }
    disableCursor();
});
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function disableCursor() {
    if (!isTouchDevice()) {
        document.getElementById("cursor").classList.remove("hide");
    }
}
function navigateToSocialChannel(channel) {
    switch (channel) {
        case 'mail':
            window.location.href = 'mailto:contact@designdream.com?subject=Service%20Inquiry&body=Hello%20Design%20Dream%20Team,%0A%0AI%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more%20about%20your%20offerings.%0A%0APlease%20provide%20details%20on%20how%20you%20can%20help%20with%20web%20development,%20app%20development,%20or%20video%20editing%20for%20our%20business.%0A%0AThank%20you,%0A%5BYour%20Name%5D%0A%5BYour%20Contact%20Information%5D';
            break;
        case 'linkedin':
             window.open('https://www.linkedin.com/company/wedesigndreams/', '_blank');
            break;
        case 'instagram':
            window.open('https://www.instagram.com/yourdreamwedesign?igsh=aGpzNTdwZW8xa3J0&utm_source=qr', '_blank');
            break;
        default:
            console.error('Unknown channel:', channel);
    }
}
