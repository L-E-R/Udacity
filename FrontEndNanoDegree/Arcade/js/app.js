import BaseSprite from './sprites/base_sprite';
import BaseView from './views/base_view';

import Game from './game';
import GameStateObservable from './helpers/game_state_observable';

import SplashScreen from './views/splash_screen';
import GameMenu from './views/game_menu';
import GameHelp from './views/game_help';
import GameOptions from './views/game_options';
import GamePause from './views/game_pause';
import GameOver from './views/game_over';



let App = (function () {

  let state = {};
  let splash, menu, help, options ,game, pause, over;
  
  /* Setup Observable for maintaining Game State */
  const subscription = new GameStateObservable(
        onStateUpdate,
        (err) => console.error(err), 
        () => console.log('complete'));

  /* Update Game State */
  function onStateUpdate(value) {
    state = value;
    BaseSprite.state = state;
    BaseView.state = state;

    if (state.game.status.initializing) {
      state.game.status.initializing = false;
      doSplash();
    }
  }

  /* Display the Splash Screen */
  function doSplash() {
    splash = new SplashScreen();
    splash.animation().then(doGameSetup);
  } 

  /* Setup Game Objects */
  function doGameSetup() {
    menu = new GameMenu();
    help = new GameHelp();
    options = new GameOptions();
  
    game = new Game(state);
    pause = new GamePause();
    over = new GameOver();

    doGameMenu();
  }

  /* Render the Game Menu */
  function doGameMenu() {    
    menu.render();
  }


  /* Handle Keyboard Input for the App */
  document.addEventListener('keyup', e => {
    if (!state.game.status.initializing) {
      var allowedKeys = {
          13: 'enter',
          27: 'esc',
          72: 'h',
          79: 'o'
      };

      switch (allowedKeys[e.keyCode]) {
        case 'enter': {
          if (!state.game.status.playing &&
              !state.game.status.paused &&
              !state.game.status.over &&
              !state.game.status.help &&
              !state.game.status.options) {         // Game Menu --> Game
            state.game.status.playing = true;
            menu.close();
            game.start();
          } else if (state.game.status.paused) {    // Game Paused --> Game
            state.game.status.paused = false;
            state.game.status.playing = true;
            pause.clear();
          } else if (state.game.status.over) {      // Game Over --> New Game
            state.game.status.over = false;
            state.game.status.playing = true;
            over.clear();
            game.stop();
            game.start();
          }
          break;
        }
        case 'esc': {
          if (state.game.status.playing) {         // Game --> Game Paused
            state.game.status.playing = false;
            state.game.status.paused = true;
            pause.render();
          } else if (state.game.status.paused) {    // Game Paused --> Game Menu
            state.game.status.playing = false;
            state.game.status.paused = false;
            state.game.status.menu = true;
            pause.clear();
            game.stop();
            menu.render();
          } else if (state.game.status.over) {      // Game Over --> Game Menu
            state.game.status.over = false;
            state.game.status.menu = true;
            over.clear();
            game.stop();
            menu.render();
          } else if (state.game.status.help) {     // Game Help --> Game Menu
            state.game.status.help = false;
            state.game.status.menu = true;
            help.close();
            menu.render();
          } else if (state.game.status.options) {   // Game Options --> Game Menu
            state.game.status.options = false;
            state.game.status.menu = true;
            options.close();
            menu.render();
          }
          break;
        }
        case 'h': {
          if(!state.game.status.playing && !state.game.status.paused) {
            state.game.status.help = true;
            help.render();
          }
          break;
        }
        case 'o': {
          if(!state.game.status.playing && !state.game.status.paused) {
            state.game.status.options = true;
            options.render();
          }
          break;
        }
      }
    }
  });

})(this);
