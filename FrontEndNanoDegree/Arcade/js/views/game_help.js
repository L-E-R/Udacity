/**
 * Game Help View
 */

export default class GameHelp {
  constructor(state) {
    this.state = state;

    this.init();
  }

  init() {
    this.canvas = this.state.engine.modalCanvas;
    this.context = this.state.engine.modalContext;
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.font = "50px IMPACT";
    this.context.textAlign = "center";

    this.context.strokeStyle = "#b6ff60"
    this.context.strokeText("How To Play", this.canvas.width/2, 50);

    this.context.font = "20px Arial";
    this.context.fillStyle = "#FFFFFF";

    this.context.fillText("The object of the game is to cross the lawn and retrieve objects " +
                          "located on the other side. Then return the retrieved object back " +
                          "to your toolbox near where you started.", this.canvas.width/2, 75, this.canvas.width - 5);
    
    this.context.fillText("Use the keyboard arrow keys to control the character", this.canvas.width/2, 95);

    this.context.fillStyle = "#99bd98";
    this.context.fillText("Press Esc For Game Menu ", this.canvas.width/2, this.canvas.height - 25);
  }

  close() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}