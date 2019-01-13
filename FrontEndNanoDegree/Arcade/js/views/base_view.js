/**
 * Base View Class
 * 
 * A class that all sprite classes will extend from
 */

export default class BaseView {
  constructor() {

  }

  static set state(state){
    this._state = state;
  }

  static get state() {
    return this._state;
  }

  get status() {
    return BaseView._state.game.status;
  }
  
  get resources() {
    return BaseView._state.game.resources;
  }

  get options() {
    return BaseView._state.options;
  }

  get splashCanvas() {
    return BaseView._state.game.engine.splashCanvas;
  }

  get splashContext() {
    return BaseView._state.game.engine.splashContext;
  }

  get modalCanvas() {
    return BaseView._state.game.engine.modalCanvas;
  }

  get modalContext() {
    return BaseView._state.game.engine.modalContext;
  }

  get gameCanvas() {
    return BaseView._state.game.engine.gameCanvas;
  }

  get gameContext() {
    return BaseView._state.game.engine.gameContext;
  }

  /**
   * Insure subclassed objects implement the following methods when referenced
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

  close() {
    throw new Error('You have to implement the method close(), to handle the view not displaying');
  }

}