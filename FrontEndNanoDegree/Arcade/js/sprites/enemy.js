import BaseSprite from "./base_sprite";

/**
 * Enemy Sprite
 */

export default class Enemy extends BaseSprite {
  constructor(pos, state) {
    super();

    this.state = state;
    this.pos = pos;
    this.init();
  }

  init() {
    this.context = this.state.game.engine.gameContext;
    this.resources = this.state.game.resources;

    this.sound = this.resources.get('sounds/mower.wav');
    this.sound.currentTime = 2;
    this.sound.volume = 0.25;

    this.width = 100;
    this.height = 70;
    this.speed = this.generateSpeed();

    this.sprite = this.resources.get('images/enemies/lawn-mower.png');
  }

  update (dt) {
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
    this.context.drawImage(this.sprite, this.pos.x, this.pos.y);

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
 