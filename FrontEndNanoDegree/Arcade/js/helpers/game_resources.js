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
      'images/board/stone-block.png',
      'images/board/water-block.png',
      'images/board/grass-block.png',
      'images/board/health.png',
      'images/board/toolbox.png',
      'images/board/splat.png',
      'images/buttons/easy.png',
      'images/buttons/hard.png',
      'images/buttons/medium.png',
      'images/characters/char-boy.png',
      'images/characters/char-cat-girl.png',
      'images/characters/char-horn-girl.png',
      'images/characters/char-pink-girl.png',
      'images/characters/char-princess-girl.png',
      'images/collectibles/jerry-can.png',
      'images/collectibles/oil-can.png',
      'images/collectibles/spark-plug.png',
      'images/enemies/lawn-mower.png',
      'images/splash/ler-logo.png',
      'images/splash/udacity-logo.png',
      'sounds/death.wav',
      'sounds/dropoff.wav',
      'sounds/mower.wav',
      'sounds/pickup.wav',
      'sounds/splashintro.wav',
      'sounds/step.wav'
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
      if (url.indexOf('images') !== -1) {
        var img = new Image();
        img.onload = () => {
          this.resourceCache[url] = img;
        }
        img.src = url;
      } else if (url.indexOf('sounds') !== -1) {
        var snd = new Audio(url);
        this.resourceCache[url] = snd;
      } else {
        this.resourceCache[url] = false;
      }

      if(this.isReady() && this.readyCallbacks[0] !== undefined) {
        this.readyCallbacks.forEach(func => func());
      }
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