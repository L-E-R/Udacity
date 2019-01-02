/**
 * Collectible Sprite
 */

export default class Collectible {
  constructor(state) {
    this.state = state;

    this.context = this.state.engine.gameContext;
    this.resources = this.state.resources;

    this.x = 215;
    this.y = 80;
    this.width = 70;
    this.height = 70;

    this.sprite = 'images/jerry-can.png';

    this.collectibles = [
      {name: 'jerry', image: 'images/jerry-can.png', points: 10},
      {name: 'oil', image: 'images/jerry-can.png', points: 5},
      {name: 'spark', image: 'images/jerry-can.png', points: 15}
    ];

  }

  collisionPos() {
    return {
       x: this.x + 5,
       y: this.y + 5,
       width: this.width,
       height: this.height
     }
   }

   get value() {
     return this.collectibles[0].points;
   }

  render () {
    this.context.drawImage(this.resources.get(this.sprite), this.x, this.y);

    if (this.state.showCollisionRect) {
      this._debugRenderCollisionRect();
    }
  }

  _debugRenderCollisionRect() {
    this.context.beginPath();
    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);
    this.context.lineWidth = 7;
    this.context.strokeStyle = 'yellow';
    this.context.stroke();
  }

  update (dt) {

  }

  remove() {
    this.x = -10000;
    this.y = -10000;
  }

}