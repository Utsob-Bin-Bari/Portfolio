import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import { Component, useContext, Suspense, lazy } from "react";
import { themeContext } from "./Context";

const RETRY_DELAYS_MS = [500, 1500, 3000];

const importWithRetry = (load, attempt = 0) =>
  load().catch((error) => {
    if (attempt >= RETRY_DELAYS_MS.length) throw error;
    return new Promise((resolve) =>
      setTimeout(resolve, RETRY_DELAYS_MS[attempt])
    ).then(() => importWithRetry(load, attempt + 1));
  });

const section = (load) => {
  const download = importWithRetry(load);
  download.catch(() => {});
  return lazy(() => download);
};

const Expertise = section(() => import("./components/Expertise/Expertise"));
const Experience = section(() => import("./components/Experience/Experience"));
const Work = section(() => import("./components/Work/Work"));
const Portfolio = section(() => import("./components/Portfolio/Portfolio"));
const Skills = section(() => import("./components/Skills/Skills"));
const OtherSkills = section(() => import("./components/OtherSkills/OtherSkils"));
const Tools = section(() => import("./components/Tools/Tools"));
const DSA = section(() => import("./components/DSA/DSA"));
const CP = section(() => import("./components/CP/CP"));
const Education = section(() => import("./components/Education/Education"));
const Contact = section(() => import("./components/Contact/Contact"));
const Footer = section(() => import("./components/Footer/Footer"));

const SECTIONS = [
  Expertise, Experience, Work, Portfolio, Skills, OtherSkills,
  Tools, DSA, CP, Education, Contact, Footer,
];

class SectionBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        {SECTIONS.map((Section, index) => (
          <SectionBoundary key={index}>
            <Section />
          </SectionBoundary>
        ))}
      </Suspense>
    </div>
  );
}

export default App;
