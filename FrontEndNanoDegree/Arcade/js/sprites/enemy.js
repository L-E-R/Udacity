import BaseSprite from "./base_sprite";

/**
 * Enemy Sprite
 */

export default class Enemy extends BaseSprite {
  constructor(pos, state) {
    super();

    this.state = state;
    this.pos = pos;
    this.sound = new Audio('sounds/mower.wav');
    this.sound.volume = 0.25;
    this.init();
  }

  init() {
    this.context = this.state.game.engine.gameContext;
    this.resources = this.state.game.resources;
    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.width = 100;
    this.height = 70;
    this.speed = this.generateSpeed();

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemies/lawn-mower.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.pos.x = this.pos.x || 0;

    if (this.pos.x > 505) {
      this.sound.pause();
      this.sound.currentTime = 0;
      // generate new speed
      this.speed = this.generateSpeed();
      // reset the position to the far left
      this.pos.x = -100;
    } else {
      this.pos.x = this.pos.x + this.speed * dt;
    }
  }

  collisionPos() {
    return {
       x: this.pos.x + 40,
       y: this.pos.y + 40,
       width: this.width,
       height: this.height
     }
   }

  // Draw the enemy on the screen, required method for game
  render () {
    this.context.drawImage(this.resources.get(this.sprite), this.pos.x, this.pos.y);

    if (this.state.debug.showCollisionRect) {
      this._debugRenderCollisionRect();
    }
  }

  generateSpeed() {
    if (this.state.game.status.playing && !this.state.game.status.over) { this.sound.play(); };
    let speedDifficulty = 100 * this.state.options.enemyspeed;
    return Math.round((Math.floor(Math.random() * (3- 1 + 1)) + 1) * speedDifficulty);
  }

  _debugRenderCollisionRect() {
    this.context.beginPath();
    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);
    this.context.lineWidth = 7;
    this.context.strokeStyle = 'yellow';
    this.context.stroke();
  }

  reset(pos) {
    this.stopSoundEffect();
    this.pos = pos;
  }

  stopSoundEffect() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }
}
 