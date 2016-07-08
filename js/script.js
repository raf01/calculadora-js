var buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(function(button){
  let operator = button.innerHTML;
  let operand1 = document.querySelector('#operand1');
  let operand2 = document.querySelector('#operand2');
  let result = document.querySelector('#result');

  button.onclick = function(event){
    event.preventDefault();
    result.value = calc(operand1.value, operand2.value, operator);
  }
});

function calc(operand1, operand2, operator){
  operator = (operator == 'ⅹ') ? '*' : operator;
  operator = (operator == '÷') ? '/' : operator;
  return eval(`${operand1} ${operator} ${operand2}`)
}
