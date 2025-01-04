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
            Hello everyone! My name is Max Mityukov, and I am a programmer from the Moscow region. A little about me: I am currently studying web development, specializing in HTML, CSS, JavaScript, React, and Node.js. I have a deep passion for technology and enjoy turning ideas into functional and aesthetically pleasing projects. Why did I choose programming? It’s simple — I see it as a profession of the future, a way to express creativity, and a tool to solve real-world problems while building my career. My goal is to become a highly skilled full-stack developer capable of handling all stages of web development. Why should you work with me? I treat every project with precision and dedication, ensuring no detail is overlooked. I strive to deliver high-quality, efficient, and unique solutions that align with the client’s vision and target audience. I believe in clear communication, attention to detail, and timely execution to exceed expectations. If you’re interested in working with me, learning more about what I do, or using my services, feel free to reach out using the contact information below.
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
