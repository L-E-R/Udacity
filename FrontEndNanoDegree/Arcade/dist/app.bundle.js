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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./js/game.js\");\n/* harmony import */ var _helpers_game_state_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/game_state_observable */ \"./js/helpers/game_state_observable.js\");\n/* harmony import */ var _views_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/splash_screen */ \"./js/views/splash_screen.js\");\n/* harmony import */ var _views_game_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/game_menu */ \"./js/views/game_menu.js\");\n/* harmony import */ var _views_game_help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/game_help */ \"./js/views/game_help.js\");\n/* harmony import */ var _views_game_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/game_options */ \"./js/views/game_options.js\");\n/* harmony import */ var _views_game_pause__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/game_pause */ \"./js/views/game_pause.js\");\n/* harmony import */ var _views_game_over__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/game_over */ \"./js/views/game_over.js\");\n\n\n\n\n\n\n\n\n\n\n\nlet App = (function () {\n\n  let state = {};\n  let splash, menu, help, options ,game, pause, over;\n  \n  const subscription = new _helpers_game_state_observable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n        onNext,\n        (err) => console.error(err), \n        () => console.log('complete'));\n\n  function onNext(value) {\n    state = value;\n\n    if (state.game.status.initializing) {\n      state.game.status.initializing = false;\n      doSplash();\n    }\n  }\n\n  function doSplash() {\n    splash = new _views_splash_screen__WEBPACK_IMPORTED_MODULE_2__[\"default\"](state);\n    splash.animation(state).then(doGameSetup);\n  } \n\n  function doGameSetup() {\n    menu = new _views_game_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"](state);\n    help = new _views_game_help__WEBPACK_IMPORTED_MODULE_4__[\"default\"](state);\n    options = new _views_game_options__WEBPACK_IMPORTED_MODULE_5__[\"default\"](state);\n  \n    game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](state);\n    pause = new _views_game_pause__WEBPACK_IMPORTED_MODULE_6__[\"default\"](state);\n    over = new _views_game_over__WEBPACK_IMPORTED_MODULE_7__[\"default\"](state);\n\n    doGameMenu();\n  }\n\n  function doGameMenu() {    \n    menu.render();\n  }\n\n  document.addEventListener('keyup', e => {\n    if (!state.game.status.initializing) {\n      var allowedKeys = {\n          13: 'enter',\n          27: 'esc',\n          72: 'h',\n          79: 'o'\n      };\n\n      switch (allowedKeys[e.keyCode]) {\n        case 'enter': {\n          if (!state.game.status.playing &&\n              !state.game.status.paused &&\n              !state.game.status.over &&\n              !state.game.status.help &&\n              !state.game.status.options) {         // Game Menu --> Game\n            state.game.status.playing = true;\n            menu.close();\n            game.start();\n          } else if (state.game.status.paused) {    // Game Paused --> Game\n            state.game.status.paused = false;\n            state.game.status.playing = true;\n            pause.clear();\n          } else if (state.game.status.over) {      // Game Over --> New Game\n            state.game.status.over = false;\n            state.game.status.playing = true;\n            over.clear();\n            game.stop();\n            game.start();\n          }\n          break;\n        }\n        case 'esc': {\n          if (state.game.status.playing) {         // Game --> Game Paused\n            state.game.status.playing = false;\n            state.game.status.paused = true;\n            pause.render();\n          } else if (state.game.status.paused) {    // Game Paused --> Game Menu\n            state.game.status.playing = false;\n            state.game.status.paused = false;\n            state.game.status.menu = true;\n            pause.clear();\n            game.stop();\n            menu.render();\n          } else if (state.game.status.over) {      // Game Over --> Game Menu\n            state.game.status.over = false;\n            state.game.status.menu = true;\n            over.clear();\n            game.stop();\n            menu.render();\n          } else if (state.game.status.help) {     // Game Help --> Game Menu\n            state.game.status.help = false;\n            state.game.status.menu = true;\n            help.close();\n            menu.render();\n          } else if (state.game.status.options) {   // Game Options --> Game Menu\n            state.game.status.options = false;\n            state.game.status.menu = true;\n            options.close();\n            menu.render();\n          }\n          break;\n        }\n        case 'h': {\n          if(!state.game.status.playing && !state.game.status.paused) {\n            state.game.status.help = true;\n            help.render();\n          }\n          break;\n        }\n        case 'o': {\n          if(!state.game.status.playing && !state.game.status.paused) {\n            state.game.status.options = true;\n            options.render();\n          }\n          break;\n        }\n      }\n    }\n  });\n\n})(undefined);\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _views_game_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/game_board */ \"./js/views/game_board.js\");\n/* harmony import */ var _sprites_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprites/player */ \"./js/sprites/player.js\");\n/* harmony import */ var _sprites_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites/enemy */ \"./js/sprites/enemy.js\");\n/* harmony import */ var _sprites_toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprites/toolbox */ \"./js/sprites/toolbox.js\");\n/* harmony import */ var _sprites_collectible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sprites/collectible */ \"./js/sprites/collectible.js\");\n/* harmony import */ var _sprites_health__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprites/health */ \"./js/sprites/health.js\");\n/* harmony import */ var _sprites_score__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sprites/score */ \"./js/sprites/score.js\");\n/* harmony import */ var _sprites_satchel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sprites/satchel */ \"./js/sprites/satchel.js\");\n/* harmony import */ var _views_game_over__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/game_over */ \"./js/views/game_over.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Game View\n */\n\nclass Game {\n  constructor(state) {\n    this.state = state;\n\n    this.over = new _views_game_over__WEBPACK_IMPORTED_MODULE_8__[\"default\"](state);\n\n    this.board = new _views_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](state);\n\n    this.score = new _sprites_score__WEBPACK_IMPORTED_MODULE_6__[\"default\"](state);\n    this.satchel = new _sprites_satchel__WEBPACK_IMPORTED_MODULE_7__[\"default\"](state);\n    this.health = new _sprites_health__WEBPACK_IMPORTED_MODULE_5__[\"default\"](state);\n    this.toolbox = new _sprites_toolbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"](state);\n    this.player = new _sprites_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](state);\n    this.collectible = new _sprites_collectible__WEBPACK_IMPORTED_MODULE_4__[\"default\"](state);\n    this.enemies = [];\n\n    this.init();\n  }\n\n  init() {\n    this.createEnemies();\n    this.setupKeyboardListener()\n  }\n\n  start() {\n    this.state.game.engine.start(this.update.bind(this));\n    this.player.sprite.src = this.state.options.character;\n    if (!this.collectible.item) {\n      this.collectible.generateCollectible();\n    }\n  }\n\n  stop() {\n    this.state.game.engine.gameContext.clearRect(0, 0, this.state.game.engine.gameCanvas.width, this.state.game.engine.gameCanvas.height);\n    this.state.game.engine.stop();\n\n    this.score.reset();\n    this.satchel.removeItem();\n    this.health.reset();\n    this.collectible.remove();\n    this.player.reset();\n\n    const row = [\n      {x:0, y:125},\n      {x:0, y:210},\n      {x:0, y:295},\n      {x:0, y:380}\n    ]\n\n    for(let i = 0; i < row.length; i++) {\n      this.enemies[i].reset(row[i]);\n    }\n    this.render();\n  }\n\n  render() {\n    this.board.render();\n    this.score.render();\n    this.satchel.render();\n    this.health.render();\n\n    this.toolbox.render();\n    this.collectible.render();\n\n    // render dead player z-index lower than enemy\n    // gives effect of enemy going over splat\n    if (this.player.isDead) {\n      this.player.render();\n    }\n\n    this.enemies.forEach(enemy => enemy.render());\n    \n    // render active player z-index higher than enemy\n    // gives better depth to view\n    if (!this.player.isDead) {\n      this.player.render();\n    }\n     \n  }\n\n  update(dt) {\n    if (!this.state.game.status.paused) {\n      this.enemies.forEach(enemy => enemy.update(dt));\n    } else {\n      this.enemies.forEach(enemy => enemy.stopSoundEffect())\n    }\n    \n    this.render();\n    this.detect();      \n  }\n\n  detect() {\n\n    // enemy collision\n    if (!this.player.isDead) {\n      this.enemies.forEach(enemy => {\n        if (this.collides(this.player.collisionPos(), enemy.collisionPos())) {\n          this.health.removeHealth();\n          this.satchel.removeItem();\n\n          if (!this.collectible.item) {\n            this.collectible.generateCollectible();\n          }\n\n          if (this.health.value === 0) {\n            this.state.game.status.over = true;\n            this.state.game.status.playing = false;\n            this.over.render();\n\n            this.enemies.forEach(enemy => enemy.stopSoundEffect())\n          }\n\n          this.player.death();\n\n        }\n      })\n    }\n\n    // collectible collision\n    if (this.collides(this.player.collisionPos(), this.collectible.collisionPos())) {\n      this.satchel.item = this.collectible.item;\n      this.collectible.remove();\n    }\n\n    // toolbox collision\n    if (this.collides(this.player.collisionPos(), this.toolbox.collisionPos())\n        && this.satchel.item) {\n      this.score.addPoints(this.satchel.item.points);\n      this.satchel.removeItem();\n      this.collectible.generateCollectible();\n    }\n  }\n\n  collides(a, b) {\n    return a.x < b.x + b.width &&\n           a.x + a.width > b.x &&\n           a.y < b.y + b.height &&\n           a.y + a.height > b.y;\n  }\n\n  _getDistance(x1, y1, x2, y2) {\n    let xDistance = x2 - x1;\n    let yDistance = y2 - y1;\n\n    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));\n  }\n\n\n  createEnemies() {\n    const row = [\n      {x:0, y:125},\n      {x:0, y:210},\n      {x:0, y:295},\n      {x:0, y:380}\n    ]\n\n    for(let i = 0; i < row.length; i++) {\n      this.enemies.push(new _sprites_enemy__WEBPACK_IMPORTED_MODULE_2__[\"default\"](row[i], this.state));\n    }\n  }\n\n  setupKeyboardListener() {\n    document.addEventListener('keyup', e => {\n\n      var allowedKeys = {\n        37: 'left',\n        38: 'up',\n        39: 'right',\n        40: 'down',\n      };\n  \n      switch (allowedKeys[e.keyCode]) {\n        case 'left':\n        case 'up':\n        case 'right':\n        case 'down': {\n          if(!this.state.game.status.paused && !this.state.game.status.over) {\n            this.player.handleInput(allowedKeys[e.keyCode]);\n          }\n          break;\n        }\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack:///./js/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameResources; });\n/**\n * Game Resources\n * \n * Based of original project templates resource.js\n */\n\nclass GameResources {\n  constructor(onReadyCallback) {\n    this.resourceCache = {};\n    this.readyCallbacks = [];\n    this.readyCallbacks.push(onReadyCallback);\n    \n    this.init();\n  }\n\n  init() {\n    this.load([\n      'images/board/stone-block.png',\n      'images/board/water-block.png',\n      'images/board/grass-block.png',\n      'images/board/health.png',\n      'images/board/toolbox.png',\n      'images/board/splat.png',\n      'images/buttons/easy.png',\n      'images/buttons/hard.png',\n      'images/buttons/medium.png',\n      'images/characters/char-boy.png',\n      'images/characters/char-cat-girl.png',\n      'images/characters/char-horn-girl.png',\n      'images/characters/char-pink-girl.png',\n      'images/characters/char-princess-girl.png',\n      'images/collectibles/jerry-can.png',\n      'images/collectibles/oil-can.png',\n      'images/collectibles/spark-plug.png',\n      'images/enemies/lawn-mower.png',\n      'images/splash/ler-logo.png',\n      'images/splash/udacity-logo.png',\n      'sounds/death.wav',\n      'sounds/dropoff.wav',\n      'sounds/mower.wav',\n      'sounds/pickup.wav',\n      'sounds/splashintro.wav',\n      'sounds/step.wav'\n    ]);\n  }\n\n  load(urlOrArr) {\n    if(urlOrArr instanceof Array) {\n      urlOrArr.forEach(url => this._load(url));\n    } else {\n      this._load(urlOrArr);\n    }\n  }\n\n  _load(url) {\n    if(this.resourceCache[url]) {\n      return this.resourceCache[url];\n    } else {\n      if (url.indexOf('images') !== -1) {\n        var img = new Image();\n        img.onload = () => {\n          this.resourceCache[url] = img;\n        }\n        img.src = url;\n      } else if (url.indexOf('sounds') !== -1) {\n        var snd = new Audio(url);\n        this.resourceCache[url] = snd;\n      } else {\n        this.resourceCache[url] = false;\n      }\n\n      if(this.isReady() && this.readyCallbacks[0] !== undefined) {\n        this.readyCallbacks.forEach(func => func());\n      }\n    }\n  }\n\n  get(url) {\n    return this.resourceCache[url];\n  }\n\n  isReady() {\n    let ready = true;\n    for(let resource in this.resourceCache) {\n      if(this.resourceCache.hasOwnProperty(resource) &&\n          !this.resourceCache[resource]) {\n            ready = false;\n          }\n    }\n    return ready;\n  }\n\n  onReady(func) {\n    this.readyCallbacks.push(func);\n  }\n\n}\n\n//# sourceURL=webpack:///./js/helpers/game_resources.js?");

