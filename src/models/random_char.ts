import { randomInt } from "../utilities/math.js";

export default class RandomCharModel {
  public char: string;
  constructor() {
    this.char = this.generateRandomChar();
  }
  generateRandomChar = () => {
    return String.fromCharCode(randomInt(97) + 32);
  };
}
