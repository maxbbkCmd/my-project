import styled, { css } from "styled-components";
import manImg from "../../../assets/images/man.png";
import mainIcons from "../../../assets/images/mainIcons.png";
import newElipse from "../../../assets/images/NewElipse_shadow.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <SectionContainer id='home'>
      <Container >
        <FlexWrapper justify="space-between">
          <MainTextContainer>
            <Title>Программист разработчик - front-end developer</Title>
            <Greeting>HELLO</Greeting>
            <GreetingTitle>I'm Maxim Mityukov</GreetingTitle>
            <Description>
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </Description>
            <ContactButton>CONTACT ME</ContactButton>
          </MainTextContainer>
          <ImageWrapper>
            <Photo src={manImg} alt='myImg' />
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  padding: 114px 0 0;
  background-color: ${theme.colors.primaryBg};
`;

const Title = styled.h1`
  display: none;
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 447px;
  text-align: left;
  margin-bottom: 124px;
  width: 100%;

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

  ${theme.media.tablet} {
    display: none;
  }

  ${theme.media.mobile} {
    display: block;
  }
`;

const Greeting = styled.span`
  position: relative;
  width: min-content;
  ${font({ weight: 400, lineHeight: 1.2, Fmax: 48, Fmin: 27 })}
  letter-spacing: 0.05em;
`;

const GreetingTitle = styled.span`
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

const Description = styled.p`
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
