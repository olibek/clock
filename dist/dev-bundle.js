/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toogleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toogleMenu */ \"./src/modules/toogleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_animPup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animPup */ \"./src/modules/animPup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/valid */ \"./src/modules/valid.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n //импорт файлов\n\n\n\n\n\n\n\n\n\n // таймер \n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('5 september 2021'); // меню\n\n(0,_modules_toogleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // animation\n\n(0,_modules_animPup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // табы \n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // слайлер \n\n_modules_slider__WEBPACK_IMPORTED_MODULE_5___default()(); //валидация \n\n(0,_modules_valid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); //калькулятор \n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100); // отправка ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://time/./src/index.js?");

/***/ }),

/***/ "./src/modules/animPup.js":
/*!********************************!*\
  !*** ./src/modules/animPup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar animPup = function animPup() {\n  var popup = document.querySelector('.popup-content');\n  popup.style.top = '0%';\n  var count = 0;\n  var animInterval;\n  var animate = false;\n\n  var menuUp = function menuUp() {\n    if (!animate) {\n      animInterval = requestAnimationFrame(menuUp);\n      animate = true;\n      count++;\n\n      if (count < 20) {\n        popup.style.top = count + '%';\n        setTimeout(menuUp, 10);\n      }\n    } else {\n      cancelAnimationFrame(menuUp);\n      animate = false;\n    }\n  };\n\n  var resetAnim = function resetAnim() {\n    if (animate) {\n      cancelAnimationFrame(animInterval);\n      popup.style.top = 0;\n      count = 0;\n      animate = false;\n    } else {\n      popup.style.top = 0;\n      count = 0;\n    }\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.popup-btn')) {\n      if (document.documentElement.clientWidth < 768) {\n        popup.style.top = '10%';\n        return;\n      } else {\n        animInterval = requestAnimationFrame(menuUp);\n        resetAnim();\n      }\n    } else if (target.classList.contains('popup-close')) {\n      resetAnim();\n    } else {\n      return;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animPup);\n\n//# sourceURL=webpack://time/./src/modules/animPup.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squereValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squereValue) {\n      total = Math.floor(price * typeValue * squereValue * countValue * dayValue);\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://time/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds,\n      timeRemaining: timeRemaining\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    for (var i in timer) {\n      if (timer[i] < 10) {\n        timer[i] = '0' + timer[i];\n      }\n    }\n\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes;\n    timerSeconds.textContent = timer.seconds;\n\n    if (timer.timeRemaining < 0) {\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://time/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var check = function check(item) {\n    if (item.matches('[placeholder=\"Ваше имя\"]')) {\n      item.value = item.value.replace(/^\\s|[.`\"!/,?^*()#%-+=:'$@~;\\w]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Номер телефона\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-яA-Za-z?@!.~'_*\"/^&±,%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Ваш номер телефона\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-яA-Za-z?@!.~'_*\"/^&±,%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"E-mail\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-я0-9`\"/^&±,()%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Ваш E-mail\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-я0-9`\"/^&±,()%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Ваше сообщение\"]')) {\n      item.value = item.value.replace(/^\\s|[.`\"!/,?^*()#%-+=:'$@~;\\w]/g, '');\n    } else {\n      return;\n    }\n  };\n\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      succesMessage = 'Спасибо! мы скоро с вами свяжемся';\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;';\n\n  var formFunc = function formFunc(elem) {\n    elem.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(elem);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    }); // функция для обращения к серверу\n\n    var postData = function postData(body) {\n      return fetch('./server.php', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(body)\n      });\n    };\n\n    var errorData = function errorData(error) {\n      statusMessage.textContent = errorMessage;\n    };\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = succesMessage;\n\n      for (var k = 0; k < elem.length; k++) {\n        elem[k].value = '';\n      }\n    })[\"catch\"](errorData); // получение данных с формы\n  };\n\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    formFunc(target);\n  }); //валидация\n\n  document.addEventListener('input', function (event) {\n    var target = event.target;\n    check(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://time/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ (() => {

eval("// const slider = () => {\n//   const slide = document.querySelectorAll('.portfolio-item'),\n//     btn = document.querySelectorAll('.portfolio-btn'),\n//     slider = document.querySelector('.portfolio-content');\n//   let currentSlide = 0,\n//     interval;\n//   const createDots = () => {\n//     let li = [...document.querySelectorAll('.dot')],\n//       list = document.querySelector('.portfolio-dots');\n//     if (li.length < slide.length) {\n//       let li = document.createElement('li');\n//       li.classList.add('dot');\n//       list.appendChild(li);\n//       createDots();\n//     }\n//     else {\n//       return;\n//     }\n//   };\n//   createDots();\n//   let dot = [...document.querySelectorAll('.dot')];\n//   dot[0].classList.add('dot-active');\n//   const prevSlide = (elem, index, strClass) => {\n//     elem[index].classList.remove(strClass);\n//   };\n//   const nextSlide = (elem, index, strClass) => {\n//     elem[index].classList.add(strClass);\n//   };\n//   const autoPlaySlide = () => {\n//     prevSlide(slide, currentSlide, 'portfolio-item-active');\n//     prevSlide(dot, currentSlide, 'dot-active');\n//     currentSlide++;\n//     if (currentSlide >= slide.length) {\n//       currentSlide = 0;\n//     }\n//     nextSlide(slide, currentSlide, 'portfolio-item-active');\n//     nextSlide(dot, currentSlide, 'dot-active');\n//   };\n//   const startSlide = (time = 3000) => {\n//     interval = setInterval(autoPlaySlide, time);\n//   };\n//   const stopSlide = () => {\n//     clearInterval(interval);\n//   };\n//   slider.addEventListener('click', (event) => {\n//     event.preventDefault();\n//     let target = event.target;\n//     if (!target.matches('.portfolio-btn, .dot')) {\n//       return;\n//     }\n//     prevSlide(slide, currentSlide, 'portfolio-item-active');\n//     prevSlide(dot, currentSlide, 'dot-active');\n//     if (target.matches('#arrow-right')) {\n//       currentSlide++;\n//     } else if (target.matches('#arrow-left')) {\n//       currentSlide--;\n//     } else if (target.matches('.dot')) {\n//       dot.forEach((elem, index) => {\n//         if (elem === target) {\n//           currentSlide = index;\n//         }\n//       });\n//     }\n//     if (currentSlide >= slide.length) {\n//       currentSlide = 0;\n//     }\n//     if (currentSlide < 0) {\n//       currentSlide = slide.length - 1;\n//     }\n//     nextSlide(slide, currentSlide, 'portfolio-item-active');\n//     nextSlide(dot, currentSlide, 'dot-active');\n//   });\n//   slider.addEventListener('mouseover', (event) => {\n//     if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n//       stopSlide();\n//     }\n//   });\n//   slider.addEventListener('mouseout', (event) => {\n//     if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n//       startSlide();\n//     }\n//   });\n//   startSlide(2000);\n// };\n// export default slider;\n\n//# sourceURL=webpack://time/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toogleTabContent = function toogleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tabContent[i].classList.add('d-none');\n        tab[i].classList.remove('active');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, index) {\n        if (item === target) {\n          toogleTabContent(index);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://time/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.popup-btn')) {\n      popup.style.display = 'block';\n    } else if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://time/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/toogleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toogleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toogleMenu = function toogleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      menu.classList.toggle('active-menu');\n    } else if (target.classList.contains('close-btn')) {\n      menu.classList.toggle('active-menu');\n    } else if (!target.matches('menu')) {\n      menu.classList.remove('active-menu');\n    } else {\n      return;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toogleMenu);\n\n//# sourceURL=webpack://time/./src/modules/toogleMenu.js?");

/***/ }),

