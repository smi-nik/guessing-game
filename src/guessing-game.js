class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.lBound = min;
    this.rBound = max;
  }

  guess() {
    return Math.ceil((this.rBound + this.lBound) / 2);
  }

  lower() {
    this.rBound -= Math.floor((this.rBound - this.lBound) / 2);
  }

  greater() {
    this.lBound += Math.ceil((this.rBound - this.lBound) / 2);
  }
}

module.exports = GuessingGame;
