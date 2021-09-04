const togglePopUp = () => {
  const popup = document.querySelector('.popup');

  document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.popup-btn')) {
      popup.style.display = 'block';
    }
    else if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });
};

export default togglePopUp;