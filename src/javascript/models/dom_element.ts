import { Tag } from "../../types/Tag.js";
import DOM_ELEMENT_UTILS from "../utilities/dom_elements.js";

export default class DomElementModel {
  private domElementBody: Element | null;
  private elementToInsertLetterIn: HTMLElement | null;
  constructor({ tag }: { tag: string }) {
    this.domElementBody = DOM_ELEMENT_UTILS.getDomElement(tag);
    this.elementToInsertLetterIn = null;
    this.#insertToBody();
  }

  insertCharToParagraph = (
    { renderedText = false, char }: {
      renderedText: boolean | string;
      char: string;
    },
  ) => {
    if (this.elementToInsertLetterIn === null) return;

    this.elementToInsertLetterIn.innerText = renderedText
      ? renderedText + char
      : char;
  };

  #insertToBody = () => {
    if (this.domElementBody) {
      this.domElementBody.insertAdjacentHTML(
        "afterbegin",
        DOM_ELEMENT_UTILS.insertDomElement({ tag: "p", id: "letter" }),
      );
    }
    this.elementToInsertLetterIn = DOM_ELEMENT_UTILS.getDomElement("#letter");
  };
}
