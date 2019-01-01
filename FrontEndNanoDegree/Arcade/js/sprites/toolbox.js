/**
 * Toolbox Sprite
 */

export default class Toolbox {
  constructor(state) {
    this.state = state;

    this.context = this.state.engine.gameContext;
    this.resources = this.state.resources;

    this.x = 215;
    this.y = 500;
    this.width = 70;
    this.height = 70;

    this.sprite = 'images/toolbox.png';

  }

  getCollisionPOS() {
    return {
       x: this.x + 5,
       y: this.y + 0,
       width: this.width,
       height: this.height
     }
   }

  render () {
    this.context.drawImage(this.resources.get(this.sprite), this.x, this.y);

    if (this.state.showCollisionRect) {
      this._debugRenderCollisionRect();
    }
  }

  _debugRenderCollisionRect() {
    this.context.beginPath();
    this.context.rect(this.getCollisionPOS().x, this.getCollisionPOS().y, this.width, this.height);
    this.context.lineWidth = 7;
    this.context.strokeStyle = 'yellow';
    this.context.stroke();
  }

  update (dt) {

  }

}