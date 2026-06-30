import type { TldrawProps } from 'tldraw';

const baseUrl = import.meta.env.BASE_URL;

export const mono: TldrawProps = {
  assetUrls: {
    fonts: {
      tldraw_mono: `${baseUrl}fonts/mononoki-Regular.otf`,
      tldraw_mono_italic: `${baseUrl}fonts/mononoki-Italic.otf`,
      tldraw_mono_bold: `${baseUrl}fonts/mononoki-Bold.otf`,
      tldraw_mono_italic_bold: `${baseUrl}fonts/mononoki-BoldItalic.otf`,
    },
  },
};

// Alternative fonts: Anonymous Pro, Geist Mono, JetBrains Mono
