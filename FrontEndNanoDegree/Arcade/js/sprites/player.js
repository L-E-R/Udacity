import BaseSprite from "./base_sprite";

/**
 * Player Sprite
 */

export default class Player extends BaseSprite {

  constructor() {
    super();
    this.init();
  }


  /* Getter & Setters */
  get collisionPos() {
    return {
      x: this.x + 15,
      y: this.y + 70,
      width: this.width,
      height: this.height
    }
  }


  /* Initialize Class Variables */
  init() {
    this.walkingSound = this.resources.get('sounds/step.wav');
    this.deathSound = this.resources.get('sounds/death.wav');

    this.x = 200;
    this.y = 425;
    this.width = 70;
    this.height = 70;

    this.sprite = this.resources.get(this.options.character);
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
    this.gameContext.strokeStyle = 'red';
    this.gameContext.stroke();
  }

  
  /* Render Sprite in Death State before Reset */
  death() {
    this.isDead = true;
    this.deathSound.play();
    this.y += 85;
    this.sprite.src = "images/board/splat.png";
    if (!this.status.over) {
      setTimeout(() => this.reset(), 3000);
    }
  }


  /* Reset Sprite Position on Canvas */
  reset() {
    delete this.isDead;
    this.sprite.src = this.options.character;
    this.x = 200;
    this.y = 425;
  }


  /* Handle Keyboard Input for the Sprite */
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