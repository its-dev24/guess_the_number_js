'use strict';

// console.log(document.querySelector('.label-score').textContent);

const randomNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = randomNumber;

let score = 20;

let changeScore = function () {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Game Over 🥲';
    document.querySelector('.score').textContent = 0;
  }
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
