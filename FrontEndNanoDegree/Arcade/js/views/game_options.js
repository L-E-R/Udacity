import BaseView from "./base_view";

/**
 * Game Options View
 */

export default class GameOptions extends BaseView {
  constructor(state) {
    super();

    this.state = state;
    this.init();
  }
  
  init() {
    this.canvas = this.state.game.engine.modalCanvas;
    this.context = this.state.game.engine.modalContext;

    this.setupKeyboardListener();

    this.selectedSprite = new Image();
    this.selectedSprite.src = this.state.options.character;

    this.sprite_a = new Image();
    this.sprite_a._x = 50;
    this.sprite_a._y = 100;
    this.sprite_a.src = 'images/characters/char-boy.png';

    this.sprite_b = new Image();
    this.sprite_b._x = 50;
    this.sprite_b._y = 200;
    this.sprite_b.src = 'images/characters/char-cat-girl.png';

    this.sprite_c = new Image();
    this.sprite_c._x = 200;
    this.sprite_c._y = 100;
    this.sprite_c.src = 'images/characters/char-horn-girl.png';

    this.sprite_d = new Image();
    this.sprite_d._x = 200;
    this.sprite_d._y = 200;
    this.sprite_d.src = 'images/characters/char-pink-girl.png';

    this.sprite_e = new Image();
    this.sprite_e._x = 350;
    this.sprite_e._y = 100;
    this.sprite_e.src = 'images/characters/char-princess-girl.png';
  }

  render() {
    document.querySelector('canvas').addEventListener("click", this.onCanvasClick.bind(this), false);
    
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.font = "50px IMPACT";
    this.context.textAlign = "center";

    this.context.strokeStyle = "#b6ff60"
    this.context.strokeText("Game Options", this.canvas.width/2, 75);

    this.context.font = "20px Arial";
    this.context.fillStyle = "#FFFFFF";

    this.context.textAlign = "left";
    this.context.font = "20px Arial";
    this.context.fillText("Character", 35, 125);

    // TODO: Characters for selection go here
    this.drawSprite(this.sprite_a, this.sprite_a._x, this.sprite_a._y);
    this.drawSprite(this.sprite_b, this.sprite_b._x, this.sprite_b._y);
    this.drawSprite(this.sprite_c, this.sprite_c._x, this.sprite_c._y);
    this.drawSprite(this.sprite_d, this.sprite_d._x, this.sprite_d._y);
    this.drawSprite(this.sprite_e, this.sprite_e._x, this.sprite_e._y);

    this.context.fillText("Difficulty", 35, 400);
    // TODO: Radio buttons go here

    this.context.textAlign = "center";
    this.context.fillStyle = "#99bd98";
    this.context.fillText("Press S To Save Changes", this.canvas.width/2, this.canvas.height - 75);

    this.context.fillText("Press Esc For Game Menu", this.canvas.width/2, this.canvas.height - 25);
  }

  drawSprite(sprite, x, y) {
    this.context.drawImage(sprite, x, y);
    if (sprite.src === this.selectedSprite.src) {
      this.context.beginPath();
      this.context.rect(x + 10, y + 50, 80, 90);
      this.context.lineWidth = 2;
      this.context.strokeStyle = 'lightgray';
      this.context.stroke();
    }
  }

  close() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    document.querySelector('canvas').removeEventListener("click", this.onCanvasClick.bind(this));
  }

  
  onCanvasClick(e) {
    let position = this.clickPosition(e);
    
    if (this.collides(position, this.sprite_a)) {
      this.selectedSprite = this.sprite_a
    } else if (this.collides(position, this.sprite_b)) {
      this.selectedSprite = this.sprite_b
    } else if (this.collides(position, this.sprite_c)) {
      this.selectedSprite = this.sprite_c
    } else if (this.collides(position, this.sprite_d)) {
      this.selectedSprite = this.sprite_d
    } else if (this.collides(position, this.sprite_e)) {
      this.selectedSprite = this.sprite_e
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.render();
    
  }


  collides(a, b) {
    return a.x < b._x + b.width &&
           a.y < b._y + b.height;
  }

  clickPosition(e) {
  	var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
      x = e.pageX;
      y = e.pageY;
    }
    else {
      x = e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
    }
    x -= this.canvas.offsetLeft;
    y -= this.canvas.offsetTop;

    return {x:x, y:y};
  }

  setupKeyboardListener() {
    document.addEventListener('keyup', e => {

      var allowedKeys = {
        83: 's'
      };
  
      switch (allowedKeys[e.keyCode]) {
        case 's': {
          if(!this.state.game.status.playing && !this.state.game.status.paused) {
            let index = this.selectedSprite.src.indexOf('images');
            this.state.options.character = this.selectedSprite.src.slice(index, this.selectedSprite.src.length);
          }
          break;
        }
      }
    });
  }

}