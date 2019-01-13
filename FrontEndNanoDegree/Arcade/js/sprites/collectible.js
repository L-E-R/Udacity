import BaseSprite from "./base_sprite";

/**
 * Collectible Sprite
 * 
 * Handles the random creation of collectible items and their location
 */

export default class Collectible extends BaseSprite {

  constructor() {
    super();
    this.init();
  }


  /* Getter & Setters */
  get item() {
    return this.currentCollectible;
  }

  get collisionPos() {
    return {
       x: this.x + 5,
       y: this.y + 5,
       width: this.width,
       height: this.height
     }
   }


  /* Initialize Class Variables */
  init() {
    this.sprites = [
      {sprite: this.resources.get('images/collectibles/jerry-can.png'), points: 10},
      {sprite: this.resources.get('images/collectibles/oil-can.png'), points: 5},
      {sprite: this.resources.get('images/collectibles/spark-plug.png'), points: 15}
    ];

    this.sound = this.resources.get('sounds/pickup.wav');

    this.x = 215;
    this.y = 80;
    this.width = 70;
    this.height = 70;

    this.currentCollectible;

    this.generateCollectible();
  }


  /* Render Sprite Object to the Canvas */
  render () {
    if (this.currentCollectible) {
      this.x = this.x === -10000 ? this.generateCollectibleLocation() : this.x;
      this.gameContext.drawImage(this.currentCollectible.sprite, this.x, this.y);
    }

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


  /* Remove Sprite from the Canvas */
   remove() {
    delete this.currentCollectible;
    if (this.status.playing) { this.sound.play(); };
    
    this.x = -10000;
  }


  /* Helper Methods */
  generateCollectible () {
    setTimeout(() =>  this.currentCollectible = this.generateCollectibleSprite(), 5000);;
    
    this.x = this.generateCollectibleLocation();
    this.y = 80;
  }

  generateCollectibleSprite() {
    const min = 0;
    const max = 2;

    const index =  Math.floor(Math.random() * (max - min + 1)) + min;

    let sprite = this.sprites[index];
    return sprite;
  }

  generateCollectibleLocation() {
    const min = 0;
    const max = 4;
    const locations = [5, 110, 215, 320, 425];

    const index =  Math.floor(Math.random() * (max - min + 1)) + min;

    return locations[index];
  }

}