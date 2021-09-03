import check from "./check";

const sendForm = () => {

  check();

  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    succesMessage = 'Спасибо! мы скоро с вами свяжемся';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';


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
    };
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.textContent = succesMessage;
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