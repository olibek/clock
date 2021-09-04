const toogleMenu = () => {
  const menu = document.querySelector('menu');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.menu')) {
      menu.classList.toggle('active-menu');
    }
    else if (target.classList.contains('close-btn')) {
      menu.classList.toggle('active-menu');
    }
    else if (!target.matches('menu')) {
      menu.classList.remove('active-menu');
    }
    else {
      return;
    }
  });
};

export default toogleMenu;