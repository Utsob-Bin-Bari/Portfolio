import React, { useContext } from "react";
import "./Work.css";
import { themeContext } from "../../Context";
import { m } from "framer-motion";

const roles = [
  {
    company: "Tulip-Tech",
    title: "Software Engineer — Mobile Team",
    period: "December 2025 — Present",
    summary:
      "Own mobile applications through the full delivery cycle — design implementation, development, performance optimisation, store deployment and CI/CD with Expo EAS. Also responsible for new mobile project bootstrap and release pipelines across the company's projects.",
    points: [
      "Delivered two applications to production across both iOS and Android.",
      "Standardised EAS Build, Submit and OTA workflows, environment and build profiles, and release automation so new apps start from a deployable baseline.",
      "Serve as the team's reference for design, animation and motion work.",
      "Rebuilding a live remittance application serving 50,000+ active users under financial-services constraints.",
    ],
  },
  {
    company: "Scaledex — a concern of Fiber@Home",
    title: "Full Stack React Native Developer",
    period: "June 2025 — December 2025",
    summary:
      "Led end-to-end development of Taraa, an AI-first education application featuring real-time video sessions, AI-powered chat and integrated in-app payments.",
    points: [
      "Architected a feature-rich React Native (TypeScript) application supporting AI-driven EdTech functionality.",
      "Built token-by-token streaming of model responses with client-side buffering, ordering and paced incremental rendering.",
      "Integrated the 100ms SDK for real-time video sessions with a custom interactive whiteboard.",
      "Independently managed the complete mobile lifecycle from conception to production deployment.",
    ],
  },
  {
    company: "Vista Systech",
    title: "React Native Developer",
    period: "February 2025 — May 2025",
    summary:
      "Built Evocart, a multi-retailer e-commerce application on the React Native bare workflow with TypeScript.",
    points: [
      "Integrated OpenAI API for image-based content generation and PixelAI for automated background removal.",
      "Implemented the Meta Graph API for unified Facebook, Instagram and WhatsApp business integrations.",
      "Delivered OAuth authentication across Facebook, Instagram, LinkedIn and Google.",
      "Coordinated RESTful API design with the backend team and worked directly with designers and stakeholders.",
    ],
  },
];

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="wk-wrapper" id="work">
      <div className="wk-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Where I have</span>
        <span>Worked</span>
      </div>

      <div className="wk-timeline">
        {roles.map((role, index) => (
          <m.div
            className="wk-item"
            key={role.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="wk-dot" />
            <div className="wk-card">
              <span className="wk-title">{role.title}</span>
              <span className="wk-company" style={{ color: darkMode ? "white" : "" }}>
                {role.company}
              </span>
              <span className="wk-period">{role.period}</span>
              <p className="wk-summary">{role.summary}</p>
              <ul className="wk-points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </m.div>
        ))}
      </div>

      <div className="blur wk-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur wk-blur2" style={{ background: "#ABF1FF94" }}></div>
      <div className="blur wk-blur3" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default Work;
