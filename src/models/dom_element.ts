import { getDomElement, insertDomElement } from "../utilities/dom_elements.js";

export default class DomElementModel {
  private domElementBody: Element | null;
  private elementToInsertLetterIn: HTMLElement | null;
  constructor({ tag }: { tag: string }) {
    this.domElementBody = getDomElement(tag);
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
        insertDomElement({ tag: "p", id: "letter" }),
      );
    }
    this.elementToInsertLetterIn = getDomElement("#letter");
  };
}
