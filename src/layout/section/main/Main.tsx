import styled from "styled-components";
import manImg from "../../../assets/images/Gleb.png";
import manIcon from "../../../assets/images/Man-icon.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain id='home'>
      <Container>
        <FlexWrapper align={"center"} justify={"space-evenly"} wrap="wrap">
          <MainTextContainer>
            <GreatingSpan>HELLO</GreatingSpan>
            <MainTitle>I’m Max Mityukov </MainTitle>
            <AboutText>
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </AboutText>
            <ContactButton>CONTACT ME</ContactButton>
          </MainTextContainer>
          <ImageWrapper>
            <Photo src={manImg} alt='myImg' />
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  margin-top: 104px;
  z-index: 999;
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  max-width: 447px;
  text-align: left;
  gap: 27px;
`;

const ImageWrapper = styled.div`
  position: relative;

`;

const GreatingSpan = styled.span`
  font-weight: 400;
  font-size: 48px;
  position: relative;
  width: min-content;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 15px;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: 10px;
    z-index: -1;
  }
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 72px;
`;

const AboutText = styled.p`
  font-weight: 200;
  font-size: 18px;
`;

const ContactButton = styled.button`
  border-radius: 6px;
  padding: 14px 40px;
  width: max-content;
  background-color: #e2a300;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
`;

const Elips = styled.div`
  span {
    &::before {
      content: "";
      width: 575px;
      height: 575px;
      position: absolute;
      border: 63px solid ${theme.colors.accent};
      box-shadow: 0 0 150px 0 rgba(0, 196, 240, 0.42);
      border-radius: 50%;
      object-fit: contain;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 0;
    }
  }
`;

const Photo = styled.img`
  object-fit: cover;
  display: block;
  max-width: 632px;
  width: 100%;
`;
