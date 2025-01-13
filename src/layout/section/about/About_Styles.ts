import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import ellips from "../../../assets/images/Ellips.png";
import { Container } from "../../../components/Container";

const SectionContainer = styled.section`
  display: flex;
  padding: 0 0 90px;
  background-color: ${theme.colors.secondaryBg};

  ${Container} {
    padding: 0 0;
  }
`;

const AboutWrapper = styled.div`
  position: relative;
  background-image: url(${ellips});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 961px;
  top: 0px;
  left: 0px;

  @media screen and (max-width: 1200px) {
    position: relative;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    height: 100%;
  }
`;

const ImagesContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 275px;
  left: 90px;
  top: 50px;

  @media screen and (max-width: 1200px) {
    position: static;
    margin: 0 -20px;
    gap: 400px;
  }

  @media ${theme.media.tablet} {
    > :first-child {
      display: none;
    }
    > :nth-child(2) {
      margin: -20px 0;
    }
  }
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primaryBg};
  border-radius: 14px;
  padding: 63px;

  @media ${theme.media.tablet} {
    padding: 63px 40px 40px ;
  }

  @media ${theme.media.mobile} {
    padding: 63px 15px 15px ;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: -25px;
  left: 63px;
  font-weight: 400;
  font-size: 48px;

  @media screen and (max-width: 1200px) {
    left: 25px;
  }

  @media ${theme.media.mobile} {
    padding: 0px;
    position: absolute;
    top: -30px;
    left: 25px;
  }
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 19px;
  max-width: 370px;
  text-align: left;
  letter-spacing: 0.01em;
  font-weight: 200;
  font-size: 20px;

  @media ${theme.media.tablet} {
    max-width: 100%;
  }

  @media ${theme.media.mobile} {
    margin: 0;
    max-width: 100%;
  }
`;

const ThirdImg = styled.img`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0px;
  border: 28px solid ${theme.colors.primaryBg};
  border-radius: 14px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const S = {
  SectionContainer,
  AboutWrapper,
  ImagesContainer,
  TextWrapper,
  Title,
  Description,
  ThirdImg
}