import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import ScrollLink from "../ScrollLink/ScrollLink";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
      <div className="n-name">Utsob</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <ScrollLink to="Navbar">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="expertise">
                Expertise
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="work">
                Work
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="portfolio">
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills">
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="tools">
                Tools
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="DSA">
                DSA
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="CP">
                Contest
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="education">
                Education
              </ScrollLink>
            </li>
          </ul>
        </div>
        <ScrollLink to="contact">
        <button className="button n-button">Contact</button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default navbar;
