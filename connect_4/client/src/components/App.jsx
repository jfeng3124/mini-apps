import Row from './Row.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    }
    
    this.play = this.play.bind(this);
  }

  initBoard () {

    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    
    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    })
  }
  
  togglePlayer () {
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
  }

  componentWillMount () {
    this.initBoard();
  }
  
  play (c) {
    if (!this.state.gameOver) {
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      let result = this.checkAll(board);
      if (result === this.state.player1) {
        this.setState({board, gameOver: true, message: 'Player Red wins!' });
      } 
      if (result === this.state.player2) {
        this.setState({board, gameOver: true, message: 'Player Yellow wins!' });
      }
      if (result === 'draw') {
        this.setState({board, gameOver: true, message: 'Draw game.' });
      }
        this.setState({board, currentPlayer: this.togglePlayer() });
    } else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
  
  checkVertical (board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];    
          }
        }
      }
    }
  }
  
  checkHorizontal (board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] && 
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDiagonalRight (board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDiagonalLeft (board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDraw (board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';    
  }
  
  checkAll (board) {
    return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
  }
  
  render () {
    return (
      <div>
        <div className="button" onClick={() => {this.initBoard()}}>New Game</div>
        <div className="message">{this.state.message}</div>
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
      </div>
    );
  }
}
