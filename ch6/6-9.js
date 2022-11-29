export class Reading {
  #customer;

  #quantity;

  #month;

  #year;

  #taxThreshold = 0.1;

  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }

  get quantity() {
    return this.#quantity;
  }

  get month() {
    return this.#month;
  }

  get year() {
    return this.#year;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseRate - this.#taxThreshold);
  }
}

const reading = new Reading({
  customer: 'ivan', quantity: 10, month: 5, year: 2017,
});

export function acquireReading() {
  return reading;
}
