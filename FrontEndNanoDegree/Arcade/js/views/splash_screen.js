import BaseView from "./base_view";

/**
 * Splash Screen View
 */

export default class SplashScreen extends BaseView {

  constructor() {
    super();
    this.init();
  }

  /* Initialize Class Variables */
  init() {
    this.alpha = 0;
    this.delta = 0.01;
    this.fadein = false;
    this.fadeout = false;
  }

  /* Render Content to the Canvas */
  render() {
    let ctx = this.splashContext;
    let cnv = this.splashCanvas;

    this.clear();
    ctx.beginPath();

    ctx.globalAlpha = this.alpha;
    
    ctx.fillStyle = "#0a205a";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    let res = this.resources.get('images/splash/ler-logo.png');
    ctx.drawImage(res, cnv.width/2 - 150, cnv.height/2 - 150);

    ctx.drawImage(this.resources.get('images/splash/udacity-logo.png'), 104, 550);

    ctx.font = "20px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText('Front-End Web Developer', cnv.width/2 + 24, 580);
  }

  /* Clear the Modal Canvas to Simulate Modal Close */
  clear() {
    this.splashContext.clearRect(0, 0, this.splashCanvas.width, this.splashCanvas.height);
  }


  /* Helper Methods */
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
      this.splashContext.globalAlpha = 1;
    } else {
      if (this.alpha <= 0) {
        this.delta = -this.delta;
        this.fadeout = true;
      } else if (this.alpha >= 1) {
        this.resolve();
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while(d2-d < 1000);

        this.delta = -this.delta;
        this.fadein = true;
      }
      this.render();
      this.animationID = requestAnimationFrame(this.loop.bind(this));
    }
  }

}