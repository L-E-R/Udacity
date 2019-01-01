/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_game_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/game_state */ \"./js/helpers/game_state.js\");\n/* harmony import */ var _helpers_game_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/game_engine */ \"./js/helpers/game_engine.js\");\n/* harmony import */ var _helpers_game_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/game_resources */ \"./js/helpers/game_resources.js\");\n/* harmony import */ var _views_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/splash_screen */ \"./js/views/splash_screen.js\");\n/* harmony import */ var _views_game_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/game_menu */ \"./js/views/game_menu.js\");\n/* harmony import */ var _views_game_help__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/game_help */ \"./js/views/game_help.js\");\n/* harmony import */ var _views_game_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/game_options */ \"./js/views/game_options.js\");\n/* harmony import */ var _views_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/game */ \"./js/views/game.js\");\n/* harmony import */ var _views_game_pause__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/game_pause */ \"./js/views/game_pause.js\");\n/* harmony import */ var _views_game_over__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/game_over */ \"./js/views/game_over.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet App = (function () {\n  let state = new _helpers_game_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  state.engine = new _helpers_game_engine__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  state.resources = new _helpers_game_resources__WEBPACK_IMPORTED_MODULE_2__[\"default\"](splashAnimation);\n \n  // debug statement to show collision rect on sprite objects\n  state.showCollisionRect = true;\n\n\n  const splash = new _views_splash_screen__WEBPACK_IMPORTED_MODULE_3__[\"default\"](state);\n\n  const menu = new _views_game_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"](state);\n  const help = new _views_game_help__WEBPACK_IMPORTED_MODULE_5__[\"default\"](state);\n  const options = new _views_game_options__WEBPACK_IMPORTED_MODULE_6__[\"default\"](state);\n\n  const game = new _views_game__WEBPACK_IMPORTED_MODULE_7__[\"default\"](state);\n  const pause = new _views_game_pause__WEBPACK_IMPORTED_MODULE_8__[\"default\"](state);\n  const over = new _views_game_over__WEBPACK_IMPORTED_MODULE_9__[\"default\"](state);\n\n  const app = {\n    initializing: true,\n    playing: false,\n    paused: false,\n    over: false\n  }\n\n\n\n  function splashAnimation() {\n    splash.animation().then(displayMenu);\n  } \n\n  function displayMenu() {\n    app.initializing = false;\n    menu.render();\n  }\n\n  document.addEventListener('keyup', e => {\n    if (!app.initializing) {\n      var allowedKeys = {\n          13: 'enter',\n          27: 'esc',\n          72: 'h',\n          79: 'o'\n      };\n\n      switch (allowedKeys[e.keyCode]) {\n        case 'enter': {\n          if (!app.playing) {\n            menu.close();\n            app.playing = true;\n            game.start();\n          } else if (app.playing && app.paused) {\n            app.paused = false;\n            pause.clear();\n            game.resume();\n          }\n          break;\n        }\n        case 'esc': {\n          if (app.playing && !app.paused) {\n            app.paused = true;\n            game.pause();\n            pause.render();\n          } else if (app.playing && app.paused) {\n            app.playing = false;\n            app.paused = false;\n            menu.render();\n            game.stop();\n            pause.clear();\n          }\n           break;\n        }\n        case 'h': {\n          if(!app.playing && !app.paused) {\n            help.render();\n          }\n          break;\n        }\n        case 'o': {\n          if(!app.playing && !app.paused) {\n            options.render();\n          }\n          break;\n        }\n      }\n    }\n  });\n\n})(undefined);\n\n\n// Now instantiate your objects.\n// Place all enemy objects in an array called allEnemies\n// Place the player object in a variable called player\n\n// enemy1 = new Enemy({x:0, y:125});\n// enemy2 = new Enemy({x:0, y:210});\n// enemy3 = new Enemy({x:0, y:295});\n// allEnemies = [enemy1, enemy2, enemy3];\n\n// player = new Player();\n\n\n// app listens for key presses and sends the keys to your\n// Player.handleInput() method. You don't need to modify app.\n// document.addEventListener('keyup', function(e) {\n\n//     var allowedKeys = {\n//         37: 'left',\n//         38: 'up',\n//         39: 'right',\n//         40: 'down'\n//     };\n\n//     player.handleInput(allowedKeys[e.keyCode]);\n// });\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/helpers/game_engine.js":
/*!***********************************!*\
  !*** ./js/helpers/game_engine.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameEngine; });\n/**\n * Game Engine\n * \n */\nconst CANVAS_WIDTH = 505;\nconst CANVAS_HEIGHT = 620;\n\nclass GameEngine {\n  constructor() {\n    this._doc = document;\n\n    this._canvasSplash = this._doc.createElement('canvas');\n    this._canvasModal = this._doc.createElement('canvas');\n    this._canvasGame = this._doc.createElement('canvas');\n\n    this._contextSplash = this._canvasSplash.getContext('2d');\n    this._contextModal = this._canvasModal.getContext('2d');\n    this._contextGame = this._canvasGame.getContext('2d');\n\n    this._lastTime;\n\n    this.init();\n  }\n\n  init() {\n    this._canvasSplash.width = this._canvasModal.width = this._canvasGame.width = CANVAS_WIDTH;\n    this._canvasSplash.height = this._canvasModal.height = this._canvasGame.height = CANVAS_HEIGHT;\n\n    this._canvasSplash.setAttribute('id', 'splash');\n    this._doc.body.appendChild(this._canvasSplash);\n\n    this._canvasModal.setAttribute('id', 'modal');\n    this._doc.body.appendChild(this._canvasModal);\n\n    this._canvasGame.setAttribute('id', 'game');\n    this._doc.body.appendChild(this._canvasGame);\n\n  }\n\nget splashContext() {\n    return this._contextSplash;\n  }\n\n  get splashCanvas() {\n    return this._canvasSplash;\n  }\n\n\n  get modalContext() {\n    return this._contextModal;\n  }\n\n  get modalCanvas() {\n    return this._canvasModal;\n  }\n\n  get gameContext() {\n    return this._contextGame;\n  }\n\n  get gameCanvas() {\n    return this._canvasGame;\n  }\n\n\n\n  start(callback) {\n    this.updateCallback = callback;\n    this.loop();\n  }\n\n  stop() {\n    cancelAnimationFrame(this.animationID);\n  }\n\n  loop() {\n    let now = Date.now();\n    let dt = (now - this._lastTime) / 1000.0;\n\n    this._contextGame.clearRect(0, 0, this._canvasGame.width, this._canvasGame.height);\n\n    this.update(dt);\n    \n    this._lastTime = now;\n\n    this.animationID = requestAnimationFrame(this.loop.bind(this));\n  }\n\n  update(dt) {\n    this.updateCallback(dt);\n  }\n\n}\n\n//# sourceURL=webpack:///./js/helpers/game_engine.js?");

/***/ }),

