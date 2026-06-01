import { useEffect, useState } from 'react';
import Typography from '@tiptap/extension-typography';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import 'lucide-static/font/lucide.css';

import {
  type TldrawProps,
  FONT_SIZES,
  STROKE_SIZES,
  getSnapshot,
  debounce,
  type TLEditorSnapshot,
  Tldraw,
  Editor,
  tipTapDefaultExtensions,
  DefaultPageMenu,
  DefaultMainMenu,
  TldrawUiDropdownMenuRoot,
  TldrawUiDropdownMenuTrigger,
  TldrawUiButton,
  TldrawUiDropdownMenuContent,
  TldrawUiDropdownMenuItem,
  TldrawUiDropdownMenuGroup,
  TldrawUiButtonLabel,
} from 'tldraw';
import 'tldraw/tldraw.css';
import defaultSnapshot from './defaultSnapshot.json';
import './colors/colors';
import { extensions as iconExtensions } from './modules/icons/icons';

import Link from '@tiptap/extension-link';
import { mono } from './modules/blocks/block-mono';
import { files } from './modules/files';

const assetUrls: TldrawProps['assetUrls'] = {
  fonts: {
    tldraw_draw: '/fonts/MorningBreeze-Light.otf',
    tldraw_draw_italic: '/fonts/MorningBreeze-Light.otf',
    tldraw_draw_bold: '/fonts/PlaypenSans-Bold.ttf',

    ...mono.assetUrls?.fonts,
  },
};

console.log(assetUrls);

FONT_SIZES.s = 16;
FONT_SIZES.m = 20;
FONT_SIZES.l = 24;
FONT_SIZES.xl = 28;

STROKE_SIZES.s = 2;
STROKE_SIZES.m = 2;
STROKE_SIZES.l = 4;
STROKE_SIZES.xl = 8;

const CustomLink = Link.extend({
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

function hasEmoji(s: string) {
  return /\p{Extended_Pictographic}/u.test(s);
}

const CustomMenuPanel = () => (
  <div className="tlui-menu-zone">
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        pointerEvents: 'all',
      }}
    >
      <DefaultMainMenu />
      <CustomMapMenu />
      <DefaultPageMenu />
    </div>
  </div>
);

export const App = () => {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [snapshot, setSnapshot] = useState<TLEditorSnapshot | null>(null);
  const [loadedWithError, setLoadedWithError] = useState(false);

  useEffect(() => {
    fetch(`/data/${id}.json`)
      .then((r) => r.json())
      .then((snapshot) => {
        setSnapshot(snapshot);
      })
      .catch((err) => {
        console.log(err);
        setSnapshot(defaultSnapshot as unknown as TLEditorSnapshot);
        setLoadedWithError(true);
      });
  }, []);

  if (!snapshot) return null;

  const extensions = tipTapDefaultExtensions.filter((_) => !(_.type === 'mark' && _.name === 'link'));

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw
        deepLinks
        components={{ MenuPanel: CustomMenuPanel }}
        textOptions={{
          tipTapConfig: {
            extensions: [
              ...extensions,
              CustomLink.configure({
                autolink: false,
                isAllowedUri: (url, ctx) => {
                  if (url.startsWith('/')) return true;
                  return ctx.defaultValidate(url);
                },
              }),
              Typography.configure({
                openDoubleQuote: false,
                openSingleQuote: false,
                closeDoubleQuote: false,
                closeSingleQuote: false,
              }),
              HorizontalRule,
              ...iconExtensions,
            ],
          },
        }}
        snapshot={snapshot}
        assetUrls={assetUrls}
        onUiEvent={(name) => {
          console.log(name);

          if (name === 'change-page' && editor) {
            setTitle(editor);
          }
        }}
        // components={{
        //   PageMenu: () => {
        //     const editor = useEditor();
        //     const pages = useValue("pages", () => editor.getPages(), [editor]);

        //     const visiblePages = pages;

        //     return (
        //       <div>
        //         {visiblePages.map((page) => (
        //           <button
        //             key={page.id}
        //             onClick={() => editor.setCurrentPage(page.id)}
        //           >
        //             {page.name}
        //           </button>
        //         ))}
        //       </div>
        //     );
        //   },
        // }}
        onMount={(editor) => {
          setEditor(editor);

          // hide some pages
          const pages = editor.getPages();
          console.log(pages);

          for (const page of pages) {
            if (!hasEmoji(page.name)) {
              const style = document.createElement('style');
              style.textContent = `
                [data-pageid="${page.id}"] {
                  ${import.meta.env.DEV ? 'opacity: 0.5;' : 'display: none;'}
                }
              `;
              document.head.appendChild(style);
            }
          }

          if (import.meta.env.PROD) {
            const style = document.createElement('style');
            style.textContent = `
              /* HACK to fix list height when skipping some pages */
              [data-testid="page-menu.list"] {
                  height: 100% !important;
              }
            `;
            document.head.appendChild(style);
          }

          // Handle title
          setTitle(editor);

          // Make stuff read-only in PROD
          if (import.meta.env.PROD) {
            editor.updateInstanceState({ isReadonly: true });

            editor.zoomToFit();
          }

          // Auto-save in DEV
          if (import.meta.env.DEV && !loadedWithError) {
            editor.store.listen(
              debounce(() => {
                const snapshot = getSnapshot(editor.store);

                fetch(`/api/save?id=${id}`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(snapshot),
                });
              }, 5000),
              {
                source: 'user',
                scope: 'document',
              },
            );
          }
        }}
      />
    </div>
  );
};
