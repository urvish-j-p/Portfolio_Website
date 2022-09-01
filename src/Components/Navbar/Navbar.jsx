import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";


const Navbar = () => {

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Urvish</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="t-heading" spy={true} smooth={true}>
                Certificates
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">
          <Link to="contact-form" spy={true} smooth={true}>
            Contact
          </Link>
        </button>
      </div>
    
    </div>
  );
};

export default Navbar;
