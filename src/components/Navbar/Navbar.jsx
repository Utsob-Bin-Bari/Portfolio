import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
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
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="expertise" spy={true} smooth={true}>
                Expertise
              </Link>
            </li>
            <li>
              <Link to="work" spy={true} smooth={true}>
                Work
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="tools" spy={true} smooth={true}>
                Tools
              </Link>
            </li>
            <li>
              <Link to="DSA" spy={true} smooth={true}>
                DSA
              </Link>
            </li>
            <li>
              <Link to="CP" spy={true} smooth={true}>
                Contest
              </Link>
            </li>
            <li>
              <Link to="education" spy={true} smooth={true}>
                Education
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
