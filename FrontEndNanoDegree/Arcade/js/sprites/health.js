/**
 * Health Sprite
 */

export default class Health {
  constructor(state) {
    this.state = state;

    this.init();
  }

  init() {
    this.context = this.state.engine.gameContext;
    this.canvas = this.state.engine.gameCanvas;
    this.resources = this.state.resources;

    this.sprite = 'images/board/health.png';
    this._health = 3;
  }

  addHealth() {
    this._health++;
    this.render();
  }

  removeHealth() {
    this._health--;
    this.render();
  }

  get value() {
    return this._health;
  }

  render() {
    this.context.textAlign = "center";

    for(let i = 1, v = 10; i <= this.health; i++, v += 40) {
      this.context.drawImage(this.resources.get(this.sprite), v , 0);
    }
  }
}