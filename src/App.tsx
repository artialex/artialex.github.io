import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Typography from '@tiptap/extension-typography';
import 'lucide-static/font/lucide.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Editor,
  TldrawUiButton,
  type TLEditorSnapshot,
  Tldraw,
  type TldrawProps,
  tipTapDefaultExtensions,
  useEditor,
  createShapeId,
} from 'tldraw';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';

import 'tldraw/tldraw.css';
import './colors/colors';
import { extensions as iconExtensions } from './modules/icons/icons';

import { customLinkExtensions } from './modules/custom-link/custom-link';
import { getPageId, setTitle } from './modules/notebooks/logic';
import { CustomMenuPanel } from './modules/notebooks/ui';

import './modules/blocks/sizes';
import { containsEmoji } from './modules/toolbelt/string';
import { saveSnapshot } from './modules/persistence/persistence';
import { partition } from './modules/toolbelt/array';
import { draw } from './modules/blocks/block-draw';
import { sans } from './modules/blocks/block-sans';
import { serif } from './modules/blocks/block-serif';
import { mono } from './modules/blocks/block-mono';

import { MATH_SHAPE_TYPE, MathShapeUtil, type MathShape } from './modules/math/math';
import { GRAPH_SHAPE_TYPE, GraphShapeUtil, type GraphShape } from './modules/math/plot';
import { DEFAULT_PROCESSING_CODE, PROCESSING_SHAPE_TYPE, PaperShapeUtil, type PaperShape } from './modules/paper/paper';
import {
  COMPONENT_BLOCK_SHAPE_TYPE,
  ComponentBlockShapeUtil,
  type ComponentBlockShape,
} from './modules/embeddables/embeddable';
import { useEmbeddableHmrVersion } from './modules/embeddables/hmr';

const baseUrl = import.meta.env.BASE_URL;
const withBase = (path: string) => `${baseUrl}${path.replace(/^\//, '')}`;

const shapeUtils = [MathShapeUtil, GraphShapeUtil, PaperShapeUtil, ComponentBlockShapeUtil];

function AddComponentBlockButton() {
  const editor = useEditor();

  return (
    <TldrawUiButton
      type="normal"
      onClick={() => {
        const bounds = editor.getViewportPageBounds();
        const id = createShapeId();

        editor.createShape<ComponentBlockShape>({
          id,
          type: COMPONENT_BLOCK_SHAPE_TYPE,
          x: bounds.center.x - 210,
          y: bounds.center.y - 150,
          props: {},
        });

        editor.select(id);
        editor.setEditingShape(id);
      }}
      style={{
        width: 'max-content',
      }}
    >
      Add component
    </TldrawUiButton>
  );
}

function AddGraphButton() {
  const editor = useEditor();

  return (
    <TldrawUiButton
      type="normal"
      onClick={() => {
        const bounds = editor.getViewportPageBounds();
        const id = createShapeId();

        editor.createShape<GraphShape>({
          id,
          type: GRAPH_SHAPE_TYPE,
          x: bounds.center.x - 210,
          y: bounds.center.y - 150,
          props: {
            w: 420,
            h: 300,
            expr: 'sin(x)',
            xmin: -10,
            xmax: 10,
            ymin: -5,
            ymax: 5,
          },
        });

        editor.select(id);
        editor.setEditingShape(id);
      }}
      style={{
        width: 'max-content',
      }}
    >
      Add plot
    </TldrawUiButton>
  );
}

function AddPaperButton() {
  const editor = useEditor();

  return (
    <TldrawUiButton
      type="normal"
      onClick={() => {
        const point = editor.getViewportPageBounds().center;

        editor.createShape<PaperShape>({
          type: PROCESSING_SHAPE_TYPE,
          x: point.x - 160,
          y: point.y - 60,
          props: {
            w: 320,
            h: 120,
            code: DEFAULT_PROCESSING_CODE,
          },
        });
      }}
      style={{
        width: 'max-content',
      }}
    >
      Add paper
    </TldrawUiButton>
  );
}

function AddMathButton() {
  const editor = useEditor();

  return (
    <TldrawUiButton
      type="normal"
      onClick={() => {
        const point = editor.getViewportPageBounds().center;

        editor.createShape<MathShape>({
          type: MATH_SHAPE_TYPE,
          x: point.x - 160,
          y: point.y - 60,
          props: {
            w: 320,
            h: 120,
            latex: String.raw`\int_0^1 x^2\,dx = \frac{1}{3}`,
          },
        });
      }}
      style={{
        width: 'max-content',
      }}
    >
      Add math
    </TldrawUiButton>
  );
}

const assetUrls: TldrawProps['assetUrls'] = {
  fonts: {
    ...draw.assetUrls?.fonts,
    ...sans.assetUrls?.fonts,
    ...serif.assetUrls?.fonts,
    ...mono.assetUrls?.fonts,
  },
};

