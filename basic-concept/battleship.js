/*
  - Build a simple battleship game
  1. Start the game
  2. Initialize battleship a battleship 1D grid.
  3. Get the user input.
  4. Check user input with location of battleship.
  5. User end the game or quit.
  ----------
  PSEUDOCODE
  
  DECLARE variables to hold location of the battleship (location)
  DECLARE variables to hold user input (guess)
  DECLARE variables to hold number of user input (guesses)
  DECLARE variables to hold limit to win the game (limit)
  DECLARE variables to hold point to get to limit (hits)
  DECLARE variables to hold status of battleship (isSunk)

  LOOP (until battleship sunk) {
    CHECK: valid(user-input)
    FLOW:
      IF: user-input == location
        notify user hit the battleship
        hits increase
        IF (hits == limit)
          isSunk -> false
      ELSE:
        notify user misses
  }
  user win the game
*/

var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var guesses = 0;
var hits = 0;
var limit = 3;
var isSunk = true;
var score = 0;

while (isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6)");
  if (guess < 0 || guess > 6) {
    alert("Please enter the valid number!");
  } else {
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("hit");
      hits++;
      if (hits == limit) {
        alert("Battleship is sunk!");
        isSunk = false;
      }
    } else {
      alert("miss");
    }
  }
}
score = Number.parseFloat(limit/guesses) * 100;
document.write("Your score is: " + score);

