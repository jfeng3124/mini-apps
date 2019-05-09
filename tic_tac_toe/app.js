var board, gameData;
var message = document.getElementsByClassName('message')[0];
var spaces = document.getElementsByClassName('board-space');
var button = document.getElementById('button');
var wins = document.getElementById('players');

var initialize = () => {
  message.innerHTML = '';

  for (var i = 0, l = spaces.length; i < l; i++) {
    spaces[i].innerHTML = '';
    spaces[i].classList.remove('selected-space');
  };
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  gameData = {
    nextMover: null,
    currentMover: null,
    message: null,
    gameComplete: false,
    wins: {}
  };
};

initialize();

var firstMove = (x, y) => {
  if (gameData.currentMover === null) {
    return xMoves(x, y);
  };
  switch (gameData.currentMover) { 
    case 'X':
      oMoves(x, y);
      break;
    case 'O':
      xMoves(x, y);
      break;
  };
};

var oMoves = (x, y) => {
  gameData.currentMover = 'O';
  gameData.nextMover = 'X';
  return makeMove(x, y, 'O');
};

var xMoves = (x, y) => {
  gameData.currentMover = 'X';
  gameData.nextMover = 'O'
  return makeMove(x, y, 'X');
};

var makeMove = (x, y, val) => {
  if (gameData.gameComplete === true) {
    alert("Reset board!");
    throw ('error');
  } else {
    gameData.message = null;
  };
  if (board[y - 1][x - 1] === null) {
    board[y - 1][x - 1] = val;
  } 
  checkForWinner();
  if (gameData.message !== null) {
    message.innerHTML = gameData.message;
  };
};

var checkForWinner = () => {
  for (var i = 0; i < board.length; i++) {
    if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return declareWinner(gameData.currentMover);
    }
    if (board[0][i] !== null && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return declareWinner(gameData.currentMover);
    }
    if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return declareWinner(gameData.currentMover);
    }
    if (board[2][0] !== null && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
      return declareWinner(gameData.currentMover);
    }
  };
};

var declareWinner = (player) => {
  gameData.gameComplete = true;
  gameData.wins.player += 1;
  console.log(gameData.wins.player);
  gameData.message = `Player ${player} wins!`;
};

for (var i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener('click', event => {
    var coords = event.target.dataset['space'].split(',');
    firstMove(coords[0], coords[1]);
    if (event.target.innerHTML !== gameData.nextMover) {
      event.target.innerHTML = gameData.currentMover;
      event.target.classList.add('selected-space');
    }
  });
};

button.addEventListener('click', () => {
  initialize();
});