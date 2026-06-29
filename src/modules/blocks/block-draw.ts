import type { TldrawProps } from 'tldraw';

const baseUrl = import.meta.env.BASE_URL;

export const draw: TldrawProps = {
  assetUrls: {
    fonts: {
      tldraw_draw: `${baseUrl}fonts/MorningBreeze-Light.otf`,
      tldraw_draw_italic: `${baseUrl}fonts/MorningBreeze-Light.otf`,
      tldraw_draw_bold: `${baseUrl}fonts/NerkoOne-Regular.ttf`,
      tldraw_draw_italic_bold: `${baseUrl}fonts/NerkoOne-Regular.ttf`,
    },
  },
};
