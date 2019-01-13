import BaseView from "./base_view";

/**
 * Game Menu View
 */

export default class GameMenu extends BaseView {

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

    ctx.clearRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.drawImage(this.resources.get('images/enemies/lawn-mower.png'), cnv.width/2 - 85, cnv.height/2 - 200);


    ctx.font = "50px IMPACT";
    ctx.textAlign = "center";

    ctx.fillStyle = "#19A329"
    ctx.fillText("Mow-Cross", cnv.width/2, cnv.height/2);

    ctx.font = "20px Arial";
    ctx.fillStyle = "#FFFFFF";

    ctx.fillText("Press Enter To Start", cnv.width/2, cnv.height/2 + 75);

    ctx.fillStyle = "#99bd98";
    ctx.fillText("Press H For How To Play ", cnv.width/2, cnv.height/2 + 150);
    ctx.fillText("Press O For Game Options", cnv.width/2, cnv.height/2 + 200);
  }


  /* Clear the Modal Canvas to Simulate Modal Close */
  close() {
    this.modalContext.clearRect(0, 0, this.modalCanvas.width, this.modalCanvas.height);
  }
}