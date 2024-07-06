export const insertDomElement = (
  { tag, id = "" }: { tag: string; id: string },
) => !id ? `<${tag}></${tag}>` : `<${tag} id="${id}"></${tag}>`;

export const getDomElement = (elem: string) =>
  document.querySelector<HTMLElement>(elem);
