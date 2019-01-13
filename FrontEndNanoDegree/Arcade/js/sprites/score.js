import BaseSprite from "./base_sprite";

/**
 * Score Sprite
 */

export default class Score extends BaseSprite {
  
  constructor() {
    super();
    this.init();
  }


  /* Initialize Class Variables */
  init() {
    this.sound = this.resources.get('sounds/dropoff.wav');
    this.score = 0
  }

  
  /* Render Score to the Canvas */
  render() {
    this.gameContext.textAlign = "center";

    this.gameContext.font = "38px Arial";
    this.gameContext.fillStyle = "#FFFFFF";

    this.gameContext.fillText(this.score, this.gameCanvas.width/2, 40);
  }


  /* Increment the Score */
  addPoints(points) {
    this.sound.play();
    this.score += points;
    this.render();
  }


  /* Decrement the Score */
  removePoints(points) {
    this.score -= points;
    this.render();
  }


  /* Reset Rendered Score */
  reset() {
    this.score = 0;
  }
}