/***/ "./js/helpers/game_resources.js":
/*!**************************************!*\
  !*** ./js/helpers/game_resources.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameResources; });\n/**\n * Game Resources\n * \n * Based of original project templates resource.js\n */\n\nclass GameResources {\n  constructor(onReadyCallback) {\n    this.resourceCache = {};\n    this.readyCallbacks = [];\n    this.readyCallbacks.push(onReadyCallback);\n    \n    this.init();\n  }\n\n  init() {\n    this.load([\n      'images/LER-logo.png',\n      'images/udacity-logo.png',\n      'images/stone-block.png',\n      'images/water-block.png',\n      'images/grass-block.png',\n      'images/enemy-bug.png',\n      'images/char-boy.png',\n      'images/Heart.png',\n      'images/lawn-mower.png',\n      'images/toolbox.png',\n      'images/jerry-can.png'\n    ]);\n  }\n\n  load(urlOrArr) {\n    if(urlOrArr instanceof Array) {\n      urlOrArr.forEach(url => this._load(url));\n    } else {\n      this._load(urlOrArr);\n    }\n  }\n\n  _load(url) {\n    if(this.resourceCache[url]) {\n      return this.resourceCache[url];\n    } else {\n      var img = new Image();\n      img.onload = () => {\n        this.resourceCache[url] = img;\n        if(this.isReady()) {\n          this.readyCallbacks.forEach(func => func());\n        }\n      };\n      this.resourceCache[url] = false;\n      img.src = url;\n    }\n  }\n\n  get(url) {\n    return this.resourceCache[url];\n  }\n\n  isReady() {\n    let ready = true;\n    for(let resource in this.resourceCache) {\n      if(this.resourceCache.hasOwnProperty(resource) &&\n          !this.resourceCache[resource]) {\n            ready = false;\n          }\n    }\n    return ready;\n  }\n\n  onReady(func) {\n    this.readyCallbacks.push(func);\n  }\n\n}\n\n//# sourceURL=webpack:///./js/helpers/game_resources.js?");

