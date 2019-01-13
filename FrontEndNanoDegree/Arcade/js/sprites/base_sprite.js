/**
 * Base Sprite Class
 * 
 * A class that all sprite classes will extend from
 */

export default class BaseSprite {

  constructor() {

  }

  static set state(state) {
    this._state = state;
  }

  static get state() {
    return this._state;
  }

  get status() {
    return BaseSprite._state.game.status;
  }
  
  get resources() {
    return BaseSprite._state.game.resources
  }

  get options() {
    return BaseSprite._state.options;
  }

  get gameCanvas() {
    return BaseSprite._state.game.engine.gameCanvas;
  }

  get gameContext() {
    return BaseSprite._state.game.engine.gameContext;
  }

  get debug() {
    return BaseSprite._state.debug;
  }


  /**
   * Insure subclassed objects implement the following methods
   * 
   * Pulled this pattern from the following resource
   * url : https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027
   */ 
  
  init() {
    throw new Error('You have to implement the method init(), to handle initial variable values');
  }

  update() {
    throw new Error('You have to implement the method update(), to handle any view udpates');
  }

  render() {
    throw new Error('You have to implement the method render(), to handle the view rendering');
  }

  clear() {
    throw new Error('You have to implement the method close(), to handle the view not displaying');
  }
}
