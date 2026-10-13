import React, { useContext } from "react";
import { flushSync } from "react-dom";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const KNOB_TRAVEL = "1.5rem";
const DIM = 0.7;

const spring = { type: "spring", stiffness: 500, damping: 32 };

// Fast start, gentle finish: the light bursts out of the toggle, and when
// switching off it eases to a stop as it meets the toggle again.
const REVEAL_MS = 600;
const REVEAL_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // The toggle is the light source. Switching to light grows the light page
  // out of it as a circle; switching to dark shrinks it back to it. Only
  // clip-path animates, on snapshots the browser has already rasterised, so
  // the heavy blurred backgrounds aren't repainted per frame.
  const handleClick = (e) => {
    // flushSync so the new theme is in the DOM before the "after" snapshot.
    const toggle = () => flushSync(() => theme.dispatch({ type: "toggle" }));

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      toggle();
      return;
    }

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    // Exactly reach the farthest viewport corner, so no time is spent off-screen.
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    // The small end meets the toggle's outline rather than a point inside it:
    // an ellipse touching the pill's ends and sides, hidden under the opaque
    // toggle, so the light starts and ends exactly at its edge. It stays a
    // circle until the last few pixels.
    const closed = `ellipse(${width / 2}px ${height / 2}px at ${x}px ${y}px)`;
    const open = `ellipse(${radius}px ${radius}px at ${x}px ${y}px)`;
    const toLight = darkMode;

    document
      .startViewTransition(toggle)
      .ready.then(() => {
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
      // A quick second click skips this transition; the theme still switches.
      .catch(() => {});
  };

  return (
    <div className="toggle" onClick={handleClick} role="button" aria-label="Toggle dark mode">
      <motion.span
        className="t-icon"
        animate={{ rotate: darkMode ? 0 : -60, opacity: darkMode ? 1 : DIM }}
        transition={spring}
      >
        <Moon />
      </motion.span>
      <motion.span
        className="t-icon"
        animate={{ rotate: darkMode ? 60 : 0, opacity: darkMode ? DIM : 1 }}
        transition={spring}
      >
        <Sun />
      </motion.span>
      <motion.div
        className="t-button"
        animate={{ x: darkMode ? KNOB_TRAVEL : 0 }}
        transition={spring}
      />
    </div>
  );
};

export default Toggle;
