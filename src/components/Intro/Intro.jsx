import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/intro/boy.webp";
import web from "../../img/intro/web.webp";
import developer from "../../img/intro/developer.webp";
import idea from "../../img/intro/idea.svg";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import WhatsApp from "@iconscout/react-unicons/icons/uil-whatsapp";
import { themeContext } from "../../Context";
import { m } from "framer-motion";
import ScrollLink from "../ScrollLink/ScrollLink";

const Vector1 = `${process.env.PUBLIC_URL}/img/Vector1.webp`;
const Vector2 = `${process.env.PUBLIC_URL}/img/Vector2.webp`;

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Utsob Bin Bari</span>
          <span>
            React Native engineer specialising in cross-platform mobile applications —
            end-to-end ownership from design implementation through development,
            optimisation, CI/CD and store release. Shipped production apps across
            fintech, edtech, e-commerce and live sports streaming.
          </span>
        </div>
        <ScrollLink to="contact">
          <button className="button i-button">Get in Touch</button>
        </ScrollLink>
        <div className="f-icons">
          <a href="https://www.instagram.com/10_utsob?igsh=MWhscms4ZXhueTg0bw%3D%3D&utm_source=qr">
            <Insta color="var(--orange)" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/utsob.binbari?mibextid=LQQJ4d">
            <Facebook color="var(--orange)" size={"3rem"} />
          </a>
          <a href="https://github.com/Utsob-Bin-Bari">
            <Github color="var(--orange)" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/utsob-bin-bari-7106a3309/">
            <LinkedIn color="var(--orange)" size={"3rem"} />
          </a>
          <a href="https://wa.me/+8801316312208">
            <WhatsApp color="var(--orange)" size={"3rem"} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" fetchpriority="high" />
        <m.div
          initial={{ left: "-15%", top: "10" }}
          whileInView={{ left: "3%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={idea} text1="Problem" text2="Solver" />
        </m.div>
        <m.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={web} text1="iOS &" text2="Android" />
        </m.div>
        <m.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
            img={developer}
            text1="React Native "
            text2="Engineer"
          />
        </m.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
