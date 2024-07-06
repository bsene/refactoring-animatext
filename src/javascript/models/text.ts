export default class TextModel {
  public initialText: string;
  private content: string;
  public renderedText: string | null;
  public nextLetter: string | null;

  constructor(text: string) {
    this.initialText = text;
    this.content = this.initialText;
    this.renderedText = null;
    this.nextLetter = null;
  }

  setRenderedTextAndNextLetter = ({ counter }: { counter: number }) => {
    this.renderedText = this.content.substring(0, counter);
    this.nextLetter = this.initialText[counter];
  };

  //Créer une fonction qui renvoie
}
