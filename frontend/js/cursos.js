// Select the image container div
const imageContainer = document.querySelector('.image-container');

// Select the left and right scroll icons
const scrollLeftBtn = document.querySelector('.fa-circle-chevron-left');
const scrollRightBtn = document.querySelector('.fa-circle-chevron-right');

// Amount to scroll on each click (adjust as needed)
const scrollAmount = 350;

// Add click event to scroll left
scrollLeftBtn.addEventListener('click', () => {
  imageContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

// Add click event to scroll right
scrollRightBtn.addEventListener('click', () => {
  imageContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
