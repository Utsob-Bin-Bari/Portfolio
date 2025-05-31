import React, { useContext, useState, useEffect } from "react";
import "./Services.css";
import Card from "../Card/Card";
import react from "../../img/react.svg";
import springBoot from "../../img/springBoot.svg";
import api from "../../img/api.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Utsob_Bin_Bari_CV.pdf';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="services" id="services">
      <div className="design">
        <span style={{ color: darkMode ? "white" : "" }}>All of my</span>
        <span>Services</span>
        <spane>
          MERN-Stack website and mobile apps for Android and iOS using React/React Native for FrontEnd and 
          Express.js as a BackEnd with a scalable database with MySQL/MongoDB.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        {isMobile ? (
          <>
            <div>
              <Card
                emoji={react}
                heading={"FrontEnd"}
                detail={"React Native, React, JavaScript, HTML, CSS, Redux, ES6+, Expo"}
                service={true}
              />
            </div>
            <div>
              <Card
                emoji={springBoot}
                heading={"BackEnd"}
                detail={"Express.js, Node.js, JavaScript, Spring Boot, Java, OAuth2"}
                service={true}
              />
            </div>
            <div>
              <Card
                emoji={api}
                heading={"Database and API"}
                detail={"MySQL, Realm DB, Axios, RESTful API with JWT Token"}
                service={true}
              />
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ left: "30rem", top: "-2rem" }}  
              whileInView={{ left: "20rem", top: "0rem" }} 
              transition={transition}
            >
              <Card
                emoji={react}
                heading={"FrontEnd"}
                detail={"React Native, React, JavaScript, HTML, CSS, Redux, ES6+, Expo"}
                service={true}
              />
            </motion.div>
            <motion.div
              initial={{ left: "0rem", top: "12rem" }}    
              whileInView={{ left: "5rem", top: "10rem" }} 
              transition={transition}
            >
              <Card
                emoji={springBoot}
                heading={"BackEnd"}
                detail={"Express.js, Node.js, JavaScript, Spring Boot, Java, OAuth2"}
                service={true}
              />
            </motion.div>
            <motion.div
              initial={{ top: "18rem", left: "30rem" }} 
              whileInView={{ top: "13rem", left: "20rem" }}
              transition={transition}
            >
              <Card
                emoji={api}
                heading={"Database and API"}
                detail={"MySQL, Realm DB, Axios, RESTful API with JWT Token"}
                service={true}
              />
            </motion.div>
          </>
        )}

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;