/***/ }),

/***/ "./js/helpers/game_state.js":
/*!**********************************!*\
  !*** ./js/helpers/game_state.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameState; });\n/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_engine */ \"./js/helpers/game_engine.js\");\n/* harmony import */ var _game_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_resources */ \"./js/helpers/game_resources.js\");\n\n\n\n/**\n * Game State\n * \n * holds onto game state for objects and properties\n */\n\nclass GameState {\n  constructor() {\n    this.engine = new _game_engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.resource = new _game_resources__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.onResourcesReady.bind(this));\n\n    this._state = {\n      options: {\n        character: 'images/characters/char-pink-girl.png',\n        difficulty: 'images/buttons/easy.png',\n        enemyspeed: 1\n      },\n      game: {\n        engine: this.engine,\n        resources: this.resource,\n        status: {\n          initializing: true,\n          playing: false,\n          paused: false,\n          over: false\n        }\n      },\n      debug: {\n        showCollisionRect: false\n      }\n    }\n  }\n\n  onResourcesReady() {\n    this._id = setInterval(() => this.emit(this._state), 200);\n  }\n\n  emit(newState) {\n    if (this.ondata) {\n      this.ondata(newState);\n    }\n  }\n\n  destroy() {\n    clearInterval(this._id);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/helpers/game_state.js?");

