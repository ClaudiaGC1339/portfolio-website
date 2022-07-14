import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    LinkContainer
  } from './HeroElems.js';
  import giphybackground from '../../Images/giphybackground.gif'
  import {React, useState} from 'react';

  function openGithub() {
    window.open('https://github.com/ClaudiaGC1339')
  }
  
  function openLinkedin() {
    window.open('https://www.linkedin.com/in/claudia-gonzalez-casales-07249a172/)/')
  }
  
  function openInsta() {
    window.open('https://www.instagram.com/claudiaa_gonzalez_)/')
  }

  function HeroSection() {
    // const [hover, setHover] = useState(false);
  
    // const onHover = () => {
    //   setHover(!hover);
    // };

  return (
    <HeroContainer id="home">
    <HeroBg>
      <VideoBg playsInline autoPlay loop muted src={giphybackground} type='video1/mp4' />
    </HeroBg>
    <HeroContent>
      <HeroH1>Claudia Gonzalez</HeroH1>
      <LinkContainer>
        <HeroP>
          <FaGithub onClick={openGithub}/>
        </HeroP>
        <HeroP>
          <FaLinkedin onClick={openLinkedin}/>
        </HeroP>
        <HeroP>
        <FaInstagram onClick={openInsta}/>
      </HeroP>
      </LinkContainer>
    </HeroContent>
  </HeroContainer>
  )
  }

  export default HeroSection;