import myFoto1 from "../../../assets/images/1.png";
import myFoto2 from "../../../assets/images/3.png";
import myFoto3 from "../../../assets/images/2.png";

import { theme } from "../../../styles/Theme";
import { Images } from "../../../components/Image";
import { Container } from "../../../components/Container";
import { S } from "./About_Styles";

export const About: React.FC = () => {
  return (
    <S.SectionContainer id='about'>
      <Container>
        <S.AboutWrapper>
          <S.ImagesContainer>
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
          </S.ImagesContainer>

          <S.TextWrapper>
            <S.Title>ABOUT ME</S.Title>
            <S.Description>
              Hello everyone! My name is Max Mityukov, and I am a programmer
              from the Moscow region. A little about me: I am currently studying
              web development, specializing in HTML, CSS, JavaScript, React, and
              Node.js. I have a deep passion for technology and enjoy turning
              ideas into functional and aesthetically pleasing projects. Why did
              I choose programming? It’s simple — I see it as a profession of
              the future, a way to express creativity, and a tool to solve
              real-world problems while building my career. My goal is to become
              a highly skilled full-stack developer capable of handling all
              stages of web development. Why should you work with me? I treat
              every project with precision and dedication, ensuring no detail is
              overlooked. I strive to deliver high-quality, efficient, and
              unique solutions that align with the client’s vision and target
              audience. I believe in clear communication, attention to detail,
              and timely execution to exceed expectations. If you’re interested
              in working with me, learning more about what I do, or using my
              services, feel free to reach out using the contact information
              below.
            </S.Description>
          </S.TextWrapper>
          <S.ThirdImg src={myFoto3} alt='2' />
        </S.AboutWrapper>
      </Container>
    </S.SectionContainer>
  );
};
