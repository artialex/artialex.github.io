import type { TldrawProps } from 'tldraw';

const baseUrl = import.meta.env.BASE_URL;

// Good sans fonts: Jost, Ysabeau

export const sans: TldrawProps = {
  assetUrls: {
    fonts: {
      tldraw_sans: `${baseUrl}fonts/NationalPark-Regular.ttf`,
      tldraw_sans_italic: `${baseUrl}fonts/SofiaSans-Italic.ttf`,
      tldraw_sans_bold: `${baseUrl}fonts/NationalPark-SemiBold.ttf`,
      tldraw_sans_italic_bold: `${baseUrl}fonts/NationalPark-Regular.ttf`,
    },
  },
};