/***/ "./src/modules/valid.js":
/*!******************************!*\
  !*** ./src/modules/valid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar valid = function valid() {\n  var check = function check(item) {\n    if (item.matches('[placeholder=\"Ваше имя\"]')) {\n      item.value = item.value.replace(/^\\s|[.`\"!/,?^*()#%-+=:'$@~;\\w]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Номер телефона\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-яA-Za-z?@!.~'_*\"/^&±,%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Ваш номер телефона\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-яA-Za-z?@!.~'_*\"/^&±,%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"E-mail\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-я0-9`\"/^&±,()%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Ваш E-mail\"]')) {\n      item.value = item.value.replace(/^\\s|[А-Яа-я0-9`\"/^&±,()%#%+=:$?|;]/g, '');\n    }\n\n    if (item.matches('[placeholder=\"Ваше сообщение\"]')) {\n      item.value = item.value.replace(/^\\s|[.`\"!/,?^*()#%-+=:'$@~;\\w]/g, '');\n    } else {\n      return;\n    }\n  }; //   // замена иконок команды\n\n\n  var comandImg = document.querySelectorAll('.command__photo');\n  comandImg.forEach(function (elem) {\n    elem.addEventListener('mouseover', function (event) {\n      var target = event.target;\n\n      if (target) {\n        var _ref = [event.target.dataset.img, event.target.src];\n        event.target.src = _ref[0];\n        event.target.dataset.img = _ref[1];\n      }\n    });\n    elem.addEventListener('mouseout', function (event) {\n      var target = event.target;\n\n      if (target) {\n        var _ref2 = [event.target.src, event.target.dataset.img];\n        event.target.dataset.img = _ref2[0];\n        event.target.src = _ref2[1];\n      }\n    });\n  }); //валидция калькулятора\n\n  var inputNumb = function inputNumb() {\n    var calcInput = document.querySelectorAll('input.calc-item');\n\n    for (var i = 0; i < Object.keys(calcInput).length; i++) {\n      calcInput[i].addEventListener('input', function () {\n        this.value = this.value.replace(/[^\\d]/g, '');\n      });\n    }\n  };\n\n  inputNumb(); // валидация обратной связи\n\n  var rusWord = function rusWord() {\n    document.body.addEventListener('input', function (event) {\n      var target = event.target;\n      check(target);\n    });\n    document.body.addEventListener('blur', function (event) {\n      var target = event.target;\n      check(target);\n\n      if (target.matches('[placeholder=\"Ваше имя\"]')) {\n        if (target.value) {\n          target.value = target.value.split(/\\s+/).map(function (word) {\n            return word[0].toUpperCase() + word.substring(1);\n          }).join(' ');\n        }\n      } else {\n        return;\n      }\n    }, true);\n  };\n\n  rusWord();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\n\n//# sourceURL=webpack://time/./src/modules/valid.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;