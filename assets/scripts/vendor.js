const userInput = document.getElementById('input-number');

const additionBtn = document.getElementById('btn-addition');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const modulusBtn = document.getElementById('btn-modulus');
const exponentBtn = document.getElementById('btn-exponent');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
