import { DefaultColorThemePalette, defaultColorNames } from "tldraw";

// Dark Theme
const colors: Record<(typeof defaultColorNames)[number], string> = {
  "light-violet": "oklch(74% 0.238 322.16)",
  violet: "oklch(71.4% 0.203 305.504)",
};

for (const [key, color] of Object.entries(colors)) {
  console.log(key, color);

  DefaultColorThemePalette.darkMode[key].solid = color;
}

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
