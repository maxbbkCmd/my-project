import myFoto1 from "../../../assets/images/1.png";
import myFoto2 from "../../../assets/images/3.png";
import myFoto3 from "../../../assets/images/2.png";
import styled from "styled-components";
import ellips from "../../../assets/images/Ellips.png";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Images } from "../../../components/Image";

export const About = () => {
  return (
    <StyledWrapper id="about">
      <Container position={"relative"} marginBottom={"119px"}>
        <DivWrapper></DivWrapper>
        <AboutWrapper>
          <ImagesContainer>
            <Images
              src={myFoto1}
              alt={"am"}
              border={`28px solid ${theme.colors.primaryBg}`}
              borderRadius={"28px"}
              width={"272px"}
            />
            <Images
              src={myFoto2}
              alt={"am"}
              border={`28px solid ${theme.colors.primaryBg}`}
              borderRadius={"28px"}
              width={"250px"}
            />
          </ImagesContainer>

          <CopyContainer>
            <AboutTitle>ABOUT ME</AboutTitle>
            <AboutCopy>
              Hello again everyone! So, you already know that my name is Gleb. A
              little about myself: student, 18 y.o., athlete-football player, I
              love creativity since childhood, I live in Donetsk, Ukraine. Why
              programming? Everything is elementary - I like it, the profession
              of the future, thanks to which I can provide myself and fulfill my
              dream - travel, at the moment I specialize in web design,
              front-end and back-end development, turnkey websites. Why should
              you choose me? I approach each order with great responsibility and
              love, as I want to make a name for myself, exclude plagiarism and
              negligence, fully study the project, the client and its target
              audience, work for quality, trying to make an order as quickly and
              uniquely as possible, taking into account all the edits and
              wishes. By trusting me, you will get the maximum return for your
              project, save your nerves and time. If you are interested in me ,
              you want to know something more or use my services, then I will
              provide all my contacts below.
            </AboutCopy>
          </CopyContainer>
          <ThirdImg src={myFoto3} alt='2' />
        </AboutWrapper>
      </Container>
    </StyledWrapper>
  );
};

const DivWrapper = styled.div`
  background-image: url(${ellips});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 1300px;
  position: absolute;
  height: 1101px;
  width: 1364px;
  top: -48px;
  left: -150px;
`;

const StyledWrapper = styled.section`
  display: flex;
`;

const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 961px;
`;

const ImagesContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 275px;
  left: 90px;
  top: 50px;
`;

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${theme.colors.primaryBg};
  border-radius: 14px;
`;

const AboutTitle = styled.h2`
  position: absolute;
  top: -25px;
  left: 63px;
  font-weight: 400;
  font-size: 48px;
`;

const AboutCopy = styled.p`
  margin: 63px;
  font-weight: 300;
  font-size: 19px;
  max-width: 370px;
  text-align: left;
  letter-spacing: 0.01em;
  font-weight: 200;
  font-size: 20px;
`;

//**------------------------------------------------ */

const ThirdImg = styled.img`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0px;
  border: 28px solid ${theme.colors.primaryBg};
  border-radius: 14px;
`;
