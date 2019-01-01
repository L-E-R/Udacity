import GameState from './helpers/game_state';
import GameEngine from './helpers/game_engine';
import GameResources from './helpers/game_resources';

import SplashScreen from './views/splash_screen';
import GameMenu from './views/game_menu';
import GameHelp from './views/game_help';
import GameOptions from './views/game_options';
import Game from './views/game';
import GamePause from './views/game_pause';
import GameOver from './views/game_over';


let App = (function () {
  let state = new GameState();
  state.engine = new GameEngine();
  state.resources = new GameResources(splashAnimation);
 
  // debug statement to show collision rect on sprite objects
  state.showCollisionRect = true;


  const splash = new SplashScreen(state);

  const menu = new GameMenu(state);
  const help = new GameHelp(state);
  const options = new GameOptions(state);

  const game = new Game(state);
  const pause = new GamePause(state);
  const over = new GameOver(state);

  const app = {
    initializing: true,
    playing: false,
    paused: false,
    over: false
  }



  function splashAnimation() {
    splash.animation().then(displayMenu);
  } 

  function displayMenu() {
    app.initializing = false;
    menu.render();
  }

  document.addEventListener('keyup', e => {
    if (!app.initializing) {
      var allowedKeys = {
          13: 'enter',
          27: 'esc',
          72: 'h',
          79: 'o'
      };

      switch (allowedKeys[e.keyCode]) {
        case 'enter': {
          if (!app.playing) {
            menu.close();
            app.playing = true;
            game.start();
          } else if (app.playing && app.paused) {
            app.paused = false;
            pause.clear();
            game.resume();
          }
          break;
        }
        case 'esc': {
          if (app.playing && !app.paused) {
            app.paused = true;
            game.pause();
            pause.render();
          } else if (app.playing && app.paused) {
            app.playing = false;
            app.paused = false;
            menu.render();
            game.stop();
            pause.clear();
          }
           break;
        }
        case 'h': {
          if(!app.playing && !app.paused) {
            help.render();
          }
          break;
        }
        case 'o': {
          if(!app.playing && !app.paused) {
            options.render();
          }
          break;
        }
      }
    }
  });

})(this);


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// enemy1 = new Enemy({x:0, y:125});
// enemy2 = new Enemy({x:0, y:210});
// enemy3 = new Enemy({x:0, y:295});
// allEnemies = [enemy1, enemy2, enemy3];

// player = new Player();


// app listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify app.
// document.addEventListener('keyup', function(e) {

//     var allowedKeys = {
//         37: 'left',
//         38: 'up',
//         39: 'right',
//         40: 'down'
//     };

//     player.handleInput(allowedKeys[e.keyCode]);
// });