/***/ }),

/***/ "./js/helpers/game_state_observable.js":
/*!*********************************************!*\
  !*** ./js/helpers/game_state_observable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameStateObservable; });\n/* harmony import */ var _game_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_state */ \"./js/helpers/game_state.js\");\n\n\n/**\n * Game State Observable\n * \n * communicates when the game state changes\n */\n\nclass GameStateObservable {\n  constructor(next, error, complete) {\n    const state = new _game_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    state.ondata = (e) => next(e);\n    state.onerror = (err) => error(err);\n    state.oncomplete = () => complete();\n\n    return () => {\n      state.destroy();\n    };\n  }\n}\n\n//# sourceURL=webpack:///./js/helpers/game_state_observable.js?");

/***/ }),

/***/ "./js/sprites/base_sprite.js":
/*!***********************************!*\
  !*** ./js/sprites/base_sprite.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseSprite; });\n/* harmony import */ var _helpers_game_state_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/game_state_observable */ \"./js/helpers/game_state_observable.js\");\n\n\n/**\n * Base Sprite Class\n */\n\nclass BaseSprite {\n  constructor() {\n    // this.subscribe = new GameStateObservable(\n    //   this.onNext.bind(this),\n    //   (err) => console.error(err),\n    //   () => console.log('complete')\n    // );\n  }\n\n\n  // source from : https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027\n  // onNext() {\n  //   throw new Error('You have to implement the method onNext(state)');\n  // }\n}\n\n\n//# sourceURL=webpack:///./js/sprites/base_sprite.js?");

/***/ }),

