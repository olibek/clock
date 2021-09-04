const animPup = function () {
  const popup = document.querySelector('.popup-content');

  popup.style.top = '0%';
  let count = 0;
  let animInterval;
  let animate = false;

  const menuUp = function () {
    if (!animate) {
      animInterval = requestAnimationFrame(menuUp);
      animate = true;
      count++;
      if (count < 20) {
        popup.style.top = count + '%';
        setTimeout(menuUp, 10);
      }
    } else {
      cancelAnimationFrame(menuUp);
      animate = false;
    }
  };
  const resetAnim = function () {

    if (animate) {
      cancelAnimationFrame(animInterval);
      popup.style.top = 0;
      count = 0;
      animate = false;
    }
    else {
      popup.style.top = 0;
      count = 0;
    }
  };

  document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.popup-btn')) {
      if (document.documentElement.clientWidth < 768) {
        popup.style.top = '10%';
        return;
      }
      else {
        animInterval = requestAnimationFrame(menuUp);
        resetAnim();
      }
    }
    else if (target.classList.contains('popup-close')) {
      resetAnim();
    } else {
      return;
    }
  });

};

export default animPup;