// Get the display element
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {
      display.innerText = '';
    } else if (item.id == 'backspace') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id == '%') {
      calculatePercentage();
    } else if (item.id == 'equal') {
      evaluateExpression();
    } else {
      display.innerText += item.innerText;
    }
  };
});

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Function to calculate the percentage
function calculatePercentage() {
  let expression = display.innerText;
  if (/[\d)]$/.test(expression)) {
    let result = eval(expression) / 100;
    updateDisplay(result);
  }
}

// Function to evaluate the expression when "=" button is clicked
function evaluateExpression() {
  let expression = display.innerText;
  if (expression != '') {
    let result = eval(expression);
    updateDisplay(result);
  } else {
    display.innerText = 'Enter Value';
    setTimeout(() => (display.innerText = ''), 2000);
  }
}


function handleKeyboardInput(event) {
  const key = event.key;
  const validKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '+',
    '-',
    '*',
    '/',
    '(',
    ')',
    '%',
    'Enter',
    'Backspace',
    'Escape',
  ];

  if (validKeys.includes(key)) {
    event.preventDefault();

    if (key == 'Enter') {
      evaluateExpression();
    } else if (key == 'Backspace') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (key == 'Escape') {
      display.innerText = '';
    } else {
      display.innerText += key;
    }
  }
}

document.addEventListener('keydown', handleKeyboardInput);
