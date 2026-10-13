import React, { useContext } from "react";
import { flushSync } from "react-dom";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import { m } from "framer-motion";

const KNOB_TRAVEL = "1.5rem";
const DIM = 0.7;

const spring = { type: "spring", stiffness: 500, damping: 32 };

const REVEAL_MS = 600;
const REVEAL_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

const transitionBox = (name, fallback) => {
  const style = getComputedStyle(
    document.documentElement,
    `::view-transition-group(${name})`
  );
  if (style.width === "auto") return fallback;
  const { e: left, f: top } = new DOMMatrixReadOnly(style.transform);
  return {
    left,
    top,
    width: parseFloat(style.width),
    height: parseFloat(style.height),
  };
};

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = (e) => {
    const toggle = () => flushSync(() => theme.dispatch({ type: "toggle" }));

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      toggle();
      return;
    }

    const toLight = darkMode;
    const rect = e.currentTarget.getBoundingClientRect();

    document
      .startViewTransition(toggle)
      .ready.then(() => {
        const view = transitionBox("root", {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        });
        const source = transitionBox("theme-toggle", rect);
        const x = source.left + source.width / 2;
        const y = source.top + source.height / 2;
        const radius = Math.hypot(
          Math.max(x, view.width - x),
          Math.max(y, view.height - y)
        );
        const closed = `ellipse(${source.width / 2}px ${source.height / 2}px at ${x}px ${y}px)`;
        const open = `ellipse(${radius}px ${radius}px at ${x}px ${y}px)`;

        document.documentElement.animate(
          { clipPath: toLight ? [closed, open] : [open, closed] },
          {
            duration: REVEAL_MS,
            easing: REVEAL_EASING,
            pseudoElement: toLight
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
          }
        );
      })
      .catch(() => {});
  };

  return (
    <div className="toggle" onClick={handleClick} role="button" aria-label="Toggle dark mode">
      <m.span
        className="t-icon"
        animate={{ rotate: darkMode ? 0 : -60, opacity: darkMode ? 1 : DIM }}
        transition={spring}
      >
        <Moon />
      </m.span>
      <m.span
        className="t-icon"
        animate={{ rotate: darkMode ? 60 : 0, opacity: darkMode ? DIM : 1 }}
        transition={spring}
      >
        <Sun />
      </m.span>
      <m.div
        className="t-button"
        animate={{ x: darkMode ? KNOB_TRAVEL : 0 }}
        transition={spring}
      />
    </div>
  );
};

export default Toggle;
