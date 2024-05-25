import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy3.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";


const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I am</span>
          <span>Urvish Prajapati</span>
          <span>
          A passionate Full Stack Developer skilled in React.js, Next.js & TypeScript, producing the quality work.
          </span>
        </div>

        {/* <button className="button i-button">
        <Link to="contact-form" spy={true} smooth={true}>
           <span className="hire-me">Hire me</span> 
        </Link>
        </button> */}
        <div className="i-icons">
          <a href="https://github.com/UrvishJP" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/urvish-j-p/" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/urvish_j_p/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" style={{left:-50}}/>
        <img src={Vector2} alt="" style={{left:-10}}/>
        <img src={boy} alt="" style={{top:8}}/>
        <img src={glassesimoji} alt="" />
        <div style={{ top: " 0%", left: "68%" }} className="floating-div">
          <FloatingDiv image={Crown} txt1="Full Stack" txt2="Developer" />
        </div>
        <div style={{ top: "15rem", left: "-1rem" }} className="floating-div">
          <FloatingDiv image={thumbup} txt1="React.js" txt2="Developer" />
        </div>

        {/* Blur Divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-4rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
