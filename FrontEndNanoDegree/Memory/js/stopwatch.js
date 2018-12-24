/**
 * Stopwatch
 * 
 * The stopwatch handles the clock that runs while the game is being played.
 * 
 * This code is from a CodePen example posted by Billy Brown
 * https://codepen.io/_Billy_Brown/pen/dbJeh
 * 
 */

let MINUTES_INDEX = 0;
let SECONDS_INDEX = 1;
let HUNDREDTHS_INDEX = 2;


class Stopwatch {
  constructor(display, results) {
    this.running = false;
    this.display = display;
    this.results = results;
    this.reset();
    this.print(this.times);
  }

  reset() {
    this.times = [0, 0, 0];
    this.print();
  }

  start() {
    if (!this.time) this.time = performance.now();
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.step.bind(this));
    }
  }

  stop() {
    this.running = false;
    this.time = null;
  }

  step(timestamp) {
    if(!this.running) return;
    this.calculate(timestamp);
    this.time = timestamp;
    this.print();
    requestAnimationFrame(this.step.bind(this));
  }

  calculate(timestamp) {
    var diff = timestamp - this.time;
    // Hundredths of a second are 100 ms
    this.times[HUNDREDTHS_INDEX] += diff / 10;
    // Seconds are 100 hundredths of a second
    if (this.times[HUNDREDTHS_INDEX] >= 100) {
        this.times[SECONDS_INDEX] += 1;
        this.times[HUNDREDTHS_INDEX] -= 100;
    }
    // Minutes are 60 seconds
    if (this.times[SECONDS_INDEX] >= 60) {
        this.times[MINUTES_INDEX] += 1;
        this.times[SECONDS_INDEX] -= 60;
    }
  }

  print() {
      this.display.innerText = this.formattedTime(this.times);
  }

  formattedTime(times) {
    return `\
            ${format(times[MINUTES_INDEX], 2)}:\
            ${format(times[SECONDS_INDEX], 2)}:\
            ${format(Math.floor(times[HUNDREDTHS_INDEX]), 2)}`;
  }
}

function format(value, count) {
  var result = value.toString();
  for (; result.length < count; --count)
      result = '0' + result;
  return result;
}

