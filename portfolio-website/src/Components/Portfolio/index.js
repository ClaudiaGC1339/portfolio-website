import React from "react";
import Carousel from "../Carousel";
import './style.css'
import { CarouselData } from "../Carousel/portfolioData";


const Portfolio = () => {
    return (
      <div className="container">
      <div className="background-container">
      <h1>Projects</h1>
      <Carousel slides={CarouselData}/>
      </div>
      </div>
    );
  };

export default Portfolio;