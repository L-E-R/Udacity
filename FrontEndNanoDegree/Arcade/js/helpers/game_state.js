import GameEngine from './game_engine';
import GameResources from './game_resources';

/**
 * Game State
 * 
 * holds onto game state for objects and properties
 */

export default class GameState {
  constructor() {
    this.engine = new GameEngine();
    this.resource = new GameResources();

    this._state = {
      options: {
        character: 'images/characters/char-pink-girl.png',
        level: ''
      },
      game: {
        engine: this.engine,
        resources: this.resource,
        status: {
          initializing: true,
          playing: false,
          paused: false,
          over: false
        }
      },
      debug: {
        showCollisionRect: false
      }
    }

    this._id = setInterval(() => this.emit(this._state), 200);
  }

  emit(newState) {
    if (this.ondata) {
      this.ondata(newState);
    }
  }

  destroy() {
    clearInterval(this._id);
  }
}
