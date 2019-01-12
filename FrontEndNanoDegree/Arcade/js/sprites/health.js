import BaseSprite from "./base_sprite";

/**
 * Health Sprite
 */

export default class Health extends BaseSprite{
  constructor(state) {
    super();

    this.state = state;
    this.init();
  }

  init() {
    this.context = this.state.game.engine.gameContext;
    this.canvas = this.state.game.engine.gameCanvas;
    this.resources = this.state.game.resources;

    this.sprite = this.resources.get('images/board/health.png');
    this._health = 3;

  }

  addHealth() {
    this._health++;
    this.render();
  }

  removeHealth() {
    this._health--;
    this.render();
  }

  get value() {
    return this._health;
  }

  render() {
    for(let i = 1, v = 10; i <= this._health; i++, v += 40) {
      this.context.drawImage(this.sprite, v , 0);
    }
  }

  reset() {
    this._health = 3;
  }
}