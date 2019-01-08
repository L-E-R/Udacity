import BaseView from "./base_view";

/**
 * Game Board View
 */

export default class GameBoard extends BaseView{
  constructor(state) {
    super();

    this.state = state;
    this.init();
  }

  init() {
    this.canvas = this.state.game.engine.gameCanvas;
    this.context = this.state.game.engine.gameContext;
    this.resources = this.state.game.resources;
  }

  render() {
    var rowImages = [
      'images/board/water-block.png',   // Top row is water
      'images/board/stone-block.png',   // Row 1 of 1 of stone
      'images/board/grass-block.png',   // Row 1 of 3 of grass
      'images/board/grass-block.png',   // Row 2 of 3 of grass
      'images/board/grass-block.png',   // Row 3 of 3 of grass
      'images/board/grass-block.png',   // Row 1 of 2 of stone
      'images/board/stone-block.png'    // Row 2 of 2 of stone

    ],
      numRows = 7,
      numCols = 5,
      row, col;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (row = 0; row < numRows; row++) {
      for (col = 0; col < numCols; col++) {
        this.context.drawImage(this.resources.get(rowImages[row]), col * 101, row * 83 - 50);
      }
    }
  }
}