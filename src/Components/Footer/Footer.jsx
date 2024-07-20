import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {

  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <ScrollToTop smooth/>
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
            <a href="https://www.instagram.com/urvish_j_p/" target="_blank">
          <Insta color="white" size={"2rem"} />
          </a>
            <a href="https://www.facebook.com/urvish.j.p" target="_blank">
            <Facebook color="white" size={"2rem"} />
          </a>
            <a href="https://x.com/urvish_j_p" target="_blank">
            <Twitter color="white" size={"2rem"} />
          </a>
        </div>
        <span className="copyright">Copyright &copy; {currentYear} urvishmeghani111@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;