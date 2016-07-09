/**
  @author Rafael G. Pontes
*/
var buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(function(button){
  let bValue = button.innerHTML;
  let expression = document.querySelector('.expression');
  let result = document.querySelector('#result');
  console.log("New forEach iteration...");
  button.onclick = function(event){
    event.preventDefault();
    console.log("onclick fired...");
    expression.value = getStringExpression(expression.value, bValue);
    result.value = calc(getMathExpression(expression.value));
  }
});

function getMathExpression(expression){
  var mathExpression = '';
  console.log("getMathExpression()...")
  console.log("expression.length = " + expression.length);
  for(var i = 0; i < expression.length; i++){
    switch (expression[i]) {
      case 'ⅹ': mathExpression.concat('*'); break;
      case '÷': mathExpression.concat('/'); break;
      case '=':
        i = expression.length + 1;
        break;
      case '⌫':
        mathExpression = mathExpression.substring(0, mathExpression.length-1);
        console.log("Here...")
        break;
      case 'Clear':
        mathExpression = '';
        i = expression.length + 1;
        break;
      default:
        console.log("default... adding '" + expression[i] + "'")
        mathExpression.concat(expression[i]);
    }
  }
  console.log("final mathExpr = '" + mathExpression + "'")
  return mathExpression;
}

function getStringExpression(expression, bValue) {
    expression = expression + bValue;
    return expression;
}

function calc(mathExpression) {
  return eval(`${mathExpression}`)
}
