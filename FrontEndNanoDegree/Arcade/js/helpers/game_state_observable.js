import GameState from './game_state';

/**
 * Game State Observable
 * 
 * communicates when the game state changes
 */

export default class GameStateObservable {
  constructor(next, error, complete) {
    const state = new GameState();

    state.ondata = (e) => next(e);
    state.onerror = (err) => error(err);
    state.oncomplete = () => complete();

    return () => {
      state.destroy();
    };
  }
}