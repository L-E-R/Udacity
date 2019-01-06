/**
 * Collectible Sprite
 */

export default class Collectible {
  constructor(state) {
    this.state = state;

    this.init();
  }

  init() {
    this.context = this.state.engine.gameContext;
    this.resources = this.state.resources;

    this.x = 215;
    this.y = 80;
    this.width = 70;
    this.height = 70;

    this.currentCollectible;

    this.generateCollectible();
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
     return this.currentCollectible.points;
   }

  render () {
    if (this.currentCollectible) {
      this.context.drawImage(this.resources.get(this.currentCollectible.image), this.x, this.y);
    }

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

  generateCollectible () {
    this.currentCollectible = this.generateCollectibleSprite();
    
    this.x = this.generateCollectibleLocation();
    this.y = 80;
  }

  generateCollectibleSprite() {
    const min = 0;
    const max = 2;
    const sprites = [
      {name: 'jerry', image: 'images/collectibles/jerry-can.png', points: 10},
      {name: 'oil', image: 'images/collectibles/oil-can.png', points: 5},
      {name: 'spark', image: 'images/collectibles/spark-plug.png', points: 15}
    ];

    const index =  Math.floor(Math.random() * (max - min + 1)) + min;

    return sprites[index];
  }

  generateCollectibleLocation() {
    const min = 0;
    const max = 4;
    const locations = [5, 110, 215, 320, 425];

    const index =  Math.floor(Math.random() * (max - min + 1)) + min;

    return locations[index];
  }

  remove() {
    this.x = -10000;
    this.y = -10000;

    setTimeout(() => this.generateCollectible(), 5000);

  }

}