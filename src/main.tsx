import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';

import './index.css';
import { StrictMode } from 'react';

const element = document.getElementById('root')!;

const root = createRoot(element);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);

// HACK
if (import.meta.env.PROD) {
  const style = document.createElement('style');

  style.textContent += `
    code { font-size: 80%; }
  `;

  document.body.appendChild(style);
}