/***/ "./js/sprites/collectible.js":
/*!***********************************!*\
  !*** ./js/sprites/collectible.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Collectible; });\n/* harmony import */ var _base_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_sprite */ \"./js/sprites/base_sprite.js\");\n\n\n/**\n * Collectible Sprite\n */\n\nclass Collectible extends _base_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.context = this.state.game.engine.gameContext;\n    this.resources = this.state.game.resources;\n\n    this.sound = this.resources.get('sounds/pickup.wav');\n\n    this.x = 215;\n    this.y = 80;\n    this.width = 70;\n    this.height = 70;\n\n    this.currentCollectible;\n\n    this.generateCollectible();\n  }\n\n  collisionPos() {\n    return {\n       x: this.x + 5,\n       y: this.y + 5,\n       width: this.width,\n       height: this.height\n     }\n   }\n\n   get item() {\n     return this.currentCollectible;\n   }\n\n  render () {\n    if (this.currentCollectible) {\n      this.x = this.x === -10000 ? this.generateCollectibleLocation() : this.x;\n      this.context.drawImage(this.resources.get(this.currentCollectible.image), this.x, this.y);\n    }\n\n    if (this.state.debug.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'yellow';\n    this.context.stroke();\n  }\n\n  generateCollectible () {\n    setTimeout(() =>  this.currentCollectible = this.generateCollectibleSprite(), 5000);;\n    \n    this.x = this.generateCollectibleLocation();\n    this.y = 80;\n  }\n\n  generateCollectibleSprite() {\n    const min = 0;\n    const max = 2;\n    const sprites = [\n      {name: 'jerry', image: 'images/collectibles/jerry-can.png', points: 10},\n      {name: 'oil', image: 'images/collectibles/oil-can.png', points: 5},\n      {name: 'spark', image: 'images/collectibles/spark-plug.png', points: 15}\n    ];\n\n    const index =  Math.floor(Math.random() * (max - min + 1)) + min;\n\n    this.sprite = sprites[index];\n    return this.sprite;\n  }\n\n  generateCollectibleLocation() {\n    const min = 0;\n    const max = 4;\n    const locations = [5, 110, 215, 320, 425];\n\n    const index =  Math.floor(Math.random() * (max - min + 1)) + min;\n\n    return locations[index];\n  }\n\n  remove() {\n    delete this.currentCollectible;\n    if (this.state.game.status.playing) { this.sound.play(); };\n    \n    this.x = -10000;\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/collectible.js?");

/***/ }),

/***/ "./js/sprites/enemy.js":
/*!*****************************!*\
  !*** ./js/sprites/enemy.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _base_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_sprite */ \"./js/sprites/base_sprite.js\");\n\n\n/**\n * Enemy Sprite\n */\n\nclass Enemy extends _base_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, state) {\n    super();\n\n    this.state = state;\n    this.pos = pos;\n    this.init();\n  }\n\n  init() {\n    this.context = this.state.game.engine.gameContext;\n    this.resources = this.state.game.resources;\n\n    this.sound = this.resources.get('sounds/mower.wav');\n    this.sound.volume = 0.25;\n    \n    // Variables applied to each of our instances go here,\n    // we've provided one for you to get started\n    this.width = 100;\n    this.height = 70;\n    this.speed = this.generateSpeed();\n\n    // The image/sprite for our enemies, this uses\n    // a helper we've provided to easily load images\n    this.sprite = 'images/enemies/lawn-mower.png';\n  }\n\n  // Update the enemy's position, required method for game\n  // Parameter: dt, a time delta between ticks\n  update (dt) {\n    // You should multiply any movement by the dt parameter\n    // which will ensure the game runs at the same speed for\n    // all computers.\n    \n    this.pos.x = this.pos.x || 0;\n\n    if (this.pos.x > 505) {\n      this.sound.pause();\n      this.sound.currentTime = 0;\n      // generate new speed\n      this.speed = this.generateSpeed();\n      // reset the position to the far left\n      this.pos.x = -100;\n    } else {\n      this.pos.x = this.pos.x + this.speed * dt;\n    }\n  }\n\n  collisionPos() {\n    return {\n       x: this.pos.x + 40,\n       y: this.pos.y + 40,\n       width: this.width,\n       height: this.height\n     }\n   }\n\n  // Draw the enemy on the screen, required method for game\n  render () {\n    this.context.drawImage(this.resources.get(this.sprite), this.pos.x, this.pos.y);\n\n    if (this.state.debug.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  generateSpeed() {\n    if (this.state.game.status.playing && !this.state.game.status.over) { this.sound.play(); };\n    let speedDifficulty = 100 * this.state.options.enemyspeed;\n    return Math.round((Math.floor(Math.random() * (3- 1 + 1)) + 1) * speedDifficulty);\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'yellow';\n    this.context.stroke();\n  }\n\n  reset(pos) {\n    this.stopSoundEffect();\n    this.pos = pos;\n  }\n\n  stopSoundEffect() {\n    this.sound.pause();\n    this.sound.currentTime = 0;\n  }\n}\n \n\n//# sourceURL=webpack:///./js/sprites/enemy.js?");

/***/ }),

/***/ "./js/sprites/health.js":
/*!******************************!*\
  !*** ./js/sprites/health.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Health; });\n/* harmony import */ var _base_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_sprite */ \"./js/sprites/base_sprite.js\");\n\n\n/**\n * Health Sprite\n */\n\nclass Health extends _base_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.context = this.state.game.engine.gameContext;\n    this.canvas = this.state.game.engine.gameCanvas;\n    this.resources = this.state.game.resources;\n\n    this.sprite = 'images/board/health.png';\n    this._health = 3;\n\n  }\n\n  addHealth() {\n    this._health++;\n    this.render();\n  }\n\n  removeHealth() {\n    this._health--;\n    this.render();\n  }\n\n  get value() {\n    return this._health;\n  }\n\n  render() {\n    for(let i = 1, v = 10; i <= this._health; i++, v += 40) {\n      this.context.drawImage(this.resources.get(this.sprite), v , 0);\n    }\n  }\n\n  reset() {\n    this._health = 3;\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/health.js?");

/***/ }),

