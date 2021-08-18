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
        hours = Math.floor(timeRemaining / 60 / 60) % 24,
        day = Math.floor(timeRemaining / 60 / 60 / 24);
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
  countTimer('21 august 2021');
});