import GameBoard from './game_board';

import Player from '../sprites/player';
import Enemy from '../sprites/enemy';
import Toolbox from '../sprites/toolbox';
import Collectible from '../sprites/collectible';
import Health from '../sprites/health';
import Score from '../sprites/score';


/**
 * Game View
 */

export default class Game {
  constructor(state) {
    this.state = state;
    this.engine = this.state.engine;
    this.context = this.state.gameContext;
    this.canvas = this.state.gameCanvas;

    this.board = new GameBoard(this.state);
    this.score = new Score(this.state);
    this.health = new Health(this.state);
    this.toolbox = new Toolbox(this.state);
    this.player = new Player(this.state);
    this.collectible = new Collectible(this.state);
    this.enemies = [];

    this.paused = false;

    this.init();
  }

  init() {
    this.createEnemies();
    this.setupKeyboardListener()
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  start() {
    this.engine.start(this.update.bind(this));
  }

  stop() {
    this.paused = false;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.engine.stop();
  }

  render() {
    this.board.render();
    this.score.render();
    this.health.render();

    this.toolbox.render();
    this.collectible.render();

    this.player.render();

    this.enemies.forEach(enemy => enemy.render()); 

    
  }

  update(dt) {
    if (!this.paused) {
      this.enemies.forEach(enemy => {
        enemy.update(dt)
      });
    }
      this.render();
      this.detect();
  }

  detect() {

    // enemy collision
    this.enemies.forEach(enemy => {
      if (this.collides(this.player.getCollisionPOS(), enemy.getCollisionPOS())) {
        this.health.removeHealth();
        this.player.reset();
      }
    })

  }

  collides(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
  }

  _getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }


  createEnemies(number = 3) {
    const row = [
      {x:0, y:125},
      {x:0, y:210},
      {x:0, y:295}
    ]

    for(let i = 0; i < number; i++) {
      this.enemies.push(new Enemy(row[i], this.state));
    }
  }

  setupKeyboardListener() {
    document.addEventListener('keyup', e => {

      var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
      };
  
      switch (allowedKeys[e.keyCode]) {
        case 'left':
        case 'up':
        case 'right':
        case 'down': {
          if(!this.paused) {
            this.score.addPoints(10);
            this.player.handleInput(allowedKeys[e.keyCode]);
          }
          break;
        }
      }
    });
  }
}