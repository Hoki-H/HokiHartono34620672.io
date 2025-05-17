document.addEventListener('DOMContentLoaded', function() {
  
  const slides = document.querySelectorAll('#hero-slider .slide-item');
  
  let currentIndex = 0;
  
  function rotateSlides() {
    slides[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + 1) % slides.length;
    
    slides[currentIndex].classList.add('active');
    
  }
  
  setInterval(rotateSlides, 3500);
});
