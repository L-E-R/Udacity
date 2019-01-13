import BaseView from "./base_view";

/**
 * Game Help View
 */

export default class GameHelp extends BaseView {

  constructor(state) {
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

    ctx.font = "50px IMPACT";
    ctx.textAlign = "center";

    ctx.strokeStyle = "#b6ff60"
    ctx.strokeText("How To Play", cnv.width/2, 75);

    ctx.font = "20px Arial";
    ctx.fillStyle = "#FFFFFF";

    let text = "The objective of the game is to cross the field and collect objects (gas, spark plug, oil) on the other side. Then return those items back to your toolbox, located where you originally started. Beware of the out of control lawn mowers that will mow you down and take a life."
    let nextY = this.wrapText(ctx, text, cnv.width/2, 125, cnv.width - 20, 20, "Arial");
    
    ctx.fillText("Use the keyboard arrow keys to control the character", cnv.width/2, nextY + 50);
    ctx.fillText("Up | Down | Left | Right", cnv.width/2, nextY + 100);

    ctx.fillStyle = "#99bd98";
    ctx.fillText("Press Esc For Game Menu ", cnv.width/2, cnv.height - 25);
  }


  /* Clear the Modal Canvas to Simulate Modal Close */
  close() {
    this.modalContext.clearRect(0, 0, this.modalCanvas.width, this.modalCanvas.height);
  }


  /* Helper Methods */
  wrapText(context, text, x, y, maxWidth, fontSize, fontFace){
    var words = text.split(' ');
    var line = '';
    var lineHeight=25;
  
    context.font=fontSize+" "+fontFace;
  
    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if(testWidth > maxWidth) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
    return(y);
  }
}