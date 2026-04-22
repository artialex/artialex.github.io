import { useEffect, useState } from "react";
import {
  DefaultColorThemePalette,
  DefaultTextAlignStyle,
  DefaultPageMenu,
  type TldrawProps,
  FONT_SIZES,
  STROKE_SIZES,
  getSnapshot,
  debounce,
  type TLEditorSnapshot,
  Tldraw,
  Editor,
  tipTapDefaultExtensions,
  useEditor,
  useValue,
} from "tldraw";
import "tldraw/tldraw.css";
import defaultSnapshot from "./defaultSnapshot.json";

import Link from "@tiptap/extension-link";

const assetUrls: TldrawProps["assetUrls"] = {
  fonts: {
    tldraw_draw: "/fonts/MorningBreeze-Light.otf",
    tldraw_draw_italic: "/fonts/MorningBreeze-Light.otf",
    tldraw_draw_bold: "/fonts/PlaypenSans-Bold.ttf",

    // tldraw_sans: "/YsabeauOffice-Regular.ttf",
    // tldraw_sans_bold: "/YsabeauOffice-SemiBold.ttf",
    // tldraw_sans_italic: "/YsabeauOffice-Regular.ttf",
    // tldraw_sans_italic_bold: "/YsabeauOffice-Regular.ttf",
    //
    //
    tldraw_mono: "/fonts/fantasquesansmono-regular.otf",
    tldraw_mono_italic: "/fonts/fantasquesansmono-italic.otf",
    tldraw_mono_bold: "/fonts/fantasquesansmono-bold.otf",
    tldraw_mono_italic_bold: "/fonts/fantasquesansmono-bolditalic.otf",

    // tldraw_mono: "/fonts/Anonymous Pro Minus.ttf",
    // tldraw_mono_italic: "/fonts/Anonymous Pro Minus I.ttf",
    // tldraw_mono_bold: "/fonts/Anonymous Pro Minus B.ttf",
    // tldraw_mono_italic_bold: "/fonts/Anonymous Pro Minus BI.ttf",
  },
};

FONT_SIZES.m = 25;

STROKE_SIZES.m = 3;

DefaultColorThemePalette.lightMode.grey.solid = "darkgray";
DefaultColorThemePalette.lightMode.yellow.solid = "#f59e0b";

DefaultColorThemePalette.darkMode["light-violet"].solid = "violet";
DefaultColorThemePalette.darkMode.violet.solid = "hotpink";

DefaultColorThemePalette.darkMode.blue.solid = "dodgerblue";
DefaultColorThemePalette.darkMode["light-blue"].solid = "deepskyblue";
DefaultColorThemePalette.darkMode.yellow.solid = "gold";
DefaultColorThemePalette.darkMode.orange.solid = "darkorange";

DefaultColorThemePalette.darkMode.green.solid = "green";
DefaultColorThemePalette.darkMode["light-green"].solid = "mediumseagreen";

DefaultColorThemePalette.darkMode["light-red"].solid = "crimson";
DefaultColorThemePalette.darkMode.red.solid = "lightsalmon";

DefaultColorThemePalette.darkMode.grey.solid = "dimgray";

const id =
  location.pathname === "/" ? "_index" : location.pathname.replaceAll("/", "_");

const dict: Record<string, string> = {
  _javascript: "JavaScript",
  "_operating-systems": "Operating Systems",
  "_algorithms-n-data-structures": "Algorithms & Data Structures",
  "_computer-hardware-n-architecture": "Computer Hardware & Architecture",
  _pkm: "PKM",
  _index: "ArtiAlex's Pensieve",
  _random: "Random",
  _management: "Management",
  _cg: "Computer Graphics",
  _web: "Web Dev",
  _css: "CSS",
  _algebra: "Algebra",
};

function setTitle(editor: Editor) {
  const page = editor.getCurrentPage();
  const title = page?.name;
  document.title = dict[id] + " • " + title;
}

const CustomLink = Link.extend({
  renderHTML({ HTMLAttributes }) {
    console.log(HTMLAttributes);

    const href = HTMLAttributes.href ?? "";
    return [
      "a",
      {
        ...HTMLAttributes,
        href: href.includes("///") ? href.replace("https://", "") : href,
      },
      0,
    ];
  },
});

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

  const extensions = tipTapDefaultExtensions.filter(
    (_) => !(_.type === "mark" && _.name === "link"),
  );

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        deepLinks
        textOptions={{
          tipTapConfig: {
            extensions: [
              ...extensions,
              CustomLink.configure({
                autolink: false,
                isAllowedUri: (url, ctx) => {
                  if (url.startsWith("/")) return true;
                  return ctx.defaultValidate(url);
                },
              }),
            ],
          },
        }}
        snapshot={snapshot}
        assetUrls={assetUrls}
        onUiEvent={(name) => {
          if (name === "change-page" && editor) {
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
            if (page.name.includes("❌")) {
              const style = document.createElement("style");
              style.textContent = `
                [data-pageid="${page.id}""] {
                  color: red !important;
                }
              `;
              document.head.appendChild(style);
            }
          }

          // QoL features
          editor.setStyleForNextShapes(DefaultTextAlignStyle, "middle");

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
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(snapshot),
                });
              }, 5000),
              {
                source: "user",
                scope: "document",
              },
            );
          }
        }}
      />
    </div>
  );
};