/***/ "./js/sprites/player.js":
/*!******************************!*\
  !*** ./js/sprites/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _base_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_sprite */ \"./js/sprites/base_sprite.js\");\n\n\n/**\n * Player Sprite\n */\n\nclass Player extends _base_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.context = this.state.game.engine.gameContext;\n    this.resources = this.state.game.resources;\n\n    this.walkingSound = this.resources.get('sounds/step.wav');\n    this.deathSound = this.resources.get('sounds/death.wav');\n\n    this.x = 200;\n    this.y = 425;\n    this.width = 70;\n    this.height = 70;\n\n    this.sprite = new Image();\n    this.sprite.src = this.state.options.character;\n  }\n\n  reset() {\n    delete this.isDead;\n    this.sprite.src = this.state.options.character;\n    this.x = 200;\n    this.y = 425;\n  }\n\n  death() {\n    this.isDead = true;\n    this.deathSound.play();\n    this.y += 85;\n    this.sprite.src = \"images/board/splat.png\";\n    if (!this.state.game.status.over) {\n      setTimeout(() => this.reset(), 3000);\n    }\n  }\n\n\n  collisionPos() {\n   return {\n      x: this.x + 15,\n      y: this.y + 70,\n      width: this.width,\n      height: this.height\n    }\n  }\n\n  render () {\n    this.context.drawImage(this.sprite, this.x, this.y);\n\n    if (this.state.debug.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'red';\n    this.context.stroke();\n  }\n\n  handleInput (direction) {\n    if (!this.isDead) {\n      this.walkingSound.currentTime = 0;\n      switch(direction) {\n        case 'left': {\n          if (this.x - 100 >= 0) {\n            this.walkingSound.play();\n            this.x -= 100;\n          }\n          break;\n        };\n        case 'right': {\n          if (this.x + 100 < 500) {\n            this.walkingSound.play();\n            this.x += 100;\n          }\n          break;\n        };\n        case 'up': {\n          if (this.y - 85 >= 0) {\n            this.walkingSound.play();\n            this.y -= 85;\n          }\n          break;\n        };\n        case 'down': {\n          if (this.y + 85 <= 500) {\n            this.walkingSound.play();\n            this.y += 85;\n          }\n          break;\n        };\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/player.js?");

/***/ }),

/***/ "./js/sprites/satchel.js":
/*!*******************************!*\
  !*** ./js/sprites/satchel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Satchel; });\n/* harmony import */ var _base_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_sprite */ \"./js/sprites/base_sprite.js\");\n\n\n/**\n * Satchel Sprite\n */\n\nclass Satchel extends _base_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.context = this.state.game.engine.gameContext;\n    this.resources = this.state.game.resources;\n\n    this.x = 450;\n    this.y = 15;\n    this.width = 40;\n    this.height = 40;\n\n    this.sprite = 'images/collectibles/spark-plug.png';\n  }\n\n  render () {\n\n    this.context.fillRect(this.x, this.y, this.width, this.height);\n\n    if (this._item) {\n      let imageObj = this.resources.get(this._item.image);\n      this.context.drawImage(imageObj, this.x, this.y, imageObj.width * 0.5, imageObj.height * 0.5);\n    }\n  }\n\n  set item(item) {\n    this._item = item;\n  }\n\n  get item() {\n    return this._item;\n  }\n\n  removeItem() {\n    delete this._item;\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/satchel.js?");

/***/ }),

/***/ "./js/sprites/score.js":
/*!*****************************!*\
  !*** ./js/sprites/score.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\n/* harmony import */ var _base_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_sprite */ \"./js/sprites/base_sprite.js\");\n\n\n/**\n * Score Sprite\n */\n\nclass Score extends _base_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.context = this.state.game.engine.gameContext;\n    this.canvas = this.state.game.engine.gameCanvas;\n    this.resources = this.state.game.resources;\n    this.sound = this.resources.get('sounds/dropoff.wav');\n    this.score = 0\n  }\n\n  addPoints(points) {\n    this.sound.play();\n    this.score += points;\n    this.render();\n  }\n\n  removePoints(points) {\n    this.score -= points;\n    this.render();\n  }\n\n  render() {\n    this.context.textAlign = \"center\";\n\n    this.context.font = \"38px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n\n    this.context.fillText(this.score, this.canvas.width/2, 40);\n  }\n\n  reset() {\n    this.score = 0;\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/score.js?");

/***/ }),

/***/ "./js/sprites/toolbox.js":
/*!*******************************!*\
  !*** ./js/sprites/toolbox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toolbox; });\n/* harmony import */ var _base_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_sprite */ \"./js/sprites/base_sprite.js\");\n\n\n/**\n * Toolbox Sprite\n */\n\nclass Toolbox extends _base_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.context = this.state.game.engine.gameContext;\n    this.resources = this.state.game.resources;\n\n    this.x = 15;\n    this.y = 510;\n    this.width = 70;\n    this.height = 70;\n\n    this.sprite = 'images/board/toolbox.png';\n  }\n\n\n  collisionPos() {\n    return {\n       x: this.x + 5,\n       y: this.y + 5,\n       width: this.width,\n       height: this.height\n     }\n   }\n\n  render () {\n    this.context.drawImage(this.resources.get(this.sprite), this.x, this.y);\n\n    if (this.state.debug.showCollisionRect) {\n      this._debugRenderCollisionRect();\n    }\n  }\n\n  _debugRenderCollisionRect() {\n    this.context.beginPath();\n    this.context.rect(this.collisionPos().x, this.collisionPos().y, this.width, this.height);\n    this.context.lineWidth = 7;\n    this.context.strokeStyle = 'yellow';\n    this.context.stroke();\n  }\n}\n\n//# sourceURL=webpack:///./js/sprites/toolbox.js?");

/***/ }),

/***/ "./js/views/base_view.js":
/*!*******************************!*\
  !*** ./js/views/base_view.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseView; });\n/* harmony import */ var _helpers_game_state_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/game_state_observable */ \"./js/helpers/game_state_observable.js\");\n\n\n/**\n * Base View Class\n */\n\nclass BaseView {\n  constructor() {\n\n  }\n\n  static updateChildren() {\n    update();\n  }\n\n  /**\n   * Insure subclassed objects implement the following methods\n   * \n   * Pulled this pattern from the following resource\n   * url : https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027\n   */ \n  \n  init() {\n    throw new Error('You have to implement the method init(), to handle initial variable values');\n  }\n\n  update() {\n    throw new Error('You have to implement the method update(), to handle any view udpates');\n  }\n\n  render() {\n    throw new Error('You have to implement the method render(), to handle the view rendering');\n  }\n\n  close() {\n    throw new Error('You have to implement the method close(), to handle the view not displaying');\n  }\n\n}\n\n//# sourceURL=webpack:///./js/views/base_view.js?");

