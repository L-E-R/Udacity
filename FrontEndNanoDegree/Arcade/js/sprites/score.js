import BaseSprite from "./base_sprite";

/**
 * Score Sprite
 */

export default class Score extends BaseSprite {
  constructor(state) {
    super();

    this.state = state;
    this.init();
  }

  init() {
    this.context = this.state.game.engine.gameContext;
    this.canvas = this.state.game.engine.gameCanvas;
    this.resources = this.state.game.resources;
    this.sound = new Audio('sounds/dropoff.wav');
    this.score = 0
  }

  addPoints(points) {
    this.sound.play();
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

  reset() {
    this.score = 0;
  }
}