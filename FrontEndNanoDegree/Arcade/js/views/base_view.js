import GameStateObservable from '../helpers/game_state_observable';

/**
 * Base View Class
 */

export default class BaseView {
  constructor() {
    // this.subscribe = new GameStateObservable(
    //   this.onNext.bind(this),
    //   (err) => console.error(err),
    //   () => console.log('complete')
    // );
  }


  // source from : https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027
  // onNext() {
  //   throw new Error('You have to implement the method onNext(state)');
  // }
}