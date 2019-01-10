import GameBoard from './views/game_board';

import Player from './sprites/player';
import Enemy from './sprites/enemy';
import Toolbox from './sprites/toolbox';
import Collectible from './sprites/collectible';
import Health from './sprites/health';
import Score from './sprites/score';
import Satchel from './sprites/satchel';

import GameOver from './views/game_over';


/**
 * Game View
 */

export default class Game {
  constructor(state) {
    this.state = state;

    this.over = new GameOver(state);

    this.board = new GameBoard(state);

    this.score = new Score(state);
    this.satchel = new Satchel(state);
    this.health = new Health(state);
    this.toolbox = new Toolbox(state);
    this.player = new Player(state);
    this.collectible = new Collectible(state);
    this.enemies = [];

    this.init();
  }

  init() {
    this.createEnemies();
    this.setupKeyboardListener()
  }

  start() {
    this.state.game.engine.start(this.update.bind(this));
    this.player.sprite.src = this.state.options.character;
    if (!this.collectible.item) {
      this.collectible.generateCollectible();
    }
  }

  stop() {
    this.state.game.engine.gameContext.clearRect(0, 0, this.state.game.engine.gameCanvas.width, this.state.game.engine.gameCanvas.height);
    this.state.game.engine.stop();

    this.score.reset();
    this.satchel.removeItem();
    this.health.reset();
    this.collectible.remove();
    this.player.reset();

    const row = [
      {x:0, y:125},
      {x:0, y:210},
      {x:0, y:295},
      {x:0, y:380}
    ]

    for(let i = 0; i < row.length; i++) {
      this.enemies[i].reset(row[i]);
    }
    this.render();
  }

  render() {
    this.board.render();
    this.score.render();
    this.satchel.render();
    this.health.render();

    this.toolbox.render();
    this.collectible.render();

    // render dead player z-index lower than enemy
    // gives effect of enemy going over splat
    if (this.player.isDead) {
      this.player.render();
    }

    this.enemies.forEach(enemy => enemy.render());
    
    // render active player z-index higher than enemy
    // gives better depth to view
    if (!this.player.isDead) {
      this.player.render();
    }
     
  }

  update(dt) {
    if (!this.state.game.status.paused) {
      this.enemies.forEach(enemy => enemy.update(dt));
    } else {
      this.enemies.forEach(enemy => enemy.stopSoundEffect())
    }
    
    this.render();
    this.detect();      
  }

  detect() {

    // enemy collision
    if (!this.player.isDead) {
      this.enemies.forEach(enemy => {
        if (this.collides(this.player.collisionPos(), enemy.collisionPos())) {
          this.health.removeHealth();
          this.satchel.removeItem();

          if (!this.collectible.item) {
            this.collectible.generateCollectible();
          }

          if (this.health.value === 0) {
            this.state.game.status.over = true;
            this.state.game.status.playing = false;
            this.over.render();

            this.enemies.forEach(enemy => enemy.stopSoundEffect())
          }

          this.player.death();

        }
      })
    }

    // collectible collision
    if (this.collides(this.player.collisionPos(), this.collectible.collisionPos())) {
      this.satchel.item = Object.assign({}, this.collectible.item);
      this.collectible.remove();
    }

    // toolbox collision
    if (this.collides(this.player.collisionPos(), this.toolbox.collisionPos())
        && this.satchel.item) {
      this.score.addPoints(this.satchel.item.points);
      this.satchel.removeItem();
      this.collectible.generateCollectible();
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


  createEnemies() {
    const row = [
      {x:0, y:125},
      {x:0, y:210},
      {x:0, y:295},
      {x:0, y:380}
    ]

    for(let i = 0; i < row.length; i++) {
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
          if(!this.state.game.status.paused && !this.state.game.status.over) {
            this.player.handleInput(allowedKeys[e.keyCode]);
          }
          break;
        }
      }
    });
  }
}