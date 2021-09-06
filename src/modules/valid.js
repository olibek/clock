const valid = () => {

  const check = function (item) {
    if (item.matches('[placeholder="Ваше имя"]')) {
      item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]{2}$/g, '');
    }
    // if (item.matches('[placeholder="Номер телефона"]')) {
    //   item.value = item.value.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/g, '+$1 ($2) $3-$4-$5');
    // }

    if (item.matches('[placeholder="Ваш номер телефона"]')) {
      item.value = item.value.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/g, '+$1 ($2) $3-$4-$5');
    }
    if (item.matches('[placeholder="E-mail"]')) {
      item.value = item.value.replace(/^\s|[А-Яа-я0-9`"/^&±,()%#%+=:$?|;]/g, '');
      item.setAttribute('required');
    }
    if (item.matches('[placeholder="Ваш E-mail"]')) {
      item.value = item.value.replace(/^\s|[А-Яа-я0-9`"/^&±,()%#%+=:$?|;]/g, '');
      item.setAttribute('required');
    }
    if (item.matches('[placeholder="Ваше сообщение"]')) {
      item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]/g, '');
    }
    else {
      return;
    }
  };

  let element = document.querySelector('[placeholder = "Номер телефона"]');
  let element1 = document.querySelector('[placeholder = "Ваш номер телефона"]');

  let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
  };

  const mask = new IMask(element, maskOptions);
  const mask1 = new IMask(element1, maskOptions);

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

    document.body.addEventListener('blur', (event) => {
      let target = event.target;
      if (target.matches('[placeholder="Ваше имя"]')) {
        if (target.value) {
          target.value = target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
          if (target.value.length < 2) {
            target.value = target.value.replace(/.{1}/g, '');
          }
        }
        if (target.matches('[placeholder="Номер телефона"]')) {
          if (target.value.length > 13) {
            target.value = target.value.replace(/.{1}/g, '');
          }
        }
      } else {
        return;
      }
    }, true);

  };

  rusWord();

};

export default valid;