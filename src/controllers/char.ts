import DomElementModel from "../javascript/models/dom_element.js";
import RandomCharModel from "../javascript/models/random_char.js";
import { sleep } from "../javascript/utilities/sleep.js";

class CharController {
  private animationEnd: unknown;
  private randomChar: RandomCharModel | null;
  private charCount: number;
  constructor(
    private domElem: DomElementModel,
    private numberOfAnimationCharsForCharacter: number,
  ) {
    this.animationEnd = false;
    this.numberOfAnimationCharsForCharacter =
      numberOfAnimationCharsForCharacter;
    this.randomChar = null;
    this.charCount = 0;
  }

  randomLetterLoop = (
    { renderedText, nextLetter }: { renderedText: string; nextLetter: string },
  ) => { // recursion
    return new Promise(async (resolve) => {
      if (this.animationEnd) return resolve(true);

      this.randomChar = new RandomCharModel();
      this.animationEnd = await this.#intervalForRandomChar({
        renderedText,
        nextLetter,
      });

      return resolve(this.randomLetterLoop({ renderedText, nextLetter }));
    });
  };

  #intervalForRandomChar = (
    { renderedText, nextLetter }: { renderedText: string; nextLetter: string },
  ) => {
    let galette;

    if (this.charCount === this.numberOfAnimationCharsForCharacter) {
      this.domElem.insertCharToParagraph({ renderedText, char: nextLetter });
      this.charCount = 0;
      galette = true;
    } else {
      this.domElem.insertCharToParagraph({
        renderedText,
        char: this.randomChar ? this.randomChar.char : "",
      });
      this.charCount++;
      galette = false;
    }
    return sleep(20, galette);
  };
}

export default CharController;