/***/ }),

/***/ "./js/views/game_board.js":
/*!********************************!*\
  !*** ./js/views/game_board.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameBoard; });\n/* harmony import */ var _base_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_view */ \"./js/views/base_view.js\");\n\n\n/**\n * Game Board View\n */\n\nclass GameBoard extends _base_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.canvas = this.state.game.engine.gameCanvas;\n    this.context = this.state.game.engine.gameContext;\n    this.resources = this.state.game.resources;\n  }\n\n  render() {\n    var rowImages = [\n      'images/board/water-block.png',   // Top row is water\n      'images/board/stone-block.png',   // Row 1 of 1 of stone\n      'images/board/grass-block.png',   // Row 1 of 3 of grass\n      'images/board/grass-block.png',   // Row 2 of 3 of grass\n      'images/board/grass-block.png',   // Row 3 of 3 of grass\n      'images/board/grass-block.png',   // Row 1 of 2 of stone\n      'images/board/stone-block.png'    // Row 2 of 2 of stone\n\n    ],\n      numRows = 7,\n      numCols = 5,\n      row, col;\n\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    for (row = 0; row < numRows; row++) {\n      for (col = 0; col < numCols; col++) {\n        this.context.drawImage(this.resources.get(rowImages[row]), col * 101, row * 83 - 50);\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_board.js?");

/***/ }),

/***/ "./js/views/game_help.js":
/*!*******************************!*\
  !*** ./js/views/game_help.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameHelp; });\n/* harmony import */ var _base_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_view */ \"./js/views/base_view.js\");\n\n\n/**\n * Game Help View\n */\n\nclass GameHelp extends _base_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.canvas = this.state.game.engine.modalCanvas;\n    this.context = this.state.game.engine.modalContext;\n  }\n\n  render() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.fillStyle = \"black\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.font = \"50px IMPACT\";\n    this.context.textAlign = \"center\";\n\n    this.context.strokeStyle = \"#b6ff60\"\n    this.context.strokeText(\"How To Play\", this.canvas.width/2, 75);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n\n    let text = \"The objective of the game is to cross the field and collect objects (gas, spark plug, oil) on the other side. Then return those items back to your toolbox, located where you originally started. Beware of the out of control lawn mowers that will mow you down and take a life.\"\n    let nextY = this.wrapText(this.context, text, this.canvas.width/2, 125, this.canvas.width - 20, 20, \"Arial\");\n    \n    this.context.fillText(\"Use the keyboard arrow keys to control the character\", this.canvas.width/2, nextY + 50);\n    this.context.fillText(\"Up | Down | Left | Right\", this.canvas.width/2, nextY + 100);\n\n    this.context.fillStyle = \"#99bd98\";\n    this.context.fillText(\"Press Esc For Game Menu \", this.canvas.width/2, this.canvas.height - 25);\n  }\n\n  close() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n\n  wrapText(context, text, x, y, maxWidth, fontSize, fontFace){\n    var words = text.split(' ');\n    var line = '';\n    var lineHeight=25;\n  \n    context.font=fontSize+\" \"+fontFace;\n  \n    for(var n = 0; n < words.length; n++) {\n      var testLine = line + words[n] + ' ';\n      var metrics = context.measureText(testLine);\n      var testWidth = metrics.width;\n      if(testWidth > maxWidth) {\n        context.fillText(line, x, y);\n        line = words[n] + ' ';\n        y += lineHeight;\n      }\n      else {\n        line = testLine;\n      }\n    }\n    context.fillText(line, x, y);\n    return(y);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_help.js?");

/***/ }),

/***/ "./js/views/game_menu.js":
/*!*******************************!*\
  !*** ./js/views/game_menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameMenu; });\n/* harmony import */ var _base_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_view */ \"./js/views/base_view.js\");\n\n\n/**\n * Game Menu View\n */\n\nclass GameMenu extends _base_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.canvas = this.state.game.engine.modalCanvas;\n    this.context = this.state.game.engine.modalContext;\n    this.resources = this.state.game.resources;\n  }\n\n  render() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.fillStyle = \"black\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.drawImage(this.resources.get('images/enemies/lawn-mower.png'), this.canvas.width/2 - 85, this.canvas.height/2 - 200);\n\n\n    this.context.font = \"50px IMPACT\";\n    this.context.textAlign = \"center\";\n\n    this.context.fillStyle = \"#19A329\"\n    this.context.fillText(\"Mow-Cross\", this.canvas.width/2, this.canvas.height/2);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n\n    this.context.fillText(\"Press Enter To Start\", this.canvas.width/2, this.canvas.height/2 + 75);\n\n    this.context.fillStyle = \"#99bd98\";\n    this.context.fillText(\"Press H For How To Play \", this.canvas.width/2, this.canvas.height/2 + 150);\n    this.context.fillText(\"Press O For Game Options\", this.canvas.width/2, this.canvas.height/2 + 200);\n  }\n\n  close() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_menu.js?");

/***/ }),

