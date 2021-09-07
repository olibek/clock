const sendForm = () => {

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

  let tel = document.querySelectorAll('[type="tel"]');

  let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
  };

  [...tel].forEach(elem => {
    let mask = new IMask(elem, maskOptions);
  });

  console.log(tel[1].value);

  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    succesMessage = 'Спасибо! мы скоро с вами свяжемся';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  const clearFun = () => {
    statusMessage.remove();
  };

  const redClear = (element) => {
    element.style.cssText = 'border: none';
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
    if (target.getAttribute('id') === 'form1') {

      if (tel[0].value.match(/_/g)) {
        tel[0].style.cssText += 'border: 2px solid red';
      } else {
        tel[0].style.cssText += 'border: none';
        formFunc(target);
      }
    }
    if (target.getAttribute('id') === 'form2') {

      if (tel[1].value.match(/_/g)) {
        tel[1].style.cssText += 'border: 2px solid red';
      } else {
        tel[1].style.cssText += 'border: none';
        formFunc(target);
      }
    }
    if (target.getAttribute('id') === 'form3') {

      if (tel[2].value.match(/_/g)) {
        tel[2].style.cssText += 'border: 2px solid red';
      } else {
        tel[2].style.cssText += 'border: none';
        formFunc(target);
      }
    }
  });

  //валидация
  document.addEventListener('input', (event) => {
    let target = event.target;
    check(target);
  });

};



export default sendForm;