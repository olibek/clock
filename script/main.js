window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // таймер 
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = ((dateStop - dateNow) / 1000),
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      return { hours, minutes, seconds, timeRemaining };
    }

    function updateClock() {

      let timer = getTimeRemaining();
      for (let i in timer) {
        if (timer[i] < 10) {
          timer[i] = '0' + timer[i];
        }
      }
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemaining < 0) {

        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }


    }
    setInterval(updateClock, 1000);
  }
  countTimer('26 august 2021');

  // меню

  const toogleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li>a');

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
        menu.classList.toggle('active-menu');
      }
    });
  };

  toogleMenu();

  // popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      btnPopup = document.querySelectorAll('.popup-btn');

    btnPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });


    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };
  togglePopUp();

  // animation

  const animPup = function () {
    const popup = document.querySelector('.popup-content'),
      btnPopup = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close');

    popup.style.top = '0%';
    let count = 0;
    let animInterval;
    let animate = false;

    const menuUp = function () {
      if (!animate) {
        animInterval = requestAnimationFrame(menuUp);
        animate = true;
        count = count + 1;
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
    popupClose.addEventListener('click', resetAnim);
    btnPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (document.documentElement.clientWidth < 768) {
          popup.style.top = '10%';
          return;
        } else {
          animInterval = requestAnimationFrame(menuUp);
        }
      });
    });

  };
  animPup();

  // табы 
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');
    const toogleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tabContent[i].classList.add('d-none');
          tab[i].classList.remove('active');
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target) {
        tab.forEach((item, index) => {
          if (item === target) {
            toogleTabContent(index);
          }
        });
      }
    });
  };
  tabs();

});