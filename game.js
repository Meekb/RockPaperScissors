class Game {
  constructor() {
    this.human = new Player();
    this.computer = new Player();
    this.type = 'Classic' || 'Difficult';
  }

  computerChoice() {
    var computerChoice = Math.round(Math.random() * 3);
    if (computerChoice === 1) {
      var computerIcon = 'rock'
    } else if (computerChoice === 2) {
      computerIcon = 'paper'
    } else {
      computerIcon = 'scissors'
    }
    console.log(computerIcon)
  }

  // humanChoice() {
  //
  // }

  determineWinner() {
    var winner;
    if (humanChoice() === newGame.computerChoice()) {
      winner = 'DRAW'
      console.log('It\'s a draw!!!');
      return winner
    } else if (humanChoice() === 'rock' && newGame.computerChoice() === 'paper') {
      winner = 'Computer'
      console.log('Computer WINS!!!');
      return winner
    } else if (humanChoice() === 'rock' && newGame.computerChoice() === 'scissors') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    } else if (humanChoice() === 'paper' && newGame.computerChoice() === 'scissors') {
      winner = 'Computer'
      console.log('Computer WINS!!!');
      return winner
    } else if (humanChoice() === 'paper' && newGame.computerChoice() === 'rock') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    } else if (humanChoice() === 'scissors' && newGame.computerChoice() === 'rock') {
      winner = 'Computer'
      console.log('Conmputer WINS!!!');
      return winner
    } else if (humanChoice() === 'scissors' && newGame.computerChoice() === 'paper') {
      winner = 'Human'
      console.log('Human WINS!!!');
      return winner
    }
  }

};