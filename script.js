'use strict';

// console.log(document.querySelector('.label-score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number Entered';
  }
});
