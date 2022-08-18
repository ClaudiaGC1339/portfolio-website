import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: '#030029';
  overflow:hidden;
  margin-bottom: 20px;

`;

export const PortfolioWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 10px 50px;
  
`;

export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  max-height: 300vh;
  max-width: 300vw;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  z-index: 0;

  
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PortfolioIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PortfolioH1 = styled.h1`
   color: #fff59d;
  white-space: nowrap;
  font-size: 50px;
  text-align: center;
  text-shadow: 0 0 10px #fff59d;
`;

export const PortfolioH2 = styled.h2`
  color: '#030029';
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  box-shadow: 0 0 10px #212121;
`;

export const LinkWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 80px;

`

export const PortfolioLink = styled.h3`
  color: #1976d2;
  font-size: 1rem;
  &:hover {
        color: #fff59d;
        transition: 0.2s ease-in-out;
      }
`