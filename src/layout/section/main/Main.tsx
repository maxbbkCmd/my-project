import manImg from "../../../assets/images/man.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main id='home'>
      <Container>
        <FlexWrapper justify='space-between'>
          <S.TextWrapper>
            <S.Title>Программист разработчик - front-end developer</S.Title>
            <S.Greeting>HELLO</S.Greeting>
            <S.GreetingTitle>I'm Maxim Mityukov</S.GreetingTitle>
            <S.Description>
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </S.Description>
            <S.ContactButton>CONTACT ME</S.ContactButton>
          </S.TextWrapper>
          <S.ImageWrapper>
            <S.Photo src={manImg} alt='myImg' />
          </S.ImageWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