/***/ "./js/views/game_options.js":
/*!**********************************!*\
  !*** ./js/views/game_options.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameOptions; });\n/* harmony import */ var _base_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_view */ \"./js/views/base_view.js\");\n\n\n/**\n * Game Options View\n */\n\nclass GameOptions extends _base_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n  \n  init() {\n    this.canvas = this.state.game.engine.modalCanvas;\n    this.context = this.state.game.engine.modalContext;\n\n    this.setupKeyboardListener();\n\n    this.selectedCharacter = new Image();\n    this.selectedCharacter.src = this.state.options.character;\n\n    this.selectedOption = new Image();\n    this.selectedOption.src = this.state.options.difficulty;\n\n    this.sprite_a = new Image();\n    this.sprite_a._x = 50;\n    this.sprite_a._y = 100;\n    this.sprite_a.src = 'images/characters/char-boy.png';\n\n    this.sprite_b = new Image();\n    this.sprite_b._x = 50;\n    this.sprite_b._y = 200;\n    this.sprite_b.src = 'images/characters/char-cat-girl.png';\n\n    this.sprite_c = new Image();\n    this.sprite_c._x = 200;\n    this.sprite_c._y = 100;\n    this.sprite_c.src = 'images/characters/char-horn-girl.png';\n\n    this.sprite_d = new Image();\n    this.sprite_d._x = 200;\n    this.sprite_d._y = 200;\n    this.sprite_d.src = 'images/characters/char-pink-girl.png';\n\n    this.sprite_e = new Image();\n    this.sprite_e._x = 350;\n    this.sprite_e._y = 100;\n    this.sprite_e.src = 'images/characters/char-princess-girl.png';\n\n    this.sprite_easy = new Image();\n    this.sprite_easy._x = 50;\n    this.sprite_easy._y = 425;\n    this.sprite_easy.src = 'images/buttons/easy.png';\n    this.sprite_easy.enemyspeed = 1;\n\n    this.sprite_medium = new Image();\n    this.sprite_medium._x = 175;\n    this.sprite_medium._y = 425;\n    this.sprite_medium.src = 'images/buttons/medium.png';\n    this.sprite_medium.enemyspeed = 2;\n\n    this.sprite_hard = new Image();\n    this.sprite_hard._x = 350;\n    this.sprite_hard._y = 425;\n    this.sprite_hard.src = 'images/buttons/hard.png';\n    this.sprite_hard.enemyspeed = 3;\n\n\n\n  }\n\n  render() {\n    document.querySelector('canvas').addEventListener(\"click\", this.onCanvasClick.bind(this), false);\n    \n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.fillStyle = \"black\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.font = \"50px IMPACT\";\n    this.context.textAlign = \"center\";\n\n    this.context.strokeStyle = \"#b6ff60\"\n    this.context.strokeText(\"Game Options\", this.canvas.width/2, 75);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n\n    this.context.textAlign = \"left\";\n    this.context.font = \"20px Arial\";\n    this.context.fillText(\"Character\", 35, 125);\n\n    this.drawSprite(this.sprite_a, this.sprite_a._x, this.sprite_a._y);\n    this.drawSprite(this.sprite_b, this.sprite_b._x, this.sprite_b._y);\n    this.drawSprite(this.sprite_c, this.sprite_c._x, this.sprite_c._y);\n    this.drawSprite(this.sprite_d, this.sprite_d._x, this.sprite_d._y);\n    this.drawSprite(this.sprite_e, this.sprite_e._x, this.sprite_e._y);\n\n    this.context.fillText(\"Difficulty\", 35, 400);\n   \n    this.drawSprite(this.sprite_easy, this.sprite_easy._x, this.sprite_easy._y);\n    this.drawSprite(this.sprite_medium, this.sprite_medium._x, this.sprite_medium._y);\n    this.drawSprite(this.sprite_hard, this.sprite_hard._x, this.sprite_hard._y);\n\n    this.context.textAlign = \"center\";\n    this.context.fillStyle = \"#99bd98\";\n    this.context.fillText(\"Press S To Save Changes\", this.canvas.width/2, this.canvas.height - 75);\n\n    this.context.fillText(\"Press Esc For Game Menu\", this.canvas.width/2, this.canvas.height - 25);\n  }\n\n  drawSprite(sprite, x, y) {\n    this.context.drawImage(sprite, x, y);\n    if (sprite.src === this.selectedCharacter.src) {\n      this.context.beginPath();\n      this.context.rect(x + 10, y + 50, 80, 90);\n      this.context.lineWidth = 2;\n      this.context.strokeStyle = 'lightgray';\n      this.context.stroke();\n    }\n    if (sprite.src === this.selectedOption.src) {\n      let width = sprite.src === this.sprite_medium.src ? 170 : 120;\n      this.context.beginPath();\n      this.context.rect(x, y, width, 50);\n      this.context.lineWidth = 2;\n      this.context.strokeStyle = 'lightgray';\n      this.context.stroke();\n    }\n  }\n\n  close() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    document.querySelector('canvas').removeEventListener(\"click\", this.onCanvasClick.bind(this));\n  }\n\n  \n  onCanvasClick(e) {\n    let position = this.clickPosition(e);\n    \n    if (this.collides(position, this.sprite_a)) {\n      this.selectedCharacter = this.sprite_a\n    } else if (this.collides(position, this.sprite_b)) {\n      this.selectedCharacter = this.sprite_b\n    } else if (this.collides(position, this.sprite_c)) {\n      this.selectedCharacter = this.sprite_c\n    } else if (this.collides(position, this.sprite_d)) {\n      this.selectedCharacter = this.sprite_d\n    } else if (this.collides(position, this.sprite_e)) {\n      this.selectedCharacter = this.sprite_e\n    }\n\n    if (this.collides(position, this.sprite_easy)) {\n      this.selectedOption = this.sprite_easy;\n    } else if (this.collides(position, this.sprite_medium)) {\n      this.selectedOption = this.sprite_medium;\n    } else if (this.collides(position, this.sprite_hard)) {\n      this.selectedOption = this.sprite_hard;\n    }\n\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.render();\n    \n  }\n\n\n  collides(a, b) {\n    return a.x < b._x + b.width &&\n           a.y < b._y + b.height;\n  }\n\n  clickPosition(e) {\n  \tvar x;\n    var y;\n    if (e.pageX != undefined && e.pageY != undefined) {\n      x = e.pageX;\n      y = e.pageY;\n    }\n    else {\n      x = e.clientX + document.body.scrollLeft +\n                document.documentElement.scrollLeft;\n      y = e.clientY + document.body.scrollTop +\n                document.documentElement.scrollTop;\n    }\n    x -= this.canvas.offsetLeft;\n    y -= this.canvas.offsetTop;\n\n    return {x:x, y:y};\n  }\n\n  setupKeyboardListener() {\n    document.addEventListener('keyup', e => {\n\n      var allowedKeys = {\n        83: 's'\n      };\n  \n      switch (allowedKeys[e.keyCode]) {\n        case 's': {\n          if(!this.state.game.status.playing && !this.state.game.status.paused) {\n            let index = this.selectedCharacter.src.indexOf('images');\n            this.state.options.character = this.selectedCharacter.src.slice(index, this.selectedCharacter.src.length);\n            this.state.options.difficulty = this.selectedOption.src.slice(index, this.selectedOption.src.length);\n            this.state.options.enemyspeed = this.selectedOption.enemyspeed;\n          }\n          break;\n        }\n      }\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./js/views/game_options.js?");

