// RULES
// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins.

//roll function
document.querySelector('.button-roll').addEventListener('click', roll);

function roll() {
  let die = Math.floor(Math.random() * 6) + 1; //selects number from 1 to 6
  console.log(die);
}
