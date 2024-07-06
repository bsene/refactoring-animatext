import DomElementModel from "../models/dom_element.js";
import TextModel from "../models/text.js";
import CharController from "./char.js";

class TextController {
  private charController: CharController | null;
  private charCount: number;
  constructor(
    private text: TextModel,
    private domElement: DomElementModel,
    private numberOfAnimationCharsForCharacter: number,
  ) {
    this.charController = null;
    this.charCount = 0;
  }

  textLoop = async () => {
    while (this.charCount < this.text.initialText.length) {
      this.text.setRenderedTextAndNextLetter({ counter: this.charCount });

      this.charController = new CharController(
        this.domElement,
        this.numberOfAnimationCharsForCharacter,
      );

      await this.charController.randomLetterLoop({
        renderedText: this.text.renderedText ?? "",
        nextLetter: this.text.nextLetter ?? "",
      });

      this.charCount++;
    }
  };
}

export default TextController;
