import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tuitionLagbe from "../../img/tuitionLagbe.png";
import memoryBook from "../../img/memeoryBook.png";
import canvas from "../../img/canvasDevelopers.png";
import aiAssist from "../../img/AIAssist.png";
import { themeContext } from "../../Context";
 
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>
      <a href="https://github.com/Utsob-Bin-Bari/Project-/tree/main" target="_blank" rel="noopener noreferrer">
        <button className="button s-button">Code Base</button>
      </a>
      <h3>Modular and MVC Design Pattern</h3>
      <div className="apk-buttons">
        <div className="apk-button-item">
          <a href="https://drive.google.com/file/d/1NLAaVTmdlISEqzf-mKqkkEY7D6WV3p6u/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            <button className="button s-button">Download Apk</button>
          </a>
          <h3>Functional Programming</h3>
        </div>
        <div className="apk-button-item">
          <a href="https://drive.google.com/file/d/1wCu7L4QnncSP1oxKKFv8aGdn_w2Vg8as/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="button s-button">Download Apk</button>
          </a>
          <h3>Pixel Perfect Design</h3>
        </div>
      </div>

      
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={canvas} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aiAssist} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tuitionLagbe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={memoryBook} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;



