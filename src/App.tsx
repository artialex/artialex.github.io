import { useEffect, useState } from "react";
import {
  DefaultColorThemePalette,
  DefaultTextAlignStyle,
  Tldraw,
  type TldrawProps,
  FONT_SIZES,
  STROKE_SIZES,
  getSnapshot,
  throttle,
} from "tldraw";
import "tldraw/tldraw.css";

const assetUrls: TldrawProps["assetUrls"] = {
  fonts: {
    tldraw_draw: "/MorningBreeze-Light.otf",
    tldraw_draw_italic: "/MorningBreeze-Italic.otf",
    tldraw_draw_bold: "/PlaypenSans-Bold.ttf",

    tldraw_sans: "/YsabeauOffice-Regular.ttf",
    tldraw_sans_bold: "/YsabeauOffice-SemiBold.ttf",
    tldraw_sans_italic: "/YsabeauOffice-Regular.ttf",
    tldraw_sans_italic_bold: "/YsabeauOffice-Regular.ttf",
  },
};

FONT_SIZES.m = 25;

STROKE_SIZES.m = 3;

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

const id = location.pathname.replaceAll("/", "_");

export const App = () => {
  const [snapshot, setSnapshot] = useState(null);

  useEffect(() => {
    console.log(id);
    fetch(`/data/${id}.json`)
      .then((r) => r.json())
      .then((snapshot) => {
        setSnapshot(snapshot);
      });
  }, []);

  if (!snapshot) return null;

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        snapshot={snapshot}
        assetUrls={assetUrls}
        onMount={(editor) => {
          editor.setStyleForNextShapes(DefaultTextAlignStyle, "middle");
          const page = editor.getCurrentPage();
          const title = page?.name;
          document.title = title;

          if (import.meta.env.PROD) {
            editor.updateInstanceState({ isReadonly: true });
          }

          editor.store.listen(
            throttle(() => {
              const snapshot = getSnapshot(editor.store);

              fetch(`/api/save?id=${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(snapshot),
              });
            }, 1000),
            {
              source: "user",
              scope: "document",
            },
          );
        }}
      />
    </div>
  );
};
