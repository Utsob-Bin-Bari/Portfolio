import React from "react";

const DURATION_MS = 1000;
const CANCEL_EVENTS = ["wheel", "touchmove", "mousedown", "keydown"];

const easeInOutQuad = (x) =>
  x < 0.5 ? Math.pow(x * 2, 2) / 2 : 1 - Math.pow((1 - x) * 2, 2) / 2;

let stopActiveScroll = () => {};

const scrollToId = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  stopActiveScroll();

  const startY = window.scrollY;
  const endY = Math.min(
    target.getBoundingClientRect().top + startY,
    document.documentElement.scrollHeight - window.innerHeight
  );

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, endY);
    return;
  }

  let frame;
  const start = performance.now();
  const stop = () => {
    cancelAnimationFrame(frame);
    CANCEL_EVENTS.forEach((type) => window.removeEventListener(type, stop));
  };
  const step = (now) => {
    const progress = Math.min((now - start) / DURATION_MS, 1);
    window.scrollTo(0, startY + (endY - startY) * easeInOutQuad(progress));
    if (progress < 1) frame = requestAnimationFrame(step);
    else stop();
  };

  CANCEL_EVENTS.forEach((type) =>
    window.addEventListener(type, stop, { passive: true })
  );
  stopActiveScroll = stop;
  frame = requestAnimationFrame(step);
};

const ScrollLink = ({ to, children }) => (
  <a
    href={`#${to}`}
    className="scroll-link"
    onClick={(e) => {
      e.preventDefault();
      scrollToId(to);
    }}
  >
    {children}
  </a>
);

export default ScrollLink;
