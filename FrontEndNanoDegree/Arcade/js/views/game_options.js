/**
 * Game Options View
 */

export default class GameOptions {
  constructor(state) {
    this.state = state;

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
    this.context.strokeText("Game Options", this.canvas.width/2, 50);

    this.context.font = "20px Arial";
    this.context.fillStyle = "#FFFFFF";





    this.context.fillStyle = "#99bd98";
    this.context.fillText("Press S To Save Changes", this.canvas.width/2, this.canvas.height - 75);

    this.context.fillText("Press Esc For Game Menu", this.canvas.width/2, this.canvas.height - 25);
  }

  close() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}