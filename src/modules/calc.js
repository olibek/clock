const calc = (price = 100) => {

  check();

  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value,
      squereValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squereValue) {
      total = Math.floor(price * typeValue * squereValue * countValue * dayValue);
    }

    totalValue.textContent = total;
  };


  calcBlock.addEventListener('input', (event) => {
    let target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });

};

export default calc;