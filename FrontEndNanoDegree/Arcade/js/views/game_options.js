import BaseView from "./base_view";

/**
 * Game Options View
 */

export default class GameOptions extends BaseView {

  constructor() {
    super();
    this.init();
  }


  /* Initialize Class Variables */
  init() {

    this.setupKeyboardListener();

    this.selectedCharacter = new Image();
    this.selectedCharacter.src = this.options.character;

    this.selectedOption = new Image();
    this.selectedOption.src = this.options.difficulty;

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

    this.sprite_easy = new Image();
    this.sprite_easy._x = 50;
    this.sprite_easy._y = 425;
    this.sprite_easy.src = 'images/buttons/easy.png';
    this.sprite_easy.enemyspeed = 1;

    this.sprite_medium = new Image();
    this.sprite_medium._x = 175;
    this.sprite_medium._y = 425;
    this.sprite_medium.src = 'images/buttons/medium.png';
    this.sprite_medium.enemyspeed = 2;

    this.sprite_hard = new Image();
    this.sprite_hard._x = 350;
    this.sprite_hard._y = 425;
    this.sprite_hard.src = 'images/buttons/hard.png';
    this.sprite_hard.enemyspeed = 3;

  }

  /* Render Sprite Object to the Canvas */
  render() {
    let ctx = this.modalContext;
    let cnv = this.modalCanvas;

    document.querySelector('canvas').addEventListener("click", this.onCanvasClick.bind(this), false);
    
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.font = "50px IMPACT";
    ctx.textAlign = "center";

    ctx.strokeStyle = "#b6ff60"
    ctx.strokeText("Game Options", cnv.width/2, 75);

    ctx.font = "20px Arial";
    ctx.fillStyle = "#FFFFFF";

    ctx.textAlign = "left";
    ctx.font = "20px Arial";
    ctx.fillText("Character", 35, 125);

    this.drawSprite(this.sprite_a, this.sprite_a._x, this.sprite_a._y);
    this.drawSprite(this.sprite_b, this.sprite_b._x, this.sprite_b._y);
    this.drawSprite(this.sprite_c, this.sprite_c._x, this.sprite_c._y);
    this.drawSprite(this.sprite_d, this.sprite_d._x, this.sprite_d._y);
    this.drawSprite(this.sprite_e, this.sprite_e._x, this.sprite_e._y);

    ctx.fillText("Difficulty", 35, 400);
   
    this.drawSprite(this.sprite_easy, this.sprite_easy._x, this.sprite_easy._y);
    this.drawSprite(this.sprite_medium, this.sprite_medium._x, this.sprite_medium._y);
    this.drawSprite(this.sprite_hard, this.sprite_hard._x, this.sprite_hard._y);

    ctx.textAlign = "center";
    ctx.fillStyle = "#99bd98";
    ctx.fillText("Press S To Save Changes", cnv.width/2, cnv.height - 75);

    ctx.fillText("Press Esc For Game Menu", cnv.width/2, cnv.height - 25);
  }


  /* Clear the Modal Canvas to Simulate Modal Close */
  close() {
    this.modalContext.clearRect(0, 0, this.modalCanvas.width, this.modalCanvas.height);
    document.querySelector('canvas').removeEventListener("click", this.onCanvasClick.bind(this));
  }


  /* Helper Methods */
  drawSprite(sprite, x, y) {
    let ctx = this.modalContext;

    ctx.drawImage(sprite, x, y);

    if (sprite.src === this.selectedCharacter.src) {
      ctx.beginPath();
      ctx.rect(x + 10, y + 50, 80, 90);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'lightgray';
      ctx.stroke();
    }
    if (sprite.src === this.selectedOption.src) {
      let width = sprite.src === this.sprite_medium.src ? 170 : 120;
      ctx.beginPath();
      ctx.rect(x, y, width, 50);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'lightgray';
      ctx.stroke();
    }
  }

  onCanvasClick(e) {
    let position = this.clickPosition(e);
    
    if (this.collides(position, this.sprite_a)) {
      this.selectedCharacter = this.sprite_a
    } else if (this.collides(position, this.sprite_b)) {
      this.selectedCharacter = this.sprite_b
    } else if (this.collides(position, this.sprite_c)) {
      this.selectedCharacter = this.sprite_c
    } else if (this.collides(position, this.sprite_d)) {
      this.selectedCharacter = this.sprite_d
    } else if (this.collides(position, this.sprite_e)) {
      this.selectedCharacter = this.sprite_e
    }

    if (this.collides(position, this.sprite_easy)) {
      this.selectedOption = this.sprite_easy;
    } else if (this.collides(position, this.sprite_medium)) {
      this.selectedOption = this.sprite_medium;
    } else if (this.collides(position, this.sprite_hard)) {
      this.selectedOption = this.sprite_hard;
    }

    this.modalContext.clearRect(0, 0, this.modalCanvas.width, this.modalCanvas.height);
    this.render();
    
  }
  
  collides(position, sprite) {
    return position.x < sprite._x + sprite.width  && position.x >= sprite._x &&
           position.y < sprite._y + sprite.height && position.y >= sprite._y
  }

  clickPosition(e) {
  	var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
      x = e.pageX;
      y = e.pageY;
    }
    x -= this.modalCanvas.offsetLeft;
    y -= this.modalCanvas.offsetTop;

    return {x:x, y:y};
  }


  /* Handle Keyboard Input for the Context */
  setupKeyboardListener() {
    document.addEventListener('keyup', e => {
      var allowedKeys = {
        83: 's'
      };
  
      switch (allowedKeys[e.keyCode]) {
        case 's': {
          if(!this.status.playing && !this.status.paused) {
            let index = this.selectedCharacter.src.indexOf('images');
            this.options.character = this.selectedCharacter.src.slice(index, this.selectedCharacter.src.length);
            this.options.difficulty = this.selectedOption.src.slice(index, this.selectedOption.src.length);
            this.options.enemyspeed = this.selectedOption.enemyspeed;
          }
          break;
        }
      }
    });
  }

}