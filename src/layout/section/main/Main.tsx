import styled from "styled-components";
import manImg from "../../../assets/images/Gleb.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain id='home'>
      <Container>
        <FlexWrapper align={"end"} justify={"space-between"} wrap="nowrap" padding={"114px 0 0 0"}>
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

  z-index: 999;
  `;
  
  StyledMain.displayName = "MainStyledComponent";

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  max-width: 447px;
  text-align: left;
  margin-bottom: 142px;

  @media ${theme.media.mobile} {
    gap: 12px;
  }
`;

const ImageWrapper = styled.div`
 @media ${theme.media.tablet} {
  display: none;
 }

`;

const GreatingSpan = styled.span`
  position: relative;
  width: min-content;
  ${font({weight: 400, lineHeight: 1.2, Fmax: 48, Fmin: 27})}
  letter-spacing: 0.05em;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 72px;
  ${font({family: 'Poppins, sans-serif', weight: 600, color: theme.colors.font, lineHeight: 1.2, Fmax: 72, Fmin: 52})}
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
  object-fit: cover;
  display: block;
  max-width: 632px;
  width: 100%;
`;
