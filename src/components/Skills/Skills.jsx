import React, { useContext } from "react";
import "./Skills.css";
import react from "../../img/stack/react.svg";
import typescript from "../../img/stack/typescript.svg";
import javaScript from "../../img/stack/javaScript.webp";
import express from "../../img/stack/express.webp";
import redux from "../../img/stack/redux.webp";
import tailwind from "../../img/stack/tailwind.svg";
import HTML from "../../img/stack/HTML.webp";
import css from "../../img/stack/css3.svg";
import cPlusPlus from "../../img/stack/c++.webp";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const stack = [
  { img: react, alt: "React" },
  { img: javaScript, alt: "JavaScript" },
  { img: typescript, alt: "TypeScript" },
  { img: express, alt: "Express" },
  { img: redux, alt: "Redux" },
  { img: tailwind, alt: "TailwindCSS" },
  { img: HTML, alt: "HTML" },
  { img: css, alt: "CSS" },
  { img: cPlusPlus, alt: "C++" },
];

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
          <span>The Mobile Stack</span>
          <span>
            Mobile - React Native (Expo Workflow &amp; Bare Workflow), expo-router, React Navigation
            <br />
            Languages - TypeScript, JavaScript (ES6+), C++, C
            <br />
            Animation - Reanimated, react-native-worklets, Gesture Handler
            <br />
            State &amp; Persistence - Zustand, Redux, TanStack React Query, MMKV, SQLite
            <br />
            Styling &amp; Web - TailwindCSS, React, HTML, CSS
            <br />
            Backend touchpoints - Express, oRPC, REST, JWT / OAuth2
            <br/>
            <br/>
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Get in Touch</button>
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
          {stack.map((item) => (
            <div className="s-secCircle" key={item.alt}>
              <img src={item.img} alt={item.alt} title={item.alt} />
            </div>
          ))}
        </motion.div>
        <div className="s-backCircle blueCircle"></div>
        <div className="s-backCircle yellowCircle"></div>
        {!darkMode && (
          <div
            className="blur s-wheelBlur"
            style={{ background: "var(--purple)" }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Skills;
