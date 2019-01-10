import BaseSprite from "./base_sprite";

/**
 * Player Sprite
 */

export default class Player extends BaseSprite{
  constructor(state) {
    super();

    this.state = state;
    this.walkingSound = new Audio('sounds/step.wav');
    this.deathSound = new Audio('sounds/death.wav');

    this.init();
  }

  init() {
    this.context = this.state.game.engine.gameContext;
    this.resources = this.state.game.resources;

    this.x = 200;
    this.y = 425;
    this.width = 70;
    this.height = 70;

    this.sprite = new Image();
    this.sprite.src = this.state.options.character;
  }

  reset() {
    delete this.isDead;
    this.sprite.src = this.state.options.character;
    this.x = 200;
    this.y = 425;
  }

  death() {
    this.isDead = true;
    this.deathSound.play();
    this.y += 85;
    this.sprite.src = "images/board/splat.png";
    if (!this.state.game.status.over) {
      setTimeout(() => this.reset(), 3000);
    }
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

    if (this.state.debug.showCollisionRect) {
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

  handleInput (direction) {
    if (!this.isDead) {
      this.walkingSound.currentTime = 0;
      switch(direction) {
        case 'left': {
          if (this.x - 100 >= 0) {
            this.walkingSound.play();
            this.x -= 100;
          }
          break;
        };
        case 'right': {
          if (this.x + 100 < 500) {
            this.walkingSound.play();
            this.x += 100;
          }
          break;
        };
        case 'up': {
          if (this.y - 85 >= 0) {
            this.walkingSound.play();
            this.y -= 85;
          }
          break;
        };
        case 'down': {
          if (this.y + 85 <= 500) {
            this.walkingSound.play();
            this.y += 85;
          }
          break;
        };
      }
    }
  }
}