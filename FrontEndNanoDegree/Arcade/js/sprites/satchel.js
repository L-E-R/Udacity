import BaseSprite from "./base_sprite";

/**
 * Satchel Sprite
 */

export default class Satchel extends BaseSprite {
  
  constructor(state) {
    super();
    this.init();
  }

  
  /* Getter & Setters */
  set item(item) {
    this._item = item;
  }

  get item() {
    return this._item;
  }


  /* Initialize Class Variables */
  init() {
    this.x = 450;
    this.y = 15;
    this.width = 40;
    this.height = 40;
  }


  /* Render Sprite Object to the Canvas */
  render () {
    this.gameContext.fillRect(this.x, this.y, this.width, this.height);

    if (this._item) {
      this.gameContext.drawImage(this._item.sprite, this.x, this.y, this._item.sprite.width * 0.5, this._item.sprite.height * 0.5);
    }
  }


  /* Remove Sprite from the Canvas */
  removeItem() {
    delete this._item;
  }
}