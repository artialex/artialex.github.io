import { DefaultColorThemePalette, defaultColorNames } from "tldraw";

type TLColor = (typeof defaultColorNames)[number];

// Dark Theme
const colors: Record<TLColor, string> = {
  "light-violet": "oklch(74% 0.238 322.16)",
  violet: "oklch(71.4% 0.203 305.504)",
  blue: "oklch(68.5% 0.169 237.323)",
};

const style = document.createElement("style");

for (const [key, color] of Object.entries(colors)) {
  DefaultColorThemePalette.darkMode[key as TLColor].solid = color;
  style.textContent = `
    :where([style*="color: ${color}"], [stroke="${color}"]) {
      --base-color: white;
      --primary-color: ${color};

      stroke: var(--primary-color)
    }
  `;
}

document.head.appendChild(style);

// DefaultColorThemePalette.darkMode["light-violet"].solid = "violet";
// DefaultColorThemePalette.darkMode.violet.solid = "hotpink";

// DefaultColorThemePalette.darkMode.blue.solid = "dodgerblue";
// DefaultColorThemePalette.darkMode["light-blue"].solid = "deepskyblue";
// DefaultColorThemePalette.darkMode.yellow.solid = "gold";
// DefaultColorThemePalette.darkMode.orange.solid = "darkorange";

// DefaultColorThemePalette.darkMode.green.solid = "green";
// DefaultColorThemePalette.darkMode["light-green"].solid = "mediumseagreen";

// DefaultColorThemePalette.darkMode["light-red"].solid = "crimson";
// DefaultColorThemePalette.darkMode.red.solid = "lightsalmon";

// DefaultColorThemePalette.darkMode.grey.solid = "#64748b";

// Light Theme

DefaultColorThemePalette.lightMode.grey.solid = "darkgray";
DefaultColorThemePalette.lightMode.yellow.solid = "#f59e0b";
