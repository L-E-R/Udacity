import BaseView from "./base_view";

/**
 * Game Help View
 */

export default class GameHelp extends BaseView {
  constructor(state) {
    super();

    this.state = state;
    this.init();
  }

  init() {
    this.canvas = this.state.game.engine.modalCanvas;
    this.context = this.state.game.engine.modalContext;
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.font = "50px IMPACT";
    this.context.textAlign = "center";

    this.context.strokeStyle = "#b6ff60"
    this.context.strokeText("How To Play", this.canvas.width/2, 75);

    this.context.font = "20px Arial";
    this.context.fillStyle = "#FFFFFF";

    let text = "The objective of the game is to cross the field and collect objects (gas, spark plug, oil) on the other side. Then return those items back to your toolbox, located where you originally started. Beware of the out of control lawn mowers that will mow you down and take a life."
    let nextY = this.wrapText(this.context, text, this.canvas.width/2, 125, this.canvas.width - 20, 20, "Arial");
    
    this.context.fillText("Use the keyboard arrow keys to control the character", this.canvas.width/2, nextY + 50);
    this.context.fillText("Up | Down | Left | Right", this.canvas.width/2, nextY + 100);

    this.context.fillStyle = "#99bd98";
    this.context.fillText("Press Esc For Game Menu ", this.canvas.width/2, this.canvas.height - 25);
  }

  close() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

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