/***/ }),

/***/ "./js/helpers/game_state.js":
/*!**********************************!*\
  !*** ./js/helpers/game_state.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameState; });\n/**\n * Game State\n * \n * holds onto game state for objects and properties\n */\n\nclass GameState {\n  constructor() {\n    this._engine;\n    this._resources;\n\n    this._showCollisionRect = false;\n  }\n\n  get engine() {\n    return this._engine;\n  }\n\n  set engine(engine) {\n    if(engine) {\n      this._engine = engine;\n    }\n  }\n\n  get resources() {\n    return this._resources;\n  }\n\n  set resources(resources) {\n    if(resources) {\n      this._resources = resources;\n    }\n  }\n\n  \n  get showCollisionRect() {\n    return this._showCollisionRect;\n  }\n\n  set showCollisionRect(doShow) {\n    if (doShow) {\n      this._showCollisionRect = doShow;\n    }\n  }\n  \n}\n\n//# sourceURL=webpack:///./js/helpers/game_state.js?");

/***/ }),

/***/ "./js/sprites/collectible.js":
/*!***********************************!*\
  !*** ./js/sprites/collectible.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Collectible; });\n/**\n * Collectible Sprite\n */\n\nclass Collectible {\n  constructor(state) {\n    this.state = state;\n\n    this.context = this.state.engine.gameContext;\n    this.resources = this.state.resources;\n\n    this.x = 215;\n    this.y = 80;\n    this.width = 70;\n    this.height = 70;\n\n    this.sprite = 'images/jerry-can.png';\n\n  }\n\n  getCollisionPOS() {\n    return {\n       x: this.x + 10,\n       y: this.y + 40,\n       width: this.width,\n       height: this.height\n     }\n   }\n\n  render () {\n    this.context.drawImage(this.resources.get(this.sprite), this.x, this.y);\n\n    if (this.state.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.getCollisionPOS().x, this.getCollisionPOS().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'yellow';\n    this.context.stroke();\n  }\n\n  update (dt) {\n\n  }\n\n}\n\n//# sourceURL=webpack:///./js/sprites/collectible.js?");

/***/ }),

/***/ "./js/sprites/enemy.js":
/*!*****************************!*\
  !*** ./js/sprites/enemy.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/**\n * Enemy Sprite\n */\n\nclass Enemy {\n  constructor(pos, state) {\n    this.state = state;\n\n    this.context = this.state.engine.gameContext;\n    this.resources = this.state.resources;\n\n    // Variables applied to each of our instances go here,\n    // we've provided one for you to get started\n    this.pos = pos;\n    this.width = 100;\n    this.height = 70;\n    this.speed = this.generateSpeed();\n\n    // The image/sprite for our enemies, this uses\n    // a helper we've provided to easily load images\n    this.sprite = 'images/lawn-mower.png';\n  }\n\n  // Update the enemy's position, required method for game\n  // Parameter: dt, a time delta between ticks\n  update (dt) {\n    // You should multiply any movement by the dt parameter\n    // which will ensure the game runs at the same speed for\n    // all computers.\n    \n    this.pos.x = this.pos.x || 0;\n\n    if (this.pos.x > 505) {\n      // generate new speed\n      this.speed = this.generateSpeed();\n      // reset the position to the far left\n      this.pos.x = -100;\n    } else {\n      this.pos.x = this.pos.x + this.speed * dt;\n    }\n    \n  }\n\n  getCollisionPOS() {\n    return {\n       x: this.pos.x + 40,\n       y: this.pos.y + 40,\n       width: this.width,\n       height: this.height\n     }\n   }\n\n  // Draw the enemy on the screen, required method for game\n  render () {\n    this.context.drawImage(this.resources.get(this.sprite), this.pos.x, this.pos.y);\n\n    if (this.state.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  generateSpeed() {\n    return Math.round((Math.floor(Math.random() * (3- 1 + 1)) + 1) * 100);\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.getCollisionPOS().x, this.getCollisionPOS().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'yellow';\n    this.context.stroke();\n  }\n}\n \n\n//# sourceURL=webpack:///./js/sprites/enemy.js?");

/***/ }),

