'use strict';

// console.log(document.querySelector('.label-score').textContent);

const randomNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number Entered';
  }
});
