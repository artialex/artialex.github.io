import Link from '@tiptap/extension-link';

export const CustomLink = Link.extend({
  renderHTML({ HTMLAttributes }) {
    const href = HTMLAttributes.href ?? '';
    const normalizedHref = href.includes('///') ? href.replace('https://', '') : href;

    return [
      'a',
      {
        ...HTMLAttributes,
        href: normalizedHref,
      },
      0,
    ];
  },
});

export const customLinkExtensions = [
  CustomLink.configure({
    autolink: false,
    isAllowedUri: (url, ctx) => {
      if (url.startsWith('/')) return true;
      return ctx.defaultValidate(url);
    },
  }),
];
