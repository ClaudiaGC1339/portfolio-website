import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./style.css";
import "../ContactButton/style.css";
import { HeroH1, HeroP, LinkContainer } from "./HeroElems.js";
import React from "react";
import DownloadButton from '../CV Button'



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

function openCV() {
  window.open()
}

function HeroSection() {
  return (
    <div className="main-container">
      <div className="hero-background">
      </div>
      <div className="hero-content">
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
        <DownloadButton/>
      </div>
    </div>
  );
}

export default HeroSection;
