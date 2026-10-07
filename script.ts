"use strict";

//state of the game
let scores: number[] = [0, 0];
let currentScore: number = 0;
let activePlayer: number = 0;
let playing: boolean = true;

//rolling dice
document.querySelector(".btn--roll")!.addEventListener("click", function () {
  if (playing) {
    const dice: number = Math.trunc(Math.random() * 6) + 1;
    console.log("dice is", dice);

    const diceEl = document.querySelector<HTMLImageElement>(".dice");
    if (diceEl) {
      diceEl.classList.remove("hidden");
      diceEl.src = "dice-" + dice + ".png";
    }

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById("current--" + activePlayer)!.textContent =
        `${currentScore}`;
    } else {
      document.getElementById("current--" + activePlayer)!.textContent = `${0}`;
      currentScore = 0;

      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }
      document.querySelector(".player--0")?.classList.toggle("player--active");
      document.querySelector(".player--1")?.classList.toggle("player--active");
    }
  }
});

document.querySelector(".btn--hold")!.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById("score--" + activePlayer)!.textContent =
      `${scores[activePlayer]}`;

    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(".dice")?.classList.add("hidden");
      document
        .querySelector(".player--" + activePlayer)
        ?.classList.add("player--winner");
      document
        .querySelector(".player--" + activePlayer)
        ?.classList.remove("player--active");
    } else {
      document.getElementById("current--" + activePlayer)!.textContent = `0`;
      currentScore = 0;

      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }

      document.querySelector(".player--0")?.classList.toggle("player--active");
      document.querySelector(".player--1")?.classList.toggle("player--active");
    }
  }
});

document.querySelector(".btn--new")!.addEventListener("click", function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  document.getElementById("score--0")!.textContent = "0";
  document.getElementById("score--1")!.textContent = "0";
  document.getElementById("current--0")!.textContent = "0";
  document.getElementById("current--1")!.textContent = "0";

  document.querySelector(".dice")!.classList.add("hidden");
  document.querySelector(".player--0")!.classList.remove("player--winner");
  document.querySelector(".player--1")!.classList.remove("player--winner");
  document.querySelector(".player--0")!.classList.add("player--active");
  document.querySelector(".player--1")!.classList.remove("player--active");
});
