/**
 * Game Over View
 */

export default class GameOver {
  constructor(state) {
    this.state = state;

    this.init();
    }

  init() {
    this.canvas = this.state.engine.modalCanvas;
    this.context = this.state.engine.modalContext;
  }

  render() {

    this.context.globalAlpha = 0.5;
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.globalAlpha = 1;

    this.context.font = "50px IMPACT";
    this.context.textAlign = "center";

    this.context.fillStyle = "white"
    this.context.fillText("GAME OVER", this.canvas.width/2, this.canvas.height/2);

    this.context.font = "20px Arial";
    this.context.fillStyle = "white";

    this.context.fillText("Press Enter To Play Again", this.canvas.width/2, this.canvas.height/2 + 75);
    this.context.fillText("Press Esc For Game Menu", this.canvas.width/2, this.canvas.height/2 + 115);

  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}