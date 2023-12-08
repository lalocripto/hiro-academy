document.querySelectorAll('.carous-control').forEach(control => {
  control.addEventListener('click', function() {
    const container = document.querySelector('.carous-container');
    const scrollAmount = 300; // Adjust scroll amount as needed

    if (this.classList.contains('right')) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });
});
