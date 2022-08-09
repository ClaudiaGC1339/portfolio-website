import React from "react";
// import Carousel from "../Carousel";
import './style.css'
// import { CarouselData } from "../Carousel/portfolioData";
import { 
  PortContainer,
  PortH1,
  PortCard,
  PortH2,
  PortP, 
  ImgWrap, 
  Img,
  PortLink, PortWrapper, LinkWrap
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
      <div className="background-container">
      <h1>Projects</h1>
      {/* <Carousel slides={CarouselData}/> */}
        <PortContainer>
            <PortH1>Portfolio</PortH1>
            <PortWrapper>
            <PortCard>
                <ImgWrap>
                    <Img />
                </ImgWrap>
                <PortH2>Your Local FoodBank</PortH2>
                <PortP>Placeholder Text</PortP>
                <LinkWrap>
                    <PortLink onClick={gitYourLocalFoodBank} >Code</PortLink>
                    <PortLink onClick={YourLocalFoodBank} >Site</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img  />
                </ImgWrap>
                <PortH2>Placeholder Text</PortH2>
                <PortP>Placeholder Text</PortP>
                <LinkWrap>
                    <PortLink  >Code</PortLink>
                    <PortLink  >Site</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img />
                </ImgWrap>
                <PortH2>Placeholder Text</PortH2>
                <PortP>Placeholder Text</PortP>
                <LinkWrap>
                    <PortLink >Code</PortLink>
                    <PortLink >Site</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img />
                </ImgWrap>
                <PortH2>Placeholder Text</PortH2>
                <PortP>Placeholder Text</PortP>
                <LinkWrap>
                    <PortLink >Code</PortLink>
                    <PortLink >Site</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img />
                </ImgWrap>
                <PortH2>Placeholder Text</PortH2>
                <PortP>Placeholder Text</PortP>
                <LinkWrap>
                    <PortLink >Code</PortLink>
                    <PortLink >Site</PortLink>
                </LinkWrap>
            </PortCard>
            </PortWrapper>
        </PortContainer>
    )
      </div>
      </div>
    );
  };

export default Portfolio;