/***/ "./js/sprites/health.js":
/*!******************************!*\
  !*** ./js/sprites/health.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Health; });\n/**\n * Health Sprite\n */\n\nclass Health {\n  constructor(state) {\n    this.state = state;\n\n    this.context = this.state.engine.gameContext;\n    this.canvas = this.state.engine.gameCanvas;\n    this.resources = this.state.resources;\n\n    this.sprite = 'images/Heart.png';\n    this.health = 3;\n  }\n\n  addHealth() {\n    this.health++;\n    this.render();\n  }\n\n  removeHealth() {\n    this.health--;\n    this.render();\n  }\n\n  render() {\n    this.context.textAlign = \"center\";\n\n    for(let i = 1, v = 10; i <= this.health; i++, v += 40) {\n      this.context.drawImage(this.resources.get(this.sprite), v , 10);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/health.js?");

/***/ }),

/***/ "./js/sprites/player.js":
/*!******************************!*\
  !*** ./js/sprites/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/**\n * Player Sprite\n */\n\nclass Player {\n  constructor(state) {\n    this.state = state;\n\n    this.context = this.state.engine.gameContext;\n    this.resources = this.state.resources;\n\n    this.x = 200;\n    this.y = 350;\n    this.width = 70;\n    this.height = 70;\n\n    this.image = 'images/char-boy.png';\n\n    this.item = [];\n\n    this.init();\n  }\n\n  init() {\n    this.sprite = new Image();\n    this.sprite.src = this.image;\n  }\n\n  update (dt) {\n\n  }\n\n  reset() {\n    this.x = 200;\n    this.y = 350;\n  }\n\n  getCollisionPOS() {\n   return {\n      x: this.x + 15,\n      y: this.y + 70,\n      width: this.width,\n      height: this.height\n    }\n  }\n\n  render () {\n    this.context.drawImage(this.sprite, this.x, this.y);\n\n    if (this.state.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.getCollisionPOS().x, this.getCollisionPOS().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'red';\n    this.context.stroke();\n  }\n\n  addToStore (item) {\n\n  }\n\n  handleInput (direction) {\n    switch(direction) {\n      case 'left': {\n        if (this.x - 100 >= 0) {\n          this.x -= 100;\n        }\n        break;\n      };\n      case 'right': {\n        if (this.x + 100 < 500) {\n          this.x += 100;\n        }\n        break;\n      };\n      case 'up': {\n        if (this.y - 85 > 0) {\n          this.y -= 85;\n        }\n        break;\n      };\n      case 'down': {\n        if (this.y + 85 <= 500) {\n          this.y += 85;\n        }\n        break;\n      };\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/player.js?");

/***/ }),

/***/ "./js/sprites/score.js":
/*!*****************************!*\
  !*** ./js/sprites/score.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\n/**\n * Score Sprite\n */\n\nclass Score {\n  constructor(state) {\n    this.state = state;\n\n    this.context = this.state.engine.gameContext;\n    this.canvas = this.state.engine.gameCanvas;\n    this.resources = this.state.resources;\n\n    this.score = 0\n  }\n\n  addPoints(points) {\n    this.score += points;\n    this.render();\n  }\n\n  removePoints(points) {\n    this.score -= points;\n    this.render();\n  }\n\n  render() {\n    this.context.textAlign = \"center\";\n\n    this.context.font = \"38px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n\n    this.context.fillText(this.score, this.canvas.width/2, 40);\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/score.js?");

/***/ }),

/***/ "./js/sprites/toolbox.js":
/*!*******************************!*\
  !*** ./js/sprites/toolbox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toolbox; });\n/**\n * Toolbox Sprite\n */\n\nclass Toolbox {\n  constructor(state) {\n    this.state = state;\n\n    this.context = this.state.engine.gameContext;\n    this.resources = this.state.resources;\n\n    this.x = 215;\n    this.y = 500;\n    this.width = 70;\n    this.height = 70;\n\n    this.sprite = 'images/toolbox.png';\n\n  }\n\n  getCollisionPOS() {\n    return {\n       x: this.x + 10,\n       y: this.y + 40,\n       width: this.width,\n       height: this.height\n     }\n   }\n\n  render () {\n    this.context.drawImage(this.resources.get(this.sprite), this.x, this.y);\n\n    if (this.state.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.getCollisionPOS().x, this.getCollisionPOS().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'yellow';\n    this.context.stroke();\n  }\n\n  update (dt) {\n\n  }\n\n}\n\n//# sourceURL=webpack:///./js/sprites/toolbox.js?");

/***/ }),

