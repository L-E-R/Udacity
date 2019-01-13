import BaseView from "./base_view";

/**
 * Game Pause View
 */

export default class GamePause extends BaseView {

  constructor() {
    super();
    this.init();
  }

  /* Initialize Class Variables */
  init() {
  }


  /* Render Content to the Canvas */
  render() {
    let ctx = this.modalContext;
    let cnv = this.modalCanvas;

    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.globalAlpha = 1;

    ctx.font = "50px IMPACT";
    ctx.textAlign = "center";

    ctx.fillStyle = "white"
    ctx.fillText("GAME PAUSED", cnv.width/2, cnv.height/2);

    ctx.font = "20px Arial";
    ctx.fillStyle = "white";

    ctx.fillText("Press Enter To Return", cnv.width/2, cnv.height/2 + 75);
    ctx.fillText("Press Esc To Quit", cnv.width/2, cnv.height/2 + 115);

  }

  
  /* Clear the Modal Canvas to Simulate Modal Close */
  clear() {
    this.modalContext.clearRect(0, 0, this.modalCanvas.width, this.modalCanvas.height);
  }
}