/***/ }),

/***/ "./js/views/game_over.js":
/*!*******************************!*\
  !*** ./js/views/game_over.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameOver; });\n/* harmony import */ var _base_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_view */ \"./js/views/base_view.js\");\n\n\n/**\n * Game Over View\n */\n\nclass GameOver extends _base_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.canvas = this.state.game.engine.modalCanvas;\n    this.context = this.state.game.engine.modalContext;\n  }\n\n  render() {\n    this.context.globalAlpha = 0.5;\n    this.context.fillStyle = \"black\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.context.globalAlpha = 1;\n\n    this.context.font = \"50px IMPACT\";\n    this.context.textAlign = \"center\";\n\n    this.context.fillStyle = \"white\"\n    this.context.fillText(\"GAME OVER\", this.canvas.width/2, this.canvas.height/2);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"white\";\n\n    this.context.fillText(\"Press Enter To Play Again\", this.canvas.width/2, this.canvas.height/2 + 75);\n    this.context.fillText(\"Press Esc For Game Menu\", this.canvas.width/2, this.canvas.height/2 + 115);\n\n  }\n\n  clear() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_over.js?");

/***/ }),

/***/ "./js/views/game_pause.js":
/*!********************************!*\
  !*** ./js/views/game_pause.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GamePause; });\n/* harmony import */ var _base_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_view */ \"./js/views/base_view.js\");\n\n\n/**\n * Game Pause View\n */\n\nclass GamePause extends _base_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n    \n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.canvas = this.state.game.engine.modalCanvas;\n    this.context = this.state.game.engine.modalContext;\n  }\n\n  render() {\n    this.context.globalAlpha = 0.5;\n    this.context.fillStyle = \"black\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.context.globalAlpha = 1;\n\n    this.context.font = \"50px IMPACT\";\n    this.context.textAlign = \"center\";\n\n    this.context.fillStyle = \"white\"\n    this.context.fillText(\"GAME PAUSED\", this.canvas.width/2, this.canvas.height/2);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"white\";\n\n    this.context.fillText(\"Press Enter To Return\", this.canvas.width/2, this.canvas.height/2 + 75);\n    this.context.fillText(\"Press Esc To Quit\", this.canvas.width/2, this.canvas.height/2 + 115);\n\n  }\n\n  clear() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/game_pause.js?");

/***/ }),

/***/ "./js/views/splash_screen.js":
/*!***********************************!*\
  !*** ./js/views/splash_screen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SplashScreen; });\n/* harmony import */ var _base_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_view */ \"./js/views/base_view.js\");\n\n\n/**\n * Splash Screen View\n */\n\nclass SplashScreen extends _base_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n\n    this.state = state;\n    this.init();\n  }\n\n  init() {\n    this.canvas = this.state.game.engine.splashCanvas;\n    this.context = this.state.game.engine.splashContext;\n    this.resources = this.state.game.resources;\n\n    this.alpha = 0;\n    this.delta = 0.01;\n    this.fadein = false;\n    this.fadeout = false;\n  }\n\n  animation() {\n    this.promise = new Promise((resolve) => {\n      this.resolve = resolve;\n      this.loop();\n    });\n    return this.promise;\n  }\n\n  loop() { \n    this.alpha += this.delta;\n    \n    if (this.fadein && this.fadeout) {\n      this.clear();\n      cancelAnimationFrame(this.animationID);\n      this.context.globalAlpha = 1;\n    } else {\n      if (this.alpha <= 0) {\n        this.delta = -this.delta;\n        this.fadeout = true;\n      } else if (this.alpha >= 1) {\n        this.resolve();\n        var d = new Date();\n        var d2 = null;\n        do { d2 = new Date(); }\n        while(d2-d < 1000);\n\n        this.delta = -this.delta;\n        this.fadein = true;\n      }\n      this.render();\n      this.animationID = requestAnimationFrame(this.loop.bind(this));\n    }\n  }\n\n  render() {\n    this.clear();\n    this.context.beginPath();\n\n    this.context.globalAlpha = this.alpha;\n    \n    this.context.fillStyle = \"#0a205a\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n    let res = this.resources.get('images/splash/ler-logo.png');\n    this.context.drawImage(res, this.canvas.width/2 - 150, this.canvas.height/2 - 150);\n\n\n    this.context.drawImage(this.resources.get('images/splash/udacity-logo.png'), 104, 550);\n\n    this.context.font = \"20px Arial\";\n    this.context.fillStyle = \"#FFFFFF\";\n    this.context.textAlign = \"center\";\n    this.context.fillText('Front-End Web Developer', this.canvas.width/2 + 24, 580);\n  }\n\n  clear() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack:///./js/views/splash_screen.js?");

/***/ })

/******/ });