/***/ "./js/views/game.js":
/*!**************************!*\
  !*** ./js/views/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_board */ \"./js/views/game_board.js\");\n/* harmony import */ var _sprites_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/player */ \"./js/sprites/player.js\");\n/* harmony import */ var _sprites_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/enemy */ \"./js/sprites/enemy.js\");\n/* harmony import */ var _sprites_toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/toolbox */ \"./js/sprites/toolbox.js\");\n/* harmony import */ var _sprites_collectible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/collectible */ \"./js/sprites/collectible.js\");\n/* harmony import */ var _sprites_health__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprites/health */ \"./js/sprites/health.js\");\n/* harmony import */ var _sprites_score__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sprites/score */ \"./js/sprites/score.js\");\n\n\n\n\n\n\n\n\n\n\n/**\n * Game View\n */\n\nclass Game {\n  constructor(state) {\n    this.state = state;\n    this.engine = this.state.engine;\n    this.context = this.state.gameContext;\n    this.canvas = this.state.gameCanvas;\n\n    this.board = new _game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.state);\n    this.score = new _sprites_score__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.state);\n    this.health = new _sprites_health__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.state);\n    this.toolbox = new _sprites_toolbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.state);\n    this.player = new _sprites_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.state);\n    this.collectible = new _sprites_collectible__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.state);\n    this.enemies = [];\n\n    this.paused = false;\n\n    this.init();\n  }\n\n  init() {\n    this.createEnemies();\n    this.setupKeyboardListener()\n  }\n\n  pause() {\n    this.paused = true;\n  }\n\n  resume() {\n    this.paused = false;\n  }\n\n  start() {\n    this.engine.start(this.update.bind(this));\n  }\n\n  stop() {\n    this.paused = false;\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.engine.stop();\n  }\n\n  render() {\n    this.board.render();\n    this.score.render();\n    this.health.render();\n\n    this.toolbox.render();\n    this.collectible.render();\n\n    this.player.render();\n\n    this.enemies.forEach(enemy => enemy.render()); \n\n    \n  }\n\n  update(dt) {\n    if (!this.paused) {\n      this.enemies.forEach(enemy => {\n        enemy.update(dt)\n      });\n    }\n      this.render();\n      this.detect();\n  }\n\n  detect() {\n\n    // enemy collision\n    this.enemies.forEach(enemy => {\n      if (this.collides(this.player.getCollisionPOS(), enemy.getCollisionPOS())) {\n        this.health.removeHealth();\n        this.player.reset();\n      }\n    })\n\n  }\n\n  collides(a, b) {\n    return a.x < b.x + b.width &&\n           a.x + a.width > b.x &&\n           a.y < b.y + b.height &&\n           a.y + a.height > b.y;\n  }\n\n  _getDistance(x1, y1, x2, y2) {\n    let xDistance = x2 - x1;\n    let yDistance = y2 - y1;\n\n    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));\n  }\n\n\n  createEnemies(number = 3) {\n    const row = [\n      {x:0, y:125},\n      {x:0, y:210},\n      {x:0, y:295}\n    ]\n\n    for(let i = 0; i < number; i++) {\n      this.enemies.push(new _sprites_enemy__WEBPACK_IMPORTED_MODULE_2__[\"default\"](row[i], this.state));\n    }\n  }\n\n  setupKeyboardListener() {\n    document.addEventListener('keyup', e => {\n\n      var allowedKeys = {\n        37: 'left',\n        38: 'up',\n        39: 'right',\n        40: 'down',\n      };\n  \n      switch (allowedKeys[e.keyCode]) {\n        case 'left':\n        case 'up':\n        case 'right':\n        case 'down': {\n          if(!this.paused) {\n            this.score.addPoints(10);\n            this.player.handleInput(allowedKeys[e.keyCode]);\n          }\n          break;\n        }\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game.js?");

/***/ }),

/***/ "./js/views/game_board.js":
/*!********************************!*\
  !*** ./js/views/game_board.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameBoard; });\n/**\n * Game Board View\n */\n\nclass GameBoard {\n  constructor(state) {\n    this.state = state;\n\n    this.canvas = this.state.engine.gameCanvas;\n    this.context = this.state.engine.gameContext;\n    this.resources = this.state.resources;\n  }\n\n  render() {\n    var rowImages = [\n      'images/water-block.png',   // Top row is water\n      'images/stone-block.png',   // Row 1 of 1 of stone\n      'images/grass-block.png',   // Row 1 of 3 of grass\n      'images/grass-block.png',   // Row 2 of 3 of grass\n      'images/grass-block.png',   // Row 3 of 3 of grass\n      'images/stone-block.png',   // Row 1 of 2 of stone\n      'images/stone-block.png'    // Row 2 of 2 of stone\n\n    ],\n      numRows = 7,\n      numCols = 5,\n      row, col;\n\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    for (row = 0; row < numRows; row++) {\n      for (col = 0; col < numCols; col++) {\n        this.context.drawImage(this.resources.get(rowImages[row]), col * 101, row * 83 - 50);\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_board.js?");

/***/ }),

/***/ "./js/views/game_help.js":
/*!*******************************!*\
  !*** ./js/views/game_help.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameHelp; });\n/**\n * Game Help View\n */\n\nclass GameHelp {\n  constructor(state) {\n    this.state = state;\n\n    this.canvas = this.state.engine.modalCanvas;\n    this.context = this.state.engine.modalContext;\n  }\n\n  render() {\n\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_help.js?");

/***/ }),

/***/ "./js/views/game_menu.js":
/*!*******************************!*\
  !*** ./js/views/game_menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameMenu; });\n/**\n * Game Menu View\n */\n\nclass GameMenu {\n  constructor(state) {\n    this.state = state;\n\n    this.canvas = this.state.engine.modalCanvas;\n    this.context = this.state.engine.modalContext;\n    this.resources = this.state.resources;\n  }\n\n  render() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.fillStyle = \"black\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.drawImage(this.resources.get('images/lawn-mower.png'), this.canvas.width/2 - 85, this.canvas.height/2 - 200);\n\n\n    this.context.font = \"50px IMPACT\";\n    this.context.textAlign = \"center\";\n\n    this.context.fillStyle = \"#19A329\"\n    this.context.fillText(\"Mo-Crossing\", this.canvas.width/2, this.canvas.height/2);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n\n    this.context.fillText(\"Press Enter To Start\", this.canvas.width/2, this.canvas.height/2 + 75);\n\n    this.context.fillStyle = \"#99bd98\";\n    this.context.fillText(\"Press H For How To Play \", this.canvas.width/2, this.canvas.height/2 + 150);\n    this.context.fillText(\"Press O For Game Options\", this.canvas.width/2, this.canvas.height/2 + 200);\n  }\n\n  close() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_menu.js?");

/***/ }),

