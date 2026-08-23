import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5</div>
        <span  style={{color: darkMode?'white':''}}>Production </span>
        <span>Mobile Apps</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3</div>
        <span  style={{color: darkMode?'white':''}}>Product </span>
        <span>Companies</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>50K+</div>
        <span  style={{color: darkMode?'white':''}}>User Product </span>
        <span>Rebuilding</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>750+</div>
        <span  style={{color: darkMode?'white':''}}>DSA Problems </span>
        <span>Solved</span>
      </div>
    </div>
  );
};

export default Experience;
