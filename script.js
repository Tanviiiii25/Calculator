const display = document.getElementById('display');
  let expression = '';

  function appendValue(value) {
    expression += value;
    display.textContent = expression;
  }

  function clearDisplay() {
    expression = '';
    display.textContent = '';
  }

  function deleteChar() {
    expression = expression.slice(0, -1);
    display.textContent = expression;
  }

  function calculate() {
    try {
      // Replace % with /100 before evaluating
      const modifiedExpression = expression.replace('%', '/100');
      const result = eval(modifiedExpression);
      expression = result.toString();
      display.textContent = expression;
    } catch (error) {
      display.textContent = 'Error';
    }
  }