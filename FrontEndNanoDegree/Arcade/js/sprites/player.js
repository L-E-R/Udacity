/**
 * Player Sprite
 */

export default class Player {
  constructor(state) {
    this.state = state;

    this.context = this.state.engine.gameContext;
    this.resources = this.state.resources;

    this.x = 200;
    this.y = 350;
    this.width = 70;
    this.height = 70;

    this.image = 'images/char-boy.png';

    this.store = 0;

    this.init();
  }

  init() {
    this.sprite = new Image();
    this.sprite.src = this.image;
  }

  update (dt) {

  }

  get store() {
    return this._store;
  }

  set store(value) {
    this._store = value;
  }

  reset() {
    this.x = 200;
    this.y = 350;
  }

  collisionPos() {
   return {
      x: this.x + 15,
      y: this.y + 70,
      width: this.width,
      height: this.height
    }
  }

  render () {
    this.context.drawImage(this.sprite, this.x, this.y);

    if (this.state.showCollisionRect) {
      this._debugRenderCollisionRect();
    }
  }

  _debugRenderCollisionRect() {
    this.context.beginPath();
    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);
    this.context.lineWidth = 7;
    this.context.strokeStyle = 'red';
    this.context.stroke();
  }

  addToStore (item) {

  }

  handleInput (direction) {
    switch(direction) {
      case 'left': {
        if (this.x - 100 >= 0) {
          this.x -= 100;
        }
        break;
      };
      case 'right': {
        if (this.x + 100 < 500) {
          this.x += 100;
        }
        break;
      };
      case 'up': {
        if (this.y - 85 > 0) {
          this.y -= 85;
        }
        break;
      };
      case 'down': {
        if (this.y + 85 <= 500) {
          this.y += 85;
        }
        break;
      };
    }
  }
}