document.addEventListener('click', (event) => {
  const card = document.querySelector('.selector');
  const grid = document.querySelector('.grid');
  if (!grid.contains(event.target) && event.target !== card) {
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.display = 'none';
    }, 300);
  }
});

document.querySelectorAll('.cardAlimento').forEach((square, index) => {
  square.addEventListener('click', (event) => {
    event.stopPropagation(); 

    console.log(`Square ${index + 1} clicked.`);
    const card = document.querySelector('.selector');
    const rect = square.getBoundingClientRect();
    const scrollLeft =  document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;
    card.style.top = `${rect.top + scrollTop+20}px`;
    card.style.left = `${rect.left + scrollLeft-50}px`;
    setTimeout(() => {
      card.style.opacity = '1';
    }, 50); 
    card.style.display = 'flex';
  });
});