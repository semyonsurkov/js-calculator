let firstNumber;
let secondNumber;
let operator;
let displayValue = '';
let lastResult;

const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      return parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case 'Х':
      return parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      return parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    case '%':
      return parseFloat(firstNumber) % parseFloat(secondNumber);
      break;
  }
};

const numberButtons = document.querySelectorAll('.btn-number');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!operator) {
      if (!firstNumber) {
        firstNumber = button.value;
      } else {
        firstNumber += button.value;
      }
    } else {
      if (!secondNumber) {
        secondNumber = button.value;
      } else {
        secondNumber += button.value;
      }
    }
    updateDisplay(button.value);
  });
});

const operatorsButtons = document.querySelectorAll('.btn-operator');

operatorsButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', () => {
    if (firstNumber && !operator) {
      operator = operatorButton.value;
      updateDisplay(' ' + operator + ' ');
    }
  });
});

function updateDisplay(value) {
  displayValue += value;
  const screenCurrent = document.querySelector('.screen-current');
  screenCurrent.textContent = displayValue;
}

const backspaceButton = document.querySelector('#btn-backspace');

backspaceButton.addEventListener('click', () => {
  displayValue = displayValue.slice(0, -1);
  const screenCurrent = document.querySelector('.screen-current');
  screenCurrent.textContent = displayValue;
});

const resetButton = document.querySelector('.btn-clear');

resetButton.addEventListener('click', () => {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayValue = '';
  const screenCurrent = document.querySelector('.screen-current');
  screenCurrent.textContent = displayValue;
  summary.innerHTML = '';
});

const equalButton = document.querySelector('.btn-equals');
const summary = document.querySelector('.screen-result');

equalButton.addEventListener('click', () => {
  if (operator && firstNumber && secondNumber) {
    const result = operate(operator, firstNumber, secondNumber);
    updateDisplay('');
    summary.innerHTML = result;
  }
});
