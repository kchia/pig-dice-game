// RULES
// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins.

let holdScore, score, currentPlayer;

newGameHandler();

//roll function
document.querySelector('.button-roll').addEventListener('click', rollHandler);

//hold function
document.querySelector('.button-hold').addEventListener('click', holdHandler);

//new game function
document.querySelector('.button-new').addEventListener('click', newGameHandler);

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
    alert('You rolled a 1. Next turn!');
    nextPlayer();
  }
}

function holdHandler() {
  score[currentPlayer] += holdScore;
  holdScore = 0;
  document.querySelector('#hold-score-' + currentPlayer).innerText = holdScore;
  document.querySelector('#overall-score-' + currentPlayer).innerText =
    score[currentPlayer];
  if (score[currentPlayer] >= 20) {
    if (currentPlayer === 0) {
      alert('Player 1 wins!');
    } else {
      alert('Player 2 wins!');
    }
  } else {
    nextPlayer();
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

//new game
function newGameHandler() {
  holdScore = 0;
  score = [0, 0];
  currentPlayer = 0;
  document.querySelector('#hold-score-0').innerText = holdScore;
  document.querySelector('#hold-score-1').innerText = holdScore;
  document.querySelector('#overall-score-0').innerText = score[currentPlayer];
  document.querySelector('#overall-score-1').innerText = score[currentPlayer];
}
