import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const KNOB_TRAVEL = "1.5rem";
const DIM = 0.7;

const spring = { type: "spring", stiffness: 500, damping: 32 };

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
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
        animate={{ x: darkMode ? 0 : KNOB_TRAVEL }}
        transition={spring}
      />
    </div>
  );
};

export default Toggle;
