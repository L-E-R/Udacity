/**
 * Score Sprite
 */

export default class Score {
  constructor(state) {
    this.state = state;

    this.context = this.state.engine.gameContext;
    this.canvas = this.state.engine.gameCanvas;
    this.resources = this.state.resources;

    this.score = 0
  }

  addPoints(points) {
    this.score += points;
    this.render();
  }

  removePoints(points) {
    this.score -= points;
    this.render();
  }

  render() {
    this.context.textAlign = "center";

    this.context.font = "38px Arial";
    this.context.fillStyle = "#FFFFFF";

    this.context.fillText(this.score, this.canvas.width/2, 40);
  }
}