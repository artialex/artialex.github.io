import type { TldrawProps } from 'tldraw';

const baseUrl = import.meta.env.BASE_URL;

export const sans: TldrawProps = {
  assetUrls: {
    fonts: {
      tldraw_sans: `${baseUrl}fonts/Nunito-Regular.ttf`,
      tldraw_sans_italic: `${baseUrl}fonts/Nunito-Italic.ttf`,
      tldraw_sans_bold: `${baseUrl}fonts/Marmelad-Regular.ttf`,
      tldraw_sans_italic_bold: `${baseUrl}fonts/Marmelad-Regular.ttf`,
    },
  },
};
