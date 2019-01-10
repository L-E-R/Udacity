import GameStateObservable from '../helpers/game_state_observable';

/**
 * Base View Class
 */

export default class BaseView {
  constructor() {

  }

  static updateChildren() {
    update();
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

  close() {
    throw new Error('You have to implement the method close(), to handle the view not displaying');
  }

}