import type { TldrawProps } from 'tldraw';

const baseUrl = import.meta.env.BASE_URL;

export const mono: TldrawProps = {
  assetUrls: {
    fonts: {
      tldraw_mono: `${baseUrl}fonts/mononoki-Regular.ttf`,
      tldraw_mono_italic: `${baseUrl}fonts/mononoki-Italic.ttf`,
      tldraw_mono_bold: `${baseUrl}fonts/mononoki-Bold.ttf`,
      tldraw_mono_italic_bold: `${baseUrl}fonts/mononoki-BoldItalic.ttf`,
    },
  },
};

// Alternative fonts: Anonymous Pro, Geist Mono, JetBrains Mono
