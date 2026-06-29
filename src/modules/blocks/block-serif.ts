import type { TldrawProps } from 'tldraw';

const baseUrl = import.meta.env.BASE_URL;

export const serif: TldrawProps = {
  assetUrls: {
    fonts: {
      tldraw_serif: `${baseUrl}fonts/FiraSans-Regular.ttf`,
      tldraw_serif_italic: `${baseUrl}fonts/FiraSans-Italic.ttf`,
      tldraw_serif_bold: `${baseUrl}fonts/FiraSans-Medium.ttf`,
      tldraw_serif_italic_bold: `${baseUrl}fonts/FiraSans-MediumItalic.ttf`,
    },
  },
};
