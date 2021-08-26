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
  toogleMenu();

  // popup

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
  togglePopUp();

  // animation

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

  // слайлер 

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
      interval;

    const createDots = () => {
      let li = [...document.querySelectorAll('.dot')],
        list = document.querySelector('.portfolio-dots');

      if (li.length < slide.length) {

        let li = document.createElement('li');
        li.classList.add('dot');
        list.appendChild(li);

        createDots();
      }
      else {
        return;
      }

    };

    createDots();

    let dot = [...document.querySelectorAll('.dot')];
    dot[0].classList.add('dot-active');

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(2000);
  };
  slider();

  //валидация 

  const valid = () => {

    // замена иконок команды

    const comandImg = document.querySelectorAll('.command__photo');

    comandImg.forEach((elem) => {
      let imgDef = elem.getAttribute('src');
      elem.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target) {
          event.target.src = event.target.dataset.img;
        } else if (!target) {
          event.target.src = imgDef;
        }
      });
      elem.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target) {
          event.target.src = imgDef;
        }
      });
    });

    //валидция калькулятора

    const inputNumb = function () {
      const calcInput = document.querySelectorAll('input.calc-item');
      for (let i = 0; i < Object.keys(calcInput).length; i++) {
        calcInput[i].addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
        });
      }
    };

    inputNumb();

    // валидация обратной связи

    const rusWord = function () {
      document.addEventListener('input', (event) => {

        let target = event.target;
        if (target === target.closest('#form2-name')) {
          target.value = target.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]/g, '');
        } else if (target === target.closest('#form2-message')) {
          target.value = target.value.replace(/^\s|[.`"!/,*()%#%-+=:'$@~;\w]/g, '');
        } else if (target === target.closest('#form2-email')) {
          target.value = target.value.replace(/^\s|[А-Яа-я0-9`"/^&±,()%#%+=:$?|;]/g, '');
        } else if (target === target.closest('#form2-phone')) {
          target.value = target.value.replace(/^\s|[А-Яа-яA-Za-z?@!.~'_*"/^&±,%#%+=:$?|;]/g, '');
        } else {
          return;
        }
      });



      document.addEventListener('blur', (event) => {

        let target = event.target;
        if (target === target.closest('#form2-name')) {
          target.value = target.value.replace(/\s&{2,}/g, '').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

        } else if (target === target.closest('#form2-message')) {
          target.value = target.value.replace(/[\s]|[\s$]/g, '');
        } else if (target === target.closest('#form2-email')) {
          target.value = target.value.replace(/\s+/g, ' ');
        } else if (target === target.closest('#form2-phone')) {
          target.value = target.value.replace(/\s+/g, ' ');
        } else {
          return;
        }
      }, true);


    };

    rusWord();

  };

  valid();
});