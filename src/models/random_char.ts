import { randomInt } from "../utilities/math.js";

class RandomCharModel {
  public char: string;
  constructor() {
    this.char = this.generateRandomChar();
  }
  generateRandomChar = () => {
    return String.fromCharCode(this.#generateRandomCharCode({ maxNum: 97 }));
  };
  #generateRandomCharCode = ({ maxNum }: { maxNum: number }) =>
    randomInt(maxNum) + 32;
}

export default RandomCharModel;
