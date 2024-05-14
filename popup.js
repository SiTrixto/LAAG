const popupContainer = document.getElementById('popup-container');


setTimeout(() => {
  popupContainer.style.display = 'block';
}, 5000);

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});