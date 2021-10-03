let input = document.getElementById('number');
let heading = document.querySelector('span.heading');
let optionValue = document.getElementById('selectBox');
let errorMsg = document.querySelector('.error');
let result = document.querySelector('span.result');
let btn = document.getElementById('convert');
let formula = document.getElementById('formula');

errorMsg.innerHTML = 'Select the value you want to convert';
errorMsg.style.color = 'white';

let inputVal;
let Value;
btn.addEventListener('click', (e) => {
  e.preventDefault();
  inputVal = input.value;
  Value = selectBox.options[optionValue.selectedIndex].value;
  showTemp();
  //   console.log(inputVal + Value);
});

const showTemp = () => {
  if (Value === 'Celsius' && inputVal > 0) {
    let cel = Math.round(inputVal - (32 * 5) / 9);
    heading.innerHTML = 'Result:';
    result.innerHTML = cel;
    errorMsg.innerHTML = '';
    formula.innerHTML = 'Fahrenheit to Celsius\n °Celsius - (32 × 5) / 9 ';
  } else if (Value === 'Fahrenheit' && inputVal > 1) {
    let far = Math.round((inputVal * 9) / 5 + 32);
    errorMsg.innerHTML = '';
    heading.innerHTML = 'Result:';
    result.innerHTML = far;
    errorMsg.innerHTML = '';
    formula.innerHTML = 'Celsius to Fahrenheit\n  (°Fahrenheit × 9) / 5 + 32 ';
  } else if (inputVal == '') {
    errorMsg.innerHTML = 'Please select the value first';
    errorMsg.style.color = 'red';
  }
};

showTemp();
