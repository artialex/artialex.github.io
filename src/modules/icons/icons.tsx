import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";

export const Emoji = Node.create({
  name: "icon",
  group: "inline",
  inline: true,

  addAttributes() {
    return {
      name: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-lucide"),
        renderHTML: (attributes) => ({
          "data-lucide": attributes.name,
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "span[data-lucide]" }];
  },

  // <i data-lucide="menu"></i>
  renderHTML({ node, HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(HTMLAttributes, {
        "data-lucide": node.attrs.name,
        class: `icon-${node.attrs.name}`,
      }),
      " ",
    ];
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /(:([a-z0-9-]+):)/,
        type: this.type,
        getAttributes: (match) => ({
          name: match[2],
        }),
      }),

      nodeInputRule({
        find: /\[ \]/,
        type: this.type,
        getAttributes: () => ({ name: "square" }),
      }),
      nodeInputRule({
        find: /\[x\]/,
        type: this.type,
        getAttributes: () => ({ name: "square-check" }),
      }),
      nodeInputRule({
        find: /\[\/\]/,
        type: this.type,
        getAttributes: () => ({ name: "square-slash" }),
      }),
      nodeInputRule({
        find: /^& /,
        type: this.type,
        getAttributes: () => ({ name: "check" }),
      }),
      nodeInputRule({
        find: /^= /,
        type: this.type,
        getAttributes: () => ({ name: "equal" }),
      }),
      nodeInputRule({
        find: /^@ /,
        type: this.type,
        getAttributes: () => ({ name: "box" }),
      }),
      nodeInputRule({
        find: /^! /,
        type: this.type,
        getAttributes: () => ({ name: "info" }),
      }),
    ];
  },
});

export const extensions = [Emoji];
