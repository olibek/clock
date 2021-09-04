'use strict';

//импорт файлов
// import check from './modules/check';
import countTimer from './modules/countTimer';
import toogleMenu from './modules/toogleMenu';
import togglePopUp from './modules/togglePopUp';
import animPup from './modules/animPup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import valid from './modules/valid';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// таймер 
countTimer('6 september 2021');

// меню
toogleMenu();

// popup
togglePopUp();

// animation
animPup();

// табы 
tabs();

// слайлер 
slider();

//валидация 
valid();

//калькулятор 
calc(100);

// отправка ajax-form
sendForm();