export const App = () => {
  const location = useLocation();
  const id = getPageId(location.pathname);

  const [editor, setEditor] = useState<Editor | null>(null);
  const [snapshot, setSnapshot] = useState<TLEditorSnapshot | null>(null);
  const [loadedWithError, setLoadedWithError] = useState(false);
  const embeddableHmrVersion = useEmbeddableHmrVersion();

  useEffect(() => {
    fetch(withBase(`data/${id}.json`))
      .then((r) => r.json())
      .then((snapshot) => {
        // console.log(snapshot);
        setSnapshot(snapshot);
      })
      .catch((err) => {
        console.log(err);
        // setSnapshot(defaultSnapshot as unknown as TLEditorSnapshot);
        setLoadedWithError(true);
      });
  }, [id]);

  if (!snapshot) return null;

  const extensions = tipTapDefaultExtensions.filter((_) => !(_.type === 'mark' && _.name === 'link'));
  const tldrawKey = id + ':' + embeddableHmrVersion;

  return (
    <div style={{ position: 'fixed', inset: 0 }} className={import.meta.env.PROD ? 'prod' : 'dev'}>
      <Tldraw
        key={tldrawKey}
        deepLinks
        shapeUtils={shapeUtils}
        components={{
          MenuPanel: () => (
            <CustomMenuPanel id={id}>
              <span id="saved-status" style={{ color: 'green' }}>
                Saved
              </span>
              <AddMathButton />
              <AddGraphButton />
              <AddPaperButton />
              <AddComponentBlockButton />
            </CustomMenuPanel>
          ),
        }}
        textOptions={{
          tipTapConfig: {
            extensions: [
              ...extensions,
              ...customLinkExtensions,
              Superscript,
              Subscript,
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
            setTitle(editor, id);

            setShapeCount(...getHeaderCount(editor));

            if (import.meta.env.PROD) {
              editor.zoomToFit();
            }
          }
        }}
        getShapeVisibility={(shape) => {
          if (import.meta.env.DEV) {
            return 'inherit';
          }

          if ('color' in shape.props && shape.props.color === 'light-violet') {
            return 'hidden';
          }

          return 'inherit';
        }}
        onMount={(editor) => {
          setEditor(editor);

          // Set dark mode always by default
          // editor.user.updateUserPreferences({ colorScheme: 'dark' });

          // hide some pages
          const [visiblePages, invisiblePages] = partition(editor.getPages(), (page) => {
            return containsEmoji(page.name);
          });

          for (const page of invisiblePages) {
            if (!containsEmoji(page.name)) {
              const style = document.createElement('style');
              style.textContent = `
                [data-pageid="${page.id}"] {
                  ${import.meta.env.DEV ? 'opacity: 0.5;' : 'display: none;'}
                }
              `;
              document.head.appendChild(style);

              if (import.meta.env.PROD && editor.getCurrentPage()?.id === page.id && visiblePages.length > 0) {
                editor.setCurrentPage(visiblePages[0].id);
              }
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
          setTitle(editor, id);

          // Make stuff read-only in PROD
          if (import.meta.env.PROD) {
            editor.updateInstanceState({ isReadonly: true });

            editor.zoomToFit();
          }

          if (import.meta.env.DEV && !loadedWithError) {
            setShapeCount(...getHeaderCount(editor));
            saveSnapshot(
              editor.store,
              id,
              () => {
                console.log('unsaved');

                document.getElementById('saved-status')!.style.color = 'red';
                document.getElementById('saved-status')!.textContent = 'Unsaved';
              },
              () => {
                console.log('saved');
                document.getElementById('saved-status')!.style.color = 'green';
                document.getElementById('saved-status')!.textContent = 'Saved';
              },
            );
          }
        }}
      />
    </div>
  );
};

function getHeaderCount(editor: Editor) {
  let h1Count = 0;
  let h2Count = 0;
  let h3Count = 0;
  editor.getCurrentPageShapes().forEach((shape) => {
    if (shape.type === 'text') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const headings = shape.props?.richText?.content.filter((_: { type: string }) => _.type === 'heading');

      headings.forEach((heading: { attrs: { level: number } }) => {
        switch (heading.attrs.level) {
          case 1:
            h1Count += 1;
            break;
          case 2:
            h2Count += 1;
            break;
          case 3:
            h3Count += 1;
            break;
        }
      });
    }
  });
  return [h1Count, h2Count, h3Count];
}

function setShapeCount(h1Count: number = 0, h2Count: number = 0, h3Count: number = 0) {
  const el = document.getElementById('shape-count');

  if (el) el.textContent = `Headings: ${h1Count} / ${h2Count} / ${h3Count}`;
}
