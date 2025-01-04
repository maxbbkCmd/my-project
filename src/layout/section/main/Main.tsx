import styled from "styled-components";
import manImg from "../../../assets/images/Man.png";
import manIcon from "../../../assets/images/Man-icon.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} gap='123px'>
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
            <Elips>
              <span></span>
            </Elips>
            <Icon src={manIcon} alt='myImg' />
            <Photo src={manImg} alt='myImg' />
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
`;

const MainTextContainer = styled.div`
  max-width: 447px;
  text-align: left;
  gap: 27px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 632px;
  height: 674px;
`;

const GreatingSpan = styled.span`
  font-weight: 400;
  font-size: 48px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 15px;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: 15px;
    z-index: -1;
  }
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 72px;
  margin-top: 27px;
`;

const AboutText = styled.p`
  font-weight: 200;
  font-size: 18px;
  margin-top: 27px;
`;

const ContactButton = styled.button`
  border-radius: 6px;
  width: 200px;
  height: 47px;
  background-color: #e2a300;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  margin-top: 27px;
`;

const Elips = styled.div`
  span {
    &::before {
      content: "";
      width: 575px;
      height: 575px;
      position: absolute;
      border: 63px solid ${theme.colors.accent};
      box-shadow: 0 0 152px 0 rgba(0, 196, 240, 0.42);
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

const Icon = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  object-fit: contain;
  bottom: 0;
  z-index: 3;
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 100px;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
`;
