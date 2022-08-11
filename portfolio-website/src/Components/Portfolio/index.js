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
} from './PortfolioElems'


const Portfolio = () => {


  function YourLocalFoodBank() {
    window.open()
  }
  function gitYourLocalFoodBank() {
    window.open()
  }

    return (
      <div className="container">
      <div className="portfolio-background">
        <PortfolioContainer>
            <PortfolioH1>Portfolio</PortfolioH1>
            <PortfolioWrapper>
            <PortfolioCard>
                <ImgWrap>
                    <Img />
                </ImgWrap>
                <PortfolioH2>Your Local FoodBank</PortfolioH2>
                <PortfolioP>Placeholder Text</PortfolioP>
                <LinkWrap>
                    <PortfolioLink onClick={gitYourLocalFoodBank} >Code</PortfolioLink>
                    <PortfolioLink onClick={YourLocalFoodBank} >Site</PortfolioLink>
                </LinkWrap>
            </PortfolioCard>
            <PortfolioCard>
                <ImgWrap>
                    <Img  />
                </ImgWrap>
                <PortfolioH2>Placeholder Text</PortfolioH2>
                <PortfolioP>Placeholder Text</PortfolioP>
                <LinkWrap>
                    <PortfolioLink  >Code</PortfolioLink>
                    <PortfolioLink  >Site</PortfolioLink>
                </LinkWrap>
            </PortfolioCard>
            </PortfolioWrapper>
        </PortfolioContainer>
      </div>
      </div>
    );
  };

export default Portfolio;