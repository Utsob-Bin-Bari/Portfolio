import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css"; 
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>Years </span>
        <span>Development Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5</div> 
        <span  style={{color: darkMode?'white':''}}>Full-stack </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>Years </span>
        <span>Competitive Programming</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>850+</div>
        <span  style={{color: darkMode?'white':''}}>DSA </span>
        <span>Problem Solved</span>
      </div>
    </div>
  );
};

export default Experience;
