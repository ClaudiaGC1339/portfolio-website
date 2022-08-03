import './style.css'
import styled from 'styled-components';


export const HeroH1 = styled.h1`
  color: #fff59d;
  border-right: solid 3px rgba(255 ,255 ,255 ,.75);
  white-space: nowrap;
  overflow: hidden; 
  font-size: 80px;
  text-align: center;
  text-shadow: 0 0 10px #fff59d;
  
  animation: animated-text 2s steps(12,end) 1s 1 normal both,
             animated-cursor 600ms steps(12,end) infinite;
  @keyframes animated-text{
    from{width: 0;}
    to{width: 700px;}
  }
              
  @keyframes animated-cursor{
    to{border-right-color: transparent;}
  };
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const HeroP = styled.p`
  margin-top: -100px;
  color: #fff;
  font-size: 80px;
  text-align: center;
  max-width: 600px;
  padding: 70px;
  @media screen and (max-width: 768px) {
    font-size: 60px;
    padding: 0;
    margin-top: 0;
    transition: all 0.4s ease-in-out;
  }
  @media screen and (max-width: 480px) {
    font-size: 50px;
    padding: 0;
    margin-top: 0;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    color: #fff59d;
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    
  }
`
