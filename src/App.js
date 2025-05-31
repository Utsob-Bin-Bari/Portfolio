import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import { useContext, Suspense, lazy } from "react";
import { themeContext } from "./Context";

const Services = lazy(() => import("./components/Services/Services"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const OtherSkills = lazy(() => import("./components/OtherSkills/OtherSkils"));
const Tools = lazy(() => import("./components/Tools/Tools"));
const DSA = lazy(() => import("./components/DSA/DSA"));
const CP = lazy(() => import("./components/CP/CP"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        <Services />
        <Experience />
        <Skills />
        <OtherSkills />
        <Tools />
        <DSA />
        <CP />
        <Portfolio />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

