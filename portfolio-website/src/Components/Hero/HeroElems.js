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
`;


export const HeroP = styled.p`
  margin-bottom: 200px;
  color: #fff;
  font-size: 80px;
  text-align: center;
  max-width: 600px;
  padding: 70px;

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
  max-height: 240px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
 
`
