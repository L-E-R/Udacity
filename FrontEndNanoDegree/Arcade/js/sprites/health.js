import BaseSprite from "./base_sprite";

/**
 * Health Sprite
 * 
 */

export default class Health extends BaseSprite {

  constructor() {
    super();
    this.init();
  }

  
  /* Getter & Setters */
  get value() {
    return this._health;
  }


  /* Initialize Class Variables */
  init() {
    this.sprite = this.resources.get('images/board/health.png');
    this._health = 3;
  }


  /* Render the appropriate Health Objects on the Canvas */
  render() {
    for(let i = 1, v = 10; i <= this._health; i++, v += 40) {
      this.gameContext.drawImage(this.sprite, v , 0);
    }
  }


  /* Reset Health Value back to Full Health */
  reset() {
    this._health = 3;
  }


  /* Increment Health Value By One */
  addHealth() {
    this._health++;
    this.render();
  }


  /* Decrement Health Value By One */
  removeHealth() {
    this._health--;
    this.render();
  }
}