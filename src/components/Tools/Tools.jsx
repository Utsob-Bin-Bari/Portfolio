import React, { useContext } from "react";
import "./Tools.css";
import visualStudio from "../../img/tools/visualStudio.webp";
import androidStudio from "../../img/tools/androidStudio.webp";
import xCode from "../../img/tools/xCode.svg";
import expo from "../../img/tools/expo.svg";
import firebase from "../../img/tools/firebase.svg";
import postman from "../../img/tools/postman.webp";
import github from "../../img/tools/gitHubBig.webp";
import cursor from "../../img/tools/cursor.webp";
import claudeCode from "../../img/tools/claudeCode.svg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const tools = [
  { img: visualStudio, alt: "VS Code" },
  { img: androidStudio, alt: "Android Studio" },
  { img: xCode, alt: "XCode" },
  { img: expo, alt: "Expo EAS" },
  { img: firebase, alt: "Firebase" },
  { img: postman, alt: "Postman" },
  { img: github, alt: "GitHub" },
  { img: cursor, alt: "Cursor" },
  { img: claudeCode, alt: "Claude Code" },
];

const Tools = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="tools" id="tools">
      <div className="t-left">
        <div className="design">
          <span style={{ color: darkMode ? "white" : "" }}>
             Highly proficient in utilizing
          </span>
          <span>Development &amp; Release Tools</span>
          <span>
            IDE and Editors - Visual Studio Code, Cursor, Claude Code
            <br />
            Simulator and Emulator - XCode &amp; Android Studio
            <br />
            Build and Release - Expo EAS (Build / Submit / Update), GitHub Actions, Play Console, App Store Connect
            <br />
            Messaging - Firebase Cloud Messaging &amp; Notifee
            <br />
            Testing Tools - Postman &amp; Insomnia
            <br />
            Version Control - Git &amp; Source Tree
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
      <div className="t-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="t-mainCircle"
        >
          {tools.map((tool) => (
            <div className="t-secCircle" key={tool.alt}>
              <img src={tool.img} alt={tool.alt} title={tool.alt} />
            </div>
          ))}
        </motion.div>
        <div className="t-backCircle blueCircle"></div>
        <div className="t-backCircle yellowCircle"></div>
        {!darkMode && (
          <>
            <div className="blur t-blur1" style={{ background: "skyblue" }}></div>
            <div
              className="blur t-wheelBlur"
              style={{ background: "var(--purple)" }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tools;
