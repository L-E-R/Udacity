import BaseView from "./base_view";

/**
 * Game Board View
 */

export default class GameBoard extends BaseView {

  constructor() {
    super();
    this.init();
  }


  /* Initialize Class Variables */
  init() {
    this.rowImages = [
      'images/board/water-block.png',   // Top row is water
      'images/board/stone-block.png',   // Row 1 of 1 of stone
      'images/board/grass-block.png',   // Row 1 of 3 of grass
      'images/board/grass-block.png',   // Row 2 of 3 of grass
      'images/board/grass-block.png',   // Row 3 of 3 of grass
      'images/board/grass-block.png',   // Row 1 of 2 of stone
      'images/board/stone-block.png'    // Row 2 of 2 of stone
    ];

    this.numRows = this.rowImages.length;
    this.numCols = 5;
  }

  /* Render Sprite Objects to the Canvas */
  render() {
    let row, col;

    this.gameContext.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);

    for (row = 0; row < this.numRows; row++) {
      for (col = 0; col < this.numCols; col++) {
        this.gameContext.drawImage(this.resources.get(this.rowImages[row]), col * 101, row * 83 - 50);
      }
    }
  }
}