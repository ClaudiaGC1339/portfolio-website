import React from "react";
import './style.css'
import { 
  PortfolioContainer,
  PortfolioH1,
  PortfolioCard,
  PortfolioH2,
  PortfolioP, 
  ImgWrap, 
  Img,
  PortfolioLink, PortfolioWrapper, LinkWrap
} from './PortfolioElems';
import FoodBank from '../../Images/foodbank project thumbnail.PNG';


const Portfolio = () => {


  function YourLocalFoodBank() {
    window.open('https://your-local-foodbank.netlify.app/')
  }
  function gitYourLocalFoodBank() {
    window.open('https://github.com/SchoolOfCode/final-project_front-end-jazzy-code-superheros')
  }

    return (
      <div className="container">
      <div className="portfolio-background">
        <PortfolioContainer>
            <PortfolioH1>Portfolio</PortfolioH1>
            <PortfolioWrapper>
            <PortfolioCard>
                <ImgWrap>
                    <Img src={FoodBank} alt="foodbank project thumbnail"/>
                </ImgWrap>
                <PortfolioH2>Your Local FoodBank</PortfolioH2>
                <PortfolioP> An application helps people to find out more about their local foodbank as well as allowing foodbanks to reach out to the wider community.</PortfolioP>
                <LinkWrap>
                    <PortfolioLink onClick={gitYourLocalFoodBank} >Code</PortfolioLink>
                    <PortfolioLink onClick={YourLocalFoodBank} >Site</PortfolioLink>
                </LinkWrap>
            </PortfolioCard>
            <PortfolioCard>
                <ImgWrap>
                    <Img  />
                </ImgWrap>
                <PortfolioH2>Ghibli Movie API</PortfolioH2>
                <PortfolioP>Placeholder Text</PortfolioP>
                <LinkWrap>
                    <PortfolioLink>Code</PortfolioLink>
                    <PortfolioLink>Site</PortfolioLink>
                </LinkWrap>
            </PortfolioCard>
            </PortfolioWrapper>
        </PortfolioContainer>
      </div>
      </div>
    );
  };

export default Portfolio;