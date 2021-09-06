const sendForm = () => {

  const check = function (item) {

    if (item.matches('[placeholder="Ваше имя"]')) {
      item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]{2}$/g, '');
    }
    if (item.matches('[placeholder="E-mail"]')) {
      item.value = item.value.replace(/^\s|[А-Яа-я0-9`"/^&±,()%#%+=:$?|;]/g, '');
    }
    if (item.matches('[placeholder="Ваш E-mail"]')) {
      item.value = item.value.replace(/^\s|[А-Яа-я0-9`"/^&±,()%#%+=:$?|;]/g, '');
    }
    if (item.matches('[placeholder="Ваше сообщение"]')) {
      item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]/g, '');
    }
    else {
      return;
    }
  };

  let element = document.querySelectorAll('[placeholder = "Номер телефона"]')[1];
  let element1 = document.querySelector('[placeholder = "Ваш номер телефона"]');

  let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
  };

  const mask = new IMask(element, maskOptions);
  const mask1 = new IMask(element1, maskOptions);

  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    succesMessage = 'Спасибо! мы скоро с вами свяжемся';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  const clearFun = () => {
    statusMessage.remove();
  };
  const formFunc = (elem) => {

    elem.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(elem);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    // функция для обращения к серверу

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

    };

    const errorData = (error) => {
      statusMessage.textContent = errorMessage;
      setTimeout(clearFun, 3000);
    };
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }

        statusMessage.textContent = succesMessage;
        setTimeout(clearFun, 3000);
        for (let k = 0; k < elem.length; k++) {
          elem[k].value = '';
        }
      })
      .catch(errorData);


    // получение данных с формы


  };
  document.addEventListener('submit', (event) => {
    event.preventDefault();
    let target = event.target;
    formFunc(target);
  });

  //валидация
  document.addEventListener('input', (event) => {
    let target = event.target;
    check(target);
  });

};

export default sendForm;