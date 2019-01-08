import BaseSprite from "./base_sprite";

/**
 * Toolbox Sprite
 */

export default class Toolbox extends BaseSprite {
  constructor(state) {
    super();

    this.state = state;
    this.init();
  }

  init() {
    this.context = this.state.game.engine.gameContext;
    this.resources = this.state.game.resources;

    this.x = 15;
    this.y = 510;
    this.width = 70;
    this.height = 70;

    this.sprite = 'images/board/toolbox.png';
  }


  collisionPos() {
    return {
       x: this.x + 5,
       y: this.y + 5,
       width: this.width,
       height: this.height
     }
   }

  render () {
    this.context.drawImage(this.resources.get(this.sprite), this.x, this.y);

    if (this.state.debug.showCollisionRect) {
      this._debugRenderCollisionRect();
    }
  }

  _debugRenderCollisionRect() {
    this.context.beginPath();
    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);
    this.context.lineWidth = 7;
    this.context.strokeStyle = 'yellow';
    this.context.stroke();
  }
}