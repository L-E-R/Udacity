/**
 * Health Sprite
 */

export default class Health {
  constructor(state) {
    this.state = state;

    this.context = this.state.engine.gameContext;
    this.canvas = this.state.engine.gameCanvas;
    this.resources = this.state.resources;

    this.sprite = 'images/Heart.png';
    this.health = 3;
  }

  addHealth() {
    this.health++;
    this.render();
  }

  removeHealth() {
    this.health--;
    this.render();
  }

  render() {
    this.context.textAlign = "center";

    for(let i = 1, v = 10; i <= this.health; i++, v += 40) {
      this.context.drawImage(this.resources.get(this.sprite), v , 10);
    }
  }
}