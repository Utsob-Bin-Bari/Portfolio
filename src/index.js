import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Context';

// Longest we'll hold the splash for the font, counted from page start. Past
// this the app renders with the fallback font and swaps when the font arrives.
const FONT_WAIT_MS = 3000;

const waitForFont = () => {
  if (!document.fonts) return Promise.resolve();
  const remaining = Math.max(0, FONT_WAIT_MS - performance.now());
  return Promise.race([
    document.fonts.load('1em "Arima Madurai Regular"'),
    new Promise((resolve) => setTimeout(resolve, remaining)),
  ]).catch(() => {});
};

const hideSplash = () => {
  const splash = document.getElementById('splash');
  if (!splash) return;
  splash.addEventListener('transitionend', () => splash.remove(), { once: true });
  splash.classList.add('splash-hidden');
};

// Rendering only once the font is ready means the intro animations start
// with the real text on screen, not underneath a font swap.
waitForFont().then(() => {
  ReactDOM.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    document.getElementById('root')
  );
  requestAnimationFrame(hideSplash);
});
