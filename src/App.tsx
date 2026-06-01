import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Typography from '@tiptap/extension-typography';
import 'lucide-static/font/lucide.css';
import { useEffect, useState } from 'react';

import {
  Editor,
  type TLEditorSnapshot,
  Tldraw,
  type TldrawProps,
  debounce,
  getSnapshot,
  tipTapDefaultExtensions,
} from 'tldraw';
import 'tldraw/tldraw.css';
import './colors/colors';
import defaultSnapshot from './defaultSnapshot.json';
import { extensions as iconExtensions } from './modules/icons/icons';

import { mono } from './modules/blocks/block-mono';
import { customLinkExtensions } from './modules/custom-link/custom-link';
import { id, setTitle } from './modules/files/logic';
import { CustomMenuPanel } from './modules/files/ui';

import './modules/blocks/sizes';
import { containsEmoji } from './modules/toolbelt/string';

const assetUrls: TldrawProps['assetUrls'] = {
  fonts: {
    tldraw_draw: '/fonts/MorningBreeze-Light.otf',
    tldraw_draw_italic: '/fonts/MorningBreeze-Light.otf',
    tldraw_draw_bold: '/fonts/PlaypenSans-Bold.ttf',

    ...mono.assetUrls?.fonts,
  },
};

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
              ...customLinkExtensions,
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
            if (!containsEmoji(page.name)) {
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
