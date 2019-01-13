import BaseSprite from "./base_sprite";

/**
 * Enemy Sprite
 * 
 * Handles the creation of enemies and their location as well as movement speed
 */

export default class Enemy extends BaseSprite {
  
  constructor(pos) {
    super();
    this.pos = pos;
    this.init();
  }

  /* Getter & Setters */
  get collisionPos() {
    return {
       x: this.pos.x + 40,
       y: this.pos.y + 40,
       width: this.width,
       height: this.height
     }
   }

  /* Initialize Class Variables */
  init() {
    this.sound = this.resources.get('sounds/mower.wav');
    this.sound.currentTime = 2;
    this.sound.volume = 0.25;

    this.width = 100;
    this.height = 70;
    this.speed = this.generateSpeed();

    this.sprite = this.resources.get('images/enemies/lawn-mower.png');
  }


  /* Render Sprite Object to the Canvas */
  render () {
    this.gameContext.drawImage(this.sprite, this.pos.x, this.pos.y);

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

  
  /* Update Sprite Object on the Canvas */
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


  /* Reset Sprite Position on Canvas */
  reset(pos) {
    this.stopSoundEffect();
    this.pos = pos;
  }


  /* Helper Methods */
  generateSpeed() {
    if (this.status.playing && !this.status.over) { this.sound.play(); };
    let speedDifficulty = 100 * this.options.enemyspeed;
    return Math.round((Math.floor(Math.random() * (3- 1 + 1)) + 1) * speedDifficulty);
  }

  stopSoundEffect() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }
}
 