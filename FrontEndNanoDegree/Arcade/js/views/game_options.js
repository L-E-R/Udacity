/**
 * Game Options View
 */

export default class GameOptions {
  constructor(state) {
    this.state = state;

    this.canvas = this.state.engine.modalCanvas;
    this.context = this.state.engine.modalContext;
  }

  render() {

  }
}