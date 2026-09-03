import React, { useContext } from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import { themeContext } from "../../Context";

const projects = [
  {
    name: "SonaliPay",
    slug: "sonalipay",
    tagline: "Cross-Border Remittance",
    company: "Tulip-Tech",
    status: "In Progress",
    shots: [1, 2, 3],
    stack: ["React Native", "Expo", "TypeScript", "Reanimated"],
    points: [
      "Full ground-up rebuild of a live production application serving 50,000+ active users, preserving continuity under financial-services constraints.",
      "Banking-grade session security — access tokens held in memory only, a startup gate blocking jailbroken and rooted devices, screen-capture guard, biometric unlock and remote device revocation.",
      "Tiered KYC with document capture and liveness detection, and 8-language internationalisation with per-script font resolution.",
    ],
    links: [],
  },
  {
    name: "Conected",
    slug: "conected",
    tagline: "Therapist Booking Marketplace",
    company: "Tulip-Tech",
    status: "Live on iOS & Android",
    shots: [1, 2, 3],
    stack: ["React Native", "TypeScript", "Supabase Realtime", "Stripe"],
    points: [
      "Built a complete real-time messaging system over Supabase Realtime broadcast channels — one global hook covering every conversation the user participates in.",
      "Optimistic UI updates reconciled against server-confirmed messages by clientId, patching the query cache instead of refetching.",
      "Sole mobile engineer — 405 commits from first screen through store submission on both platforms.",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/conected/id6761367700",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.conectedltd.app",
      },
    ],
  },
  {
    name: "Corrigan Sports",
    slug: "corrigan-sports",
    tagline: "Live Sports Streaming",
    company: "Tulip-Tech",
    status: "Live on iOS",
    shots: [1, 2, 3],
    stack: ["React Native", "JW Player", "InPlayer", "Sanity CMS"],
    points: [
      "Paid live-streaming application for the US market covering high school and college lacrosse and American football.",
      "JW Player for live and on-demand playback across varying network conditions; InPlayer for subscription entitlement and paywall gating.",
      "Delivered through App Store review, signing and provisioning to production release.",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/corrigan-sports/id6758297737",
      },
    ],
  },
  {
    name: "Taraa",
    slug: "taraa",
    tagline: "AI-First EduTech",
    company: "Scaledex — a concern of Fiber@Home",
    status: "Delivered",
    shots: [1, 2, 3],
    stack: ["React Native", "Expo", "100ms SDK", "Socket.io"],
    points: [
      "Token-by-token streaming of AI responses delivered as webhook chunks, with client-side buffering, ordering and paced incremental rendering.",
      "100ms SDK for real-time video sessions with custom interactive whiteboard functionality.",
      "Socket.io for real-time messaging and data synchronisation, plus AI-driven personalised study plans.",
    ],
    links: [],
  },
  {
    name: "Evocart",
    slug: "evocart",
    tagline: "Multi-Retailer E-Commerce",
    company: "Vista Systech",
    status: "Delivered",
    shots: [1, 2, 3],
    stack: ["React Native", "Bare Workflow", "OpenAI API", "Meta Graph API"],
    points: [
      "OpenAI API for intelligent content generation from image analysis, and PixelAI for automated background removal in product images.",
      "Meta Graph API for unified management of Facebook, Instagram and WhatsApp business integrations.",
      "Authentication with OAuth across Facebook, Instagram, LinkedIn and Google.",
    ],
    links: [],
  },
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <div className="pj-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Applications I have</span>
        <span>Shipped</span>
      </div>

      <div className="pj-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            darkMode={darkMode}
          />
        ))}
      </div>

      <div className="blur pj-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur pj-blur2" style={{ background: "#ABF1FF94" }}></div>
      <div className="blur pj-blur3" style={{ background: "var(--purple)" }}></div>
      <div className="blur pj-blur4" style={{ background: "#ABF1FF94" }}></div>
      <div className="blur pj-blur5" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default Portfolio;
