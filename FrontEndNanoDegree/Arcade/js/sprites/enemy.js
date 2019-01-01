/**
 * Enemy Sprite
 */

export default class Enemy {
  constructor(pos, state) {
    this.state = state;

    this.context = this.state.engine.gameContext;
    this.resources = this.state.resources;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.pos = pos;
    this.width = 100;
    this.height = 70;
    this.speed = this.generateSpeed();

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/lawn-mower.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.pos.x = this.pos.x || 0;

    if (this.pos.x > 505) {
      // generate new speed
      this.speed = this.generateSpeed();
      // reset the position to the far left
      this.pos.x = -100;
    } else {
      this.pos.x = this.pos.x + this.speed * dt;
    }
    
  }

  getCollisionPOS() {
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

    if (this.state.showCollisionRect) {
      this._debugRenderCollisionRect();
    }
  }

  generateSpeed() {
    return Math.round((Math.floor(Math.random() * (3- 1 + 1)) + 1) * 100);
  }

  _debugRenderCollisionRect() {
    this.context.beginPath();
    this.context.rect(this.getCollisionPOS().x, this.getCollisionPOS().y, this.width, this.height);
    this.context.lineWidth = 7;
    this.context.strokeStyle = 'yellow';
    this.context.stroke();
  }
}
 