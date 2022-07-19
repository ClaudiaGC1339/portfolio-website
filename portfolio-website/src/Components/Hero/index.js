import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Button } from "../ContactButton/Buttons.js";
import NavBar from "../Navbar/index.js";
import AboutMe from '../../Pages/About me'
import "./index.css";
import {
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  LinkContainer,
} from "./HeroElems.js";
import React, { useState } from "react";

function openGithub() {
  window.open("https://github.com/ClaudiaGC1339");
}

function openLinkedin() {
  window.open(
    "https://www.linkedin.com/in/claudia-gonzalez-casales-07249a172/)/"
  );
}

function openInsta() {
  window.open("https://www.instagram.com/claudiaa_gonzalez_)/");
}

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="main-container">
      <div className="hero-background"></div>
      <div className="parallax" />
      <div className="hero-content">
        <NavBar></NavBar>
        <HeroH1>Claudia Gonzalez</HeroH1>
        <LinkContainer>
          <HeroP>
            <FaGithub onClick={openGithub} />
          </HeroP>
          <HeroP>
            <FaLinkedin onClick={openLinkedin} />
          </HeroP>
          <HeroP>
            <FaInstagram onClick={openInsta} />
          </HeroP>
        </LinkContainer>
        <HeroBtnWrapper>
          <Button
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Contact
          </Button>
        </HeroBtnWrapper>
      </div>
    </div>
    
  );
}

export default HeroSection;