/***/ "./js/views/game_options.js":
/*!**********************************!*\
  !*** ./js/views/game_options.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameOptions; });\n/**\n * Game Options View\n */\n\nclass GameOptions {\n  constructor(state) {\n    this.state = state;\n\n    this.canvas = this.state.engine.modalCanvas;\n    this.context = this.state.engine.modalContext;\n  }\n\n  render() {\n\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_options.js?");

/***/ }),

/***/ "./js/views/game_over.js":
/*!*******************************!*\
  !*** ./js/views/game_over.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameOver; });\n/**\n * Game Over View\n */\n\nclass GameOver {\n  constructor(state) {\n    this.state = state;\n\n    this.canvas = this.state.engine.modalCanvas;\n    this.context = this.state.engine.modalContext;\n  }\n\n  render() {\n    \n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_over.js?");

/***/ }),

/***/ "./js/views/game_pause.js":
/*!********************************!*\
  !*** ./js/views/game_pause.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GamePause; });\n/**\n * Game Pause View\n */\n\nclass GamePause {\n  constructor(state) {\n    this.state = state;\n\n    this.canvas = this.state.engine.modalCanvas;\n    this.context = this.state.engine.modalContext;\n  }\n\n  render() {\n\n    this.context.globalAlpha = 0.5;\n    this.context.fillStyle = \"black\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.context.globalAlpha = 1;\n\n    this.context.font = \"50px IMPACT\";\n    this.context.textAlign = \"center\";\n\n    this.context.fillStyle = \"white\"\n    this.context.fillText(\"GAME PAUSED\", this.canvas.width/2, this.canvas.height/2);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"white\";\n\n    this.context.fillText(\"Press Enter To Return\", this.canvas.width/2, this.canvas.height/2 + 75);\n    this.context.fillText(\"Press Esc To Quit\", this.canvas.width/2, this.canvas.height/2 + 115);\n\n  }\n\n  clear() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_pause.js?");

/***/ }),

/***/ "./js/views/splash_screen.js":
/*!***********************************!*\
  !*** ./js/views/splash_screen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SplashScreen; });\n/**\n * Splash Screen View\n */\n\nclass SplashScreen {\n  constructor(state) {\n    this.state = state;\n\n    this.canvas = this.state.engine.splashCanvas;\n    this.context = this.state.engine.splashContext;\n    this.resources = this.state.resources;\n\n    this.alpha = 0;\n    this.delta = 0.01;\n    this.fadein = false;\n    this.fadeout = false;\n  }\n\n  animation() {\n    this.promise = new Promise((resolve) => {\n      this.resolve = resolve;\n      this.loop();\n    });\n    return this.promise;\n  }\n\n  loop() {  \n    this.alpha += this.delta;\n\n    if (this.fadein && this.fadeout) {\n      this.clear();\n      cancelAnimationFrame(this.animationID);\n      this.context.globalAlpha = 1;\n    } else {\n      if (this.alpha <= 0) {\n        this.delta = -this.delta;\n        this.fadeout = true;\n      } else if (this.alpha >= 1) {\n        this.resolve();\n        var d = new Date();\n        var d2 = null;\n        do { d2 = new Date(); }\n        while(d2-d < 2000);\n\n        this.delta = -this.delta;\n        this.fadein = true;\n      }\n      this.render();\n      this.animationID = requestAnimationFrame(this.loop.bind(this));\n    }\n  }\n\n  render() {\n    this.clear();\n    this.context.beginPath();\n\n    this.context.globalAlpha = this.alpha;\n    \n    this.context.fillStyle = \"#0a205a\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.drawImage(this.resources.get('images/LER-logo.png'), this.canvas.width/2 - 150, this.canvas.height/2 - 150);\n\n\n    this.context.drawImage(this.resources.get('images/udacity-logo.png'), 104, 550);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n    this.context.textAlign = \"center\";\n    this.context.fillText('Front-End Web Developer', this.canvas.width/2 + 24, 580);\n  }\n\n  clear() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/splash_screen.js?");

/***/ })

/******/ });