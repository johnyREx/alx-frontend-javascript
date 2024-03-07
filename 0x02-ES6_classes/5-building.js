export default class Building {
  constructor(sqft = 100) {
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must ovveride evacuationWarnningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
