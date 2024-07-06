import DomElementModel from "../javascript/models/dom_element.js";
import TextModel from "../javascript/models/text.js";
import { sleep } from "../javascript/utilities/sleep.js";
import TextController from "./text.js";

export class AnimationController {
  private domElement: DomElementModel;
  private textController: TextController | null;
  private animationCount: number;

  constructor(
    private texts: TextModel[],
    private numberOfAnimationCharsForCharacter = 3,
  ) {
    this.domElement = new DomElementModel({ tag: "body" });
    this.textController = null;
    this.animationCount = 0;
  }

  // Créer une fonction qui appelle textLoop en envoyant le texte
  animationsLoop = async (): Promise<void> => {
    if (this.animationCount === this.texts.length) return;

    this.textController = new TextController(
      this.texts[this.animationCount],
      this.domElement,
      this.numberOfAnimationCharsForCharacter,
    );
    await this.textController.textLoop();
    await sleep(1100);
    this.animationCount++;
    return this.animationsLoop();
  };
}

export default AnimationController;
