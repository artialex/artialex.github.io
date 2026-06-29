import { DefaultColorThemePalette, defaultColorNames } from 'tldraw';

type TLColor = (typeof defaultColorNames)[number];

// Dark Theme
{
  const colors: Record<TLColor, string> = {
    black: 'oklch(87.1% 0.006 286.286)',
    white: '#1c1917',
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
    [data-color-mode='dark']{ :where([style*="color: ${color}"], [stroke="${color}"]) {
      --base-color: ${colors.black};
      --primary-color: ${color};

      stroke: var(--primary-color)
    }}
  `;
  }

  document.head.appendChild(style);
}

// Light Theme
{
  const colors: Record<TLColor, string> = {
    black: 'hsl(0 0 20%)',
    white: 'white',
    grey: 'oklch(55.4% 0.046 257.417)',
    'light-violet': 'oklch(0.74 0.238 322.16)',
    violet: 'oklch(0.714 0.203 305.504)',

    blue: 'oklch(0.685 0.169 237.323)',
    'light-blue': 'oklch(0.789 0.154 211.53)',
    yellow: 'oklch(0.769 0.188 70.08)',
    orange: 'oklch(0.646 0.222 41.116)',

    green: 'oklch(0.6 0.118 184.704)',
    'light-green': 'oklch(0.696 0.17 162.48)',
    'light-red': 'oklch(0.64044 0.18091 14.083)',
    red: 'oklch(0.55732 0.20501 26.411)',
  };

  const style = document.createElement('style');

  for (const [key, color] of Object.entries(colors)) {
    DefaultColorThemePalette.lightMode[key as TLColor].solid = color;

    style.textContent += `
    [data-color-mode='light'] {
    :where([style*="color: ${color}"], [stroke="${color}"]) {
      --base-color: ${colors.black};
      --primary-color: ${color};

      stroke: var(--primary-color)
    }}
  `;
  }

  document.head.appendChild(style);
}
