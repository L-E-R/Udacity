import BaseSprite from "./base_sprite";

/**
 * Toolbox Sprite
 */

export default class Toolbox extends BaseSprite {
  
  constructor() {
    super();
    this.init();
  }

  
  /* Getter & Setters */
  get collisionPos() {
    return {
       x: this.x + 5,
       y: this.y + 5,
       width: this.width,
       height: this.height
     }
   }


  /* Initialize Class Variables */
  init() {
    this.x = 15;
    this.y = 510;
    this.width = 70;
    this.height = 70;

    this.sprite = this.resources.get('images/board/toolbox.png');
  }


  /* Render Sprite Object to the Canvas */
  render () {
    this.gameContext.drawImage(this.sprite, this.x, this.y);

    if (this.debug.showCollisionRect) {
      this._debugRenderCollisionRect();
    }
  }


  /* Render Collision Rectangle around Sprite Image */
  _debugRenderCollisionRect() {
    this.gameContext.beginPath();
    this.gameContext.rect(this.collisionPos.x, this.collisionPos.y, this.width, this.height);
    this.gameContext.lineWidth = 7;
    this.gameContext.strokeStyle = 'yellow';
    this.gameContext.stroke();
  }

}