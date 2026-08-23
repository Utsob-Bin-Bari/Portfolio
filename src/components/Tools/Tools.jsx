import React, { useContext } from "react";
import "./Tools.css";
import visualStudio from "../../img/visualStudio.png";
import androidStudio from "../../img/androidStudio.png";
import xCode from "../../img/xCode.svg";
import expo from "../../img/expo.svg";
import firebase from "../../img/firebase.svg";
import postman from "../../img/postman.png";
import github from "../../img/gitHubBig.png";
import cursor from "../../img/cursor.svg";
import claudeCode from "../../img/claudeCode.svg";
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
            Testing Tools - Postman &amp; Flipper
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
      </div>
    </div>
  );
};

export default Tools;
