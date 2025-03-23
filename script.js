document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
  
    // Get all carousel images
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
  
    // Get the width of one slide
    const slideWidth = slides[0].clientWidth;
  
    // Function to move the carousel slides
    function moveSlide(step) {
      index = (index + step + totalSlides) % totalSlides; // Loop through images
      document.querySelector('.carousel-images').style.transform = `translateX(${-index * slideWidth}px)`;
    }
  
    // Event listeners for the prev and next buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    prevButton.addEventListener('click', function() {
      moveSlide(-1);
    });
  
    nextButton.addEventListener('click', function() {
      moveSlide(1);
    });
  });
  