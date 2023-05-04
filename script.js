'use strict';

// console.log(document.querySelector('.label-score').textContent);

//create random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);

//changing and setting score
let score = 20;
let highScore = 0;
let changeScore = function () {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Game Over 🥲';
    document.querySelector('.score').textContent = 0;
  }
};

let setHighSCore = function () {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //when no number is entered
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number Entered';
  }
  //when correct number is entered
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    setHighSCore();
  }
  //when number is greater than the random number
  else if (guess > randomNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    changeScore();
  }
  //when number is less than the random number
  else if (guess < randomNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    changeScore();
  }
});

//again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});
