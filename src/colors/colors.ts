import { DefaultColorThemePalette, defaultColorNames } from 'tldraw';

type TLColor = (typeof defaultColorNames)[number];

// Dark Theme
const colors: Record<TLColor, string> = {
  black: 'white',
  white: 'white',
  grey: 'oklch(55.4% 0.046 257.417)',
  'light-violet': 'oklch(0.74 0.238 322.16)',
  violet: 'oklch(0.714 0.203 305.504)',

  blue: 'oklch(0.685 0.169 237.323)',
  'light-blue': 'oklch(0.789 0.154 211.53)',
  yellow: 'oklch(0.828 0.189 84.429)',
  orange: 'oklch(0.75 0.183 55.934)',

  green: 'oklch(0.6 0.118 184.704)',
  'light-green': 'oklch(0.696 0.17 162.48)',
  'light-red': 'oklch(0.64044 0.18091 14.083)',
  red: 'oklch(0.55732 0.20501 26.411)',
};

const style = document.createElement('style');

for (const [key, color] of Object.entries(colors)) {
  DefaultColorThemePalette.darkMode[key as TLColor].solid = color;
  style.textContent += `
    :where([style*="color: ${color}"], [stroke="${color}"]) {
      --base-color: white;
      --primary-color: ${color};

      stroke: var(--primary-color)
    }
  `;
}

// style.textContent += `
//   .tl-shape:has([style*="color: ${colors['light-violet']}"], [stroke="${colors['light-violet']}"]) {
//     display: none !important;
//     opacity: 0 !important;
//     pointer-events: none !important;
//   }
// `;

document.head.appendChild(style);

// Light Theme

DefaultColorThemePalette.lightMode.grey.solid = 'darkgray';
DefaultColorThemePalette.lightMode.yellow.solid = '#f59e0b';
