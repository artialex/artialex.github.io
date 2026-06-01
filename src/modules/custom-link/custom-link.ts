import Link from '@tiptap/extension-link';

export const CustomLink = Link.extend({
  renderHTML({ HTMLAttributes }) {
    console.log(HTMLAttributes);

    const href = HTMLAttributes.href ?? '';
    return [
      'a',
      {
        ...HTMLAttributes,
        href: href.includes('///') ? href.replace('https://', '') : href,
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
