'use strict';

// state of the game
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// console.log(document.querySelector('.btn--roll'));

// Rolling dice
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    // 1. random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log('dice is', dice);

    // 2. show dice image
    const diceEl = document.querySelector('.dice');
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-' + dice + '.png';

    // 3. if not 1 add to current score, else switch player
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById('current--' + activePlayer).textContent =
        currentScore;
    } else {
      // switch player
      document.getElementById('current--' + activePlayer).textContent = 0;
      currentScore = 0;

      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }

      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    }
  }
});

// Hold
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    // 1. add current score to the player total
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById('score--' + activePlayer).textContent =
      scores[activePlayer];

    // 2. check for win
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector('.dice').classList.add('hidden');

      document
        .querySelector('.player--' + activePlayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activePlayer)
        .classList.remove('player--active');
    } else {
      // switch player
      document.getElementById('current--' + activePlayer).textContent = 0;
      currentScore = 0;

      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }

      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    }
  }
});

// New game
document.querySelector('.btn--new').addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  document.querySelector('.dice').classList.add('hidden');

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});
