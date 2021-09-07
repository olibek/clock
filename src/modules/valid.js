const valid = () => {

  const check = function (item) {
    if (item.matches('[placeholder="Ваше имя"]')) {
      item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]{2}$/g, '');
    }
    if (item.matches('[placeholder="Ваше сообщение"]')) {
      item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]/g, '');
    }
    else {
      return;
    }
  };

  let regMail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/;

  document.addEventListener('blur', (event) => {
    let target = event.target;
    if (target.matches('[placeholder="E-mail"]')) {
      if (!regMail.test(target.value)) {
        target.value = '';
      }
    }
  }, true);

  //   // замена иконок команды

  const comandImg = document.querySelectorAll('.command__photo');

  comandImg.forEach((elem) => {
    elem.addEventListener('mouseover', (event) => {
      let target = event.target;
      if (target) {
        [event.target.src, event.target.dataset.img] = [event.target.dataset.img, event.target.src];
      }
    });
    elem.addEventListener('mouseout', (event) => {
      let target = event.target;
      if (target) {
        [event.target.dataset.img, event.target.src] = [event.target.src, event.target.dataset.img];
      }
    });
  });

  //валидция калькулятора

  const inputNumb = function () {
    const calcInput = document.querySelectorAll('input.calc-item');
    for (let i = 0; i < Object.keys(calcInput).length; i++) {
      calcInput[i].addEventListener('input', function () {
        this.value = this.value.replace(/(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g, "+7 ($2) $3-$4-$5");
      });
    }
  };

  inputNumb();

  // валидация обратной связи

  const rusWord = function () {
    document.body.addEventListener('input', (event) => {
      let target = event.target;
      check(target);
    });

  };

  rusWord();

};

export default valid;