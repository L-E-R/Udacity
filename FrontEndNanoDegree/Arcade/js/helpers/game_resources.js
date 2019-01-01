/**
 * Game Resources
 * 
 * Based of original project templates resource.js
 */

export default class GameResources {
  constructor(onReadyCallback) {
    this.resourceCache = {};
    this.readyCallbacks = [];
    this.readyCallbacks.push(onReadyCallback);
    
    this.init();
  }

  init() {
    this.load([
      'images/LER-logo.png',
      'images/udacity-logo.png',
      'images/stone-block.png',
      'images/water-block.png',
      'images/grass-block.png',
      'images/enemy-bug.png',
      'images/char-boy.png',
      'images/Heart.png',
      'images/lawn-mower.png',
      'images/toolbox.png',
      'images/jerry-can.png'
    ]);
  }

  load(urlOrArr) {
    if(urlOrArr instanceof Array) {
      urlOrArr.forEach(url => this._load(url));
    } else {
      this._load(urlOrArr);
    }
  }

  _load(url) {
    if(this.resourceCache[url]) {
      return this.resourceCache[url];
    } else {
      var img = new Image();
      img.onload = () => {
        this.resourceCache[url] = img;
        if(this.isReady()) {
          this.readyCallbacks.forEach(func => func());
        }
      };
      this.resourceCache[url] = false;
      img.src = url;
    }
  }

  get(url) {
    return this.resourceCache[url];
  }

  isReady() {
    let ready = true;
    for(let resource in this.resourceCache) {
      if(this.resourceCache.hasOwnProperty(resource) &&
          !this.resourceCache[resource]) {
            ready = false;
          }
    }
    return ready;
  }

  onReady(func) {
    this.readyCallbacks.push(func);
  }

}