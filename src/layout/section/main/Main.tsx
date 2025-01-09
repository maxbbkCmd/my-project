import styled from "styled-components";
import manImg from "../../../assets/images/man.png";
import mainIcons from "../../../assets/images/mainIcons.png";
import newElipse from "../../../assets/images/NewElipse.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain id='home'>
      <Container>
        <FlexWrapper
          align={"end"}
          justify={"space-between"}
          wrap='nowrap'
          padding={"114px 0 0 0"}
          height={"100vh"}
        >
          <MainTextContainer>
            <GreatingSpan>HELLO</GreatingSpan>
            <MainTitle>I’M GLEB KOSTRUBOV</MainTitle>
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
  z-index: 999;
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 447px;
  text-align: left;
  margin-bottom: 124px;

  @media ${theme.media.mobile} {
    gap: 12px;
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 632px;
  height: 656px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  &::before {
    background-image: url(${mainIcons});
    top: 0;
    left: 0;
    z-index: 4;
  }

  &::after {
    background-image: url(${newElipse});
    top: 0;
    left: 0;
    z-index: 1;
    
  }

  @media ${theme.media.tablet} {
    display: none;
  }

  @media ${theme.media.mobile} {
    display: block;
  }
`;

const GreatingSpan = styled.span`
  position: relative;
  width: min-content;
  ${font({ weight: 400, lineHeight: 1.2, Fmax: 48, Fmin: 27 })}
  letter-spacing: 0.05em;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 72px;
  ${font({
    family: "Poppins, sans-serif",
    weight: 600,
    color: theme.colors.font,
    lineHeight: 1.2,
    Fmax: 72,
    Fmin: 52,
  })}
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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

const Photo = styled.img`
  position: relative;
  object-fit: contain;
  height: 100%;
  width: 100%;
  z-index: 3;
  object-position: bottom;
`;

