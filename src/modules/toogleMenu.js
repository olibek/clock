const toogleMenu = () => {
  const menu = document.querySelector('menu');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.menu')) {
      handlerMenu();
    }
    else if (target.classList.contains('close-btn') || target.closest('menu>ul>li>a')) {
      handlerMenu();
    }
    else if (!target.matches('menu') && !target.closest('menu>ul')) {
      menu.classList.remove('active-menu');
    }
    else {
      return;
    }
  });
};

export default toogleMenu;