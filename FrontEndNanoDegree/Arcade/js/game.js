import GameBoard from './views/game_board';

import Player from './sprites/player';
import Enemy from './sprites/enemy';
import Toolbox from './sprites/toolbox';
import Collectible from './sprites/collectible';
import Health from './sprites/health';
import Score from './sprites/score';

import GameOver from './views/game_over';


/**
 * Game View
 */

export default class Game {
  constructor(state) {
    this.state = state;
    this.engine = this.state.engine;
    this.context = this.state.gameContext;
    this.canvas = this.state.gameCanvas;

    this.over = new GameOver(this.state);

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
      if (this.collides(this.player.collisionPos(), enemy.collisionPos())) {
        this.health.removeHealth();
        this.player.store = 0;
        this.player.reset();

        if (this.health.value === 0) {
          this.pause();
          this.over.render();
        }
      }
    })

    // collectible collision
    if (this.collides(this.player.collisionPos(), this.collectible.collisionPos())) {
      this.collectible.remove();
      this.player.store = this.collectible.value;
    }

    // toolbox collision
    if (this.collides(this.player.collisionPos(), this.toolbox.collisionPos())) {
      this.score.addPoints(this.player.store);
      this.player.store = 0;
    }
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
            this.player.handleInput(allowedKeys[e.keyCode]);
          }
          break;
        }
      }
    });
  }
}