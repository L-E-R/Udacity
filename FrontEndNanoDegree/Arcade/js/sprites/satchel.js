import BaseSprite from "./base_sprite";

/**
 * Satchel Sprite
 */

export default class Satchel extends BaseSprite {
  constructor(state) {
    super();

    this.state = state;
    this.init();
  }

  init() {
    this.context = this.state.game.engine.gameContext;
    this.resources = this.state.game.resources;

    this.x = 450;
    this.y = 15;
    this.width = 40;
    this.height = 40;
  }

  render () {

    this.context.fillRect(this.x, this.y, this.width, this.height);

    if (this._item) {
      this.context.drawImage(this._item.sprite, this.x, this.y, this._item.sprite.width * 0.5, this._item.sprite.height * 0.5);
    }
  }

  set item(item) {
    this._item = item;
  }

  get item() {
    return this._item;
  }

  removeItem() {
    delete this._item;
  }
}