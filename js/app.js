
var buttons = document.querySelectorAll('.button');
var equalBtn = document.querySelector('.equal');
var clearBtn = document.querySelector('.clear');
var output = document.querySelector('.output');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    var value = e.target.dataset.num;
    output.value += value;
  });
});

equalBtn.addEventListener('click', function(e) {
  try {
    eval(output.value);
  } catch (e) {
    output.value = 'error';
  } finally {
    var calc = eval(output.value);
    output.value = calc;
  }
});

clearBtn.addEventListener('click', function(e) {
  output.value = '';
});

console.log(output);
