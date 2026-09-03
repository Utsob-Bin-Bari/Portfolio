import React, { useContext } from "react";
import "./Expertise.css";
import Card from "../Card/Card";
import react from "../../img/react.svg";
import realtime from "../../img/realtime.svg";
import release from "../../img/release.svg";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Utsob_Bin_Bari_CV.pdf';

const areas = [
  {
    emoji: react,
    heading: "Mobile Development",
    detail:
      "React Native (Expo & Bare Workflow), TypeScript, expo-router, React Navigation, Reanimated",
    from: { x: 170, y: 40 },
  },
  {
    emoji: realtime,
    heading: "Real-time & Streaming",
    detail:
      "Socket.io, Supabase Realtime, 100ms SDK, JW Player, LLM token streaming",
    from: { x: -170, y: 40 },
  },
  {
    emoji: release,
    heading: "Ship & Release",
    detail:
      "EAS Build / Submit / Update, GitHub Actions, App Store & Play publishing, OTA, FCM",
    from: { x: 170, y: 40 },
  },
];

const Expertise = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="expertise" id="expertise">
      <div className="design">
        <span style={{ color: darkMode ? "white" : "" }}>Areas of</span>
        <span>Expertise</span>
        <span>
          Cross-platform mobile applications for Android and iOS with React Native and
          Expo — from design implementation and animation through performance
          optimisation, CI/CD pipelines, and publishing to the App Store and Google Play.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        {areas.map((area, index) => (
          <motion.div
            key={area.heading}
            initial={{ opacity: 0, ...area.from }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ margin: "-60px" }}
            transition={{ type: "spring", stiffness: 42, damping: 13, delay: index * 0.14 }}
          >
            <Card
              emoji={area.emoji}
              heading={area.heading}
              detail={area.detail}
              service={true}
            />
          </motion.div>
        ))}

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Expertise;
