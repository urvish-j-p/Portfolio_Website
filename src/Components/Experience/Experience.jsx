import React from 'react'
import './Experience.css'
import { useContext } from "react";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
        {/* <div className="achievement">
            <div className="circle">0+</div>
            <span style={{ color: darkMode ? "white" : "" }}>Years </span>
            <span>Experience</span>
        </div> */}
        <div className="achievement">
            <div className="circle">20+</div>
            <span style={{ color: darkMode ? "white" : "" }}>Completed </span>
            <span>Projects</span>
        </div>
        {/* <div className="achievement">
            <div className="circle">0+</div>
            <span style={{ color: darkMode ? "white" : "" }}>Companies</span>
            <span>Work</span>
        </div> */}
    </div>
  )
}

export default Experience