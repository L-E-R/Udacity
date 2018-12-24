/**
 * Game Board
 * 
 * The game board initializes the card creation or reset
 */

 const MAX_CARDS = 16;


class GameBoard {

  constructor(game) {
    this.card = new Card(game);
  }

  // generate the cards on the board
  generate() {
    for (let index = 1; index <= MAX_CARDS; index++) {
      this.card.createGameCard(index);
    }
  }

  // remove the cards and then regenerate
  reset() {
    document.querySelector('.game_board').innerHTML = '';
    this.card.reset();
  }
}