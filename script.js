// RULES
// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins.
let holdScore = 0;
let score = 0;

//roll function
document.querySelector('.button-roll').addEventListener('click', rollHandler);

//hold function
document.querySelector('.button-hold').addEventListener('click', holdHandler);

function rollHandler() {
  const die = Math.floor(Math.random() * 6) + 1; //selects number from 1 to 6
  document.querySelector('.die').src = 'dice-' + die + '.png';
  // adding rolls to hold score
  if (die !== 1) {
    holdScore += die;
    document.querySelector('.hold-score').innerText = holdScore;
    console.log(holdScore);
  } else {
    holdScore = 0;
    document.querySelector('.hold-score').innerText = holdScore;
    console.log(holdScore);
    nextPlayer();
  }
}

function holdHandler() {
  score += holdScore;
  holdScore = 0;
  document.querySelector('.hold-score').innerText = holdScore;
  document.querySelector('.overall-score').innerText = score;
  console.log(`score: ${score}`);
  nextPlayer();
}

function nextPlayer() {
  console.log('next players turn');
}
