# Pig Game 🐷🎲

A two-player dice game I built while working through **Jonas Schmedtmann's "The Complete JavaScript Course"** on Udemy.

Players take turns rolling a dice. Each roll adds to your *current* score, but if you roll a **1** you lose everything you've banked that turn and the other player goes. Hit **Hold** to add your current score to your total — first to **100** wins.

## How to play

1. Roll the dice as many times as you like — your rolls stack up in *Current*.
2. Roll a **1** and your current score is wiped, and it's the other player's turn.
3. Hit **Hold** to lock your current score into your total, then pass the turn.
4. First player to reach 100 points wins.
5. Hit **New game** to start over.

## What I learned

- Storing game state in variables (`scores`, `currentScore`, `activePlayer`, `playing`)
- A `playing` flag to stop the buttons doing anything after the game ends
- `classList.add` / `remove` / `toggle` to switch the active player and mark the winner
- Swapping the dice image by changing `img.src`
- `Math.trunc(Math.random() * 6) + 1` to roll a dice
- Reading and updating elements by id with `getElementById`

## Files

- `index.html` — the layout
- `style.css` — the styling
- `script.js` — all the game logic
- `dice-1.png` … `dice-6.png` — the dice faces

## Running it

No setup needed. Just open `index.html` in your browser and play.

## Credit

Project idea and starter HTML/CSS come from the course:
[The Complete JavaScript Course: From Zero to Expert! — Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/)
