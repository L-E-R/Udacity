/**
 * Game Engine
 * 
 */
const CANVAS_WIDTH = 505;
const CANVAS_HEIGHT = 620;

export default class GameEngine {
  constructor() {
    this._doc = document;

    this._canvasSplash = this._doc.createElement('canvas');
    this._canvasModal = this._doc.createElement('canvas');
    this._canvasGame = this._doc.createElement('canvas');

    this._contextSplash = this._canvasSplash.getContext('2d');
    this._contextModal = this._canvasModal.getContext('2d');
    this._contextGame = this._canvasGame.getContext('2d');

    this._lastTime;

    this.init();
  }

  init() {
    this._canvasSplash.width = this._canvasModal.width = this._canvasGame.width = CANVAS_WIDTH;
    this._canvasSplash.height = this._canvasModal.height = this._canvasGame.height = CANVAS_HEIGHT;

    this._canvasSplash.setAttribute('id', 'splash');
    this._doc.body.appendChild(this._canvasSplash);

    this._canvasModal.setAttribute('id', 'modal');
    this._doc.body.appendChild(this._canvasModal);

    this._canvasGame.setAttribute('id', 'game');
    this._doc.body.appendChild(this._canvasGame);

  }

get splashContext() {
    return this._contextSplash;
  }

  get splashCanvas() {
    return this._canvasSplash;
  }


  get modalContext() {
    return this._contextModal;
  }

  get modalCanvas() {
    return this._canvasModal;
  }

  get gameContext() {
    return this._contextGame;
  }

  get gameCanvas() {
    return this._canvasGame;
  }



  start(callback) {
    this.updateCallback = callback;
    this.loop();
  }

  stop() {
    cancelAnimationFrame(this.animationID);
  }

  loop() {
    let now = Date.now();
    let dt = (now - this._lastTime) / 1000.0;

    this._contextGame.clearRect(0, 0, this._canvasGame.width, this._canvasGame.height);

    this.update(dt);
    
    this._lastTime = now;

    this.animationID = requestAnimationFrame(this.loop.bind(this));
  }

  update(dt) {
    this.updateCallback(dt);
  }

}