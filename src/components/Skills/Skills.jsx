import React, { useContext } from "react";
import "./Skills.css";
import java from "../../img/java.png";
import cPlusPlus from "../../img/c++.png";
import react from "../../img/react.svg";
import HTML from "../../img/HTML.png";
import javaScript from "../../img/javaScript.png";
import express from "../../img/express.png";
import spring from "../../img/springBoot2.svg";
import css from "../../img/css3.svg";
import node from "../../img/nodejs.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Skills = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="skills" id="skills">
      <div className="s-left">
        <div className="design">
          <span style={{ color: darkMode ? "white" : "" }}>
             Deep understanding of
          </span>
          <span>Programming & Markup Languages</span>
          <spane>
            Programming Language for Competition - C++
            <br />
            Frontend Programming Language - Java Script & React (Library)
            <br />
            Backend Programming Language - Node.js (Java Script) & Spring (Java)
            <br />
            Designing and Markup Language - CSS and HTML
            <br />
            Framework - React Native (Front End), Expo (React Native) Express.js (Backend) & Spring Boot (Back End)
            <br />
            Others - C <br/>
            <br/>
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>


      </div>
      <div className="s-right">
        <motion.div
          initial={{ rotate: -45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="s-mainCircle"
        >
          <div className="s-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={java} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={cPlusPlus} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={css} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={HTML} alt="" />
          </div>      
          <div className="s-secCircle">
            <img src={javaScript} alt="" />
          </div> 
          <div className="s-secCircle">
            <img src={spring} alt="" />
          </div> 
          <div className="s-secCircle">
            <img src={express} alt="" />
          </div> 
          <div className="s-secCircle">
            <img src={node} alt="" />
          </div> 
        </motion.div>
        <div className="s-backCircle blueCircle"></div>
        <div className="s-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skills;