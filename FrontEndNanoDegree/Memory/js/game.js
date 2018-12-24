/**
 * Game
 * 
 * The game handles the initialization and status of the game
 */

 const INITIAL_STATE = {
   time: [0, 0, 0],
   moves: 0,
   matches: 0
 }

 const TOTAL_MATCHES = 8;


class Game {

  constructor() {
    this.state = Object.assign({}, INITIAL_STATE);
    this.stopwatch = new Stopwatch(document.querySelector('.stopwatch'));
    this.board = new GameBoard(this);
  }

  start() {
    this.board.generate();
  }

  reset() {

    // if the win overlay is displayed
    document.querySelector(".game_victory_overlay").style.display = "none";

    // stopwatch reset
    this.stopwatch.stop();
    this.stopwatch.reset();

    // game state reset
    this.state = Object.assign({}, INITIAL_STATE);

    // update visible moves count
    document.querySelector('.game_moves .count').innerText = this.state.moves;

    // update visible ranking stars
    document.querySelector('.game_ranking').classList.remove('average');
    document.querySelector('.game_ranking').classList.remove('low');

    // clear the gameboard
    this.board.reset();

    // generate a new gameboard layout
    this.board.generate();

  }

  incrementMatches() {
    this.state.matches++;
    if (this.state.matches === TOTAL_MATCHES) {
      this.stopwatch.stop();
      document.querySelector(".game_victory_overlay").style.display = "flex";
    }
  }

  incrementMove() {
    this.state.moves++;
    document.querySelector('.game_moves .count').innerText = this.state.moves;
    this.checkRanking();
  }
  
  checkRanking() {
    const element = document.querySelector('.game_ranking')
    if (this.state.moves > 16) {
      element.classList.remove('average');
      element.classList.add('low'); 
    } else if (this.state.moves > 12) {
      element.classList.add('average'); 
    } else {
      element.classList.remove('average');
      element.classList.remove('low');
    }
  }

}

// initialize the game
let game = new Game();

