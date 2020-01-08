// RULES
// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins.

let holdScore = 0;
//thanks to Chris W. for putting overall score in an array. Fixed bug of current player's score adding previous players score.
let score = [0, 0]; 
let currentPlayer = 0;

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
    document.querySelector(
      '#hold-score-' + currentPlayer
    ).innerText = holdScore;
  } else {
    holdScore = 0;
    document.querySelector(
      '#hold-score-' + currentPlayer
    ).innerText = holdScore;

    nextPlayer();
  }
}

function holdHandler() {
  if (score[currentPlayer] < 20) {
    score[currentPlayer] += holdScore;
    holdScore = 0;
    document.querySelector(
      '#hold-score-' + currentPlayer
    ).innerText = holdScore;
    document.querySelector('#overall-score-' + currentPlayer).innerText =
      score[currentPlayer];
    nextPlayer();
  } else if (score[currentPlayer] >= 20) {
    console.log('you win!');
  }
}
//change players
function nextPlayer() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
}
