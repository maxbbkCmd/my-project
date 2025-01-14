import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Portfolio = styled.section`
  padding: 100px 0 150px;
`;

const PortfolioTitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  margin-bottom: 50px;
`;

const PortfolioWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const PreviousBtn = styled.button`
  position: absolute;
  left: -100px;
  top: 250px;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.elements};
  border-radius: 50%;

  @media ${theme.media.tablet} {
  }
`;

const NextBtn = styled.button`
  position: absolute;
  right: -100px;
  top: 250px;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.elements};
  border-radius: 50%;

  @media ${theme.media.tablet} {
    right: 160px;
    top: 967px;
  }
`;

const PortfolioSliderWrapper = styled.div`
  position: relative;
  display: flex;
  border-radius: 29px;
  background-color: ${theme.colors.secondaryBg};
  padding: 50px;
  max-width: 970px;
  width: 100%;
  gap: 81px;
  border: 1px solid red;

  @media ${theme.media.tablet} {
    gap: 57px;
  }

  @media screen and (max-width: 1200px) {
    gap: 57px;
    max-width: 550px;
    padding: 30px 25px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 600px) {
    max-width: 343px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width:100%;
  height: 100%;
  border-radius: 30px;

  @media ${theme.media.mobile} {
    max-width: 294px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  width: 50%;
  max-width: 295px;
  gap: 25px;
  min-height: 500px;
  justify-content: space-evenly;

  @media ${theme.media.tablet} {
    margin: 0;
  }

  @media screen and (max-width: 1200px) {
    max-width: 493px;
    width: 100%;
    justify-content: start;
    min-height: 100%;
  }
`;

const Title = styled.h3`
  font-weight: 300;
  font-size: 24px;
`;

const Description = styled.p`
  font-weight: 200;
  font-size: 16px;
`;

const Link = styled.a`
  font-weight: 200;
  font-size: 18px;
  color: ${theme.colors.elements};

  svg {
    width: 14px;
    height: 10px
  }

`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  gap: 80px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 50px;
  }
`

const ImgWrapper = styled.div`
  width: 500px;
  height: 500px;

  @media screen and (max-width: 600px) {
    max-width: 294px;
    max-height: 294px;
  }
`

export const S = {
  Portfolio,
  PortfolioTitle,
  PortfolioWrapper,
  PreviousBtn,
  NextBtn,
  PortfolioSliderWrapper,
  Image,
  TextWrapper,
  Title,
  Description,
  Link,
  LinkWrapper,
  SlideWrapper,
  ImgWrapper,
}