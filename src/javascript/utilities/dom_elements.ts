import { Tag } from "../../types/Tag.js";

export default {
  insertDomElement: ({ tag, id = "" }: { tag: string; id: string }) =>
    !id ? `<${tag}></${tag}>` : `<${tag} id="${id}"></${tag}>`,
  getDomElement: (elem: string) => document.querySelector<HTMLElement>(elem),
};
