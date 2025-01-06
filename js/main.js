window.addEventListener("load",function(){
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
function disableCursor(){
    if (!isTouchDevice()) {
        document.getElementById("cursor").classList.remove("hide");
    }
}

