const animateElements = document.querySelectorAll('.animate-on-scroll');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the "visible" class when the element is in view
      entry.target.classList.add('about');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, {
  threshold: 0.4 // Trigger when 20% of the element is in view
});

// Observe each element
animateElements.forEach(el => {
  observer.observe(el);
});