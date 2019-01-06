/**
 * Game Menu View
 */

export default class GameMenu {
  constructor(state) {
    this.state = state;

    this.init();
  }

  init() {
    this.canvas = this.state.engine.modalCanvas;
    this.context = this.state.engine.modalContext;
    this.resources = this.state.resources;
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.drawImage(this.resources.get('images/enemies/lawn-mower.png'), this.canvas.width/2 - 85, this.canvas.height/2 - 200);


    this.context.font = "50px IMPACT";
    this.context.textAlign = "center";

    this.context.fillStyle = "#19A329"
    this.context.fillText("Mo-Crossing", this.canvas.width/2, this.canvas.height/2);

    this.context.font = "20px Arial";
    this.context.fillStyle = "#FFFFFF";

    // TODO: Game Options Go Here (Character Selection) (Game Difficulty)

    this.context.fillText("Press Enter To Start", this.canvas.width/2, this.canvas.height/2 + 75);

    this.context.fillStyle = "#99bd98";
    this.context.fillText("Press H For How To Play ", this.canvas.width/2, this.canvas.height/2 + 150);
    this.context.fillText("Press O For Game Options", this.canvas.width/2, this.canvas.height/2 + 200);
  }

  close() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}