import React from 'react'
import './Skill.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { useContext } from "react";
import { themeContext } from "../../Context";



const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
         {/* Left Side */}

         <div className="awesome">  
         <span style={{ color: darkMode ? "white" : "" }}>My</span>
         <span>Skills</span>
         <span>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eius   */}
          These are the techs that I have worked upon and download my resume here. 
         </span>
         <a href={Resume} download>
         <button className="button s-button">Resume</button>
         </a>
         <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      
         </div>

         {/* Right Side */}

         <div className="cards">

          <div style={{left: '14rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'MERN Stack'}
            detail = {"MongoDB, ExpressJS, ReactJS & NodeJS"}
            />
          </div>

          {/* Second card */}

          <div style={{top: "12rem", left:"-4rem"}}>
            <Card
            emoji={Glasses}
            heading={"Languages"}
            detail={"C, C++, Python & JavaScript"}
            />

          </div>

          {/* 3rd card */}

          <div style={{top: "19rem", left:"12rem"}}>
          <Card
            emoji={Humble}
            heading={"Others"}
            detail={"HTML, CSS, Bootstrap, Tailwind CSS, Redux, Redux Thunk, NextJS, Firebase, Git and GitHub"}
            />

          </div>
          <div className="blur s-blur2" style={{background: "var(--purple)"}}>

          </div>

          
         </div>
    </div>
  )
}

export default Services