'use strict';

// console.log(document.querySelector('.label-score').textContent);

const randomNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = randomNumber;

let score = 20;

let changeScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number Entered';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    changeScore();
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    changeScore();
  }
});
