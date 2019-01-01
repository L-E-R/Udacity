/**
 * Game State
 * 
 * holds onto game state for objects and properties
 */

export default class GameState {
  constructor() {
    this._engine;
    this._resources;

    this._showCollisionRect = false;
  }

  get engine() {
    return this._engine;
  }

  set engine(engine) {
    if(engine) {
      this._engine = engine;
    }
  }

  get resources() {
    return this._resources;
  }

  set resources(resources) {
    if(resources) {
      this._resources = resources;
    }
  }

  
  get showCollisionRect() {
    return this._showCollisionRect;
  }

  set showCollisionRect(doShow) {
    if (doShow) {
      this._showCollisionRect = doShow;
    }
  }
  
}