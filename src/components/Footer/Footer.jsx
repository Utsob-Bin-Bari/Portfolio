import React from "react";
import "./Footer.css";
import Wave from "../../img/decor/wave.webp";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import WhatsApp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={Wave}
        alt=""
        width="2275"
        height="849"
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="f-content">
        <a className="f-link" href="mailto:utsobbinbari@gmail.com">
          utsobbinbari@gmail.com
        </a>
        <a className="f-link" href="tel:+8801316312208">
          Mobile: +8801316-312208
        </a>
        <div className="f-icons">
          <a href="https://www.instagram.com/10_utsob?igsh=MWhscms4ZXhueTg0bw%3D%3D&utm_source=qr">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/utsob.binbari?mibextid=LQQJ4d">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Utsob-Bin-Bari">
          <Github color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/utsob-bin-bari-7106a3309/">
          <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href=" https://wa.me/+8801316312208">
          <WhatsApp color="white" size={"3rem"} />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
