/**
 * Splash Screen View
 */

export default class SplashScreen {
  constructor(state) {
    this.state = state;

    this.canvas = this.state.engine.splashCanvas;
    this.context = this.state.engine.splashContext;
    this.resources = this.state.resources;

    this.alpha = 0;
    this.delta = 0.01;
    this.fadein = false;
    this.fadeout = false;
  }

  animation() {
    this.promise = new Promise((resolve) => {
      this.resolve = resolve;
      this.loop();
    });
    return this.promise;
  }

  loop() {  
    this.alpha += this.delta;

    if (this.fadein && this.fadeout) {
      this.clear();
      cancelAnimationFrame(this.animationID);
      this.context.globalAlpha = 1;
    } else {
      if (this.alpha <= 0) {
        this.delta = -this.delta;
        this.fadeout = true;
      } else if (this.alpha >= 1) {
        this.resolve();
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while(d2-d < 2000);

        this.delta = -this.delta;
        this.fadein = true;
      }
      this.render();
      this.animationID = requestAnimationFrame(this.loop.bind(this));
    }
  }

  render() {
    this.clear();
    this.context.beginPath();

    this.context.globalAlpha = this.alpha;
    
    this.context.fillStyle = "#0a205a";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.drawImage(this.resources.get('images/LER-logo.png'), this.canvas.width/2 - 150, this.canvas.height/2 - 150);


    this.context.drawImage(this.resources.get('images/udacity-logo.png'), 104, 550);

    this.context.font = "20px Arial";
    this.context.fillStyle = "#FFFFFF";
    this.context.textAlign = "center";
    this.context.fillText('Front-End Web Developer', this.canvas.width/2 + 24, 580);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}