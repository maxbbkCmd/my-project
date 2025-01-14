import { S } from "./Postfolio_Styles";
import { Container } from "../../../components/Container";
import { Carousel } from "../../../components/slider/Slider";

export const Portfolio: React.FC = () => {
  return (
    <S.Portfolio id='portfolio'>
      <Container>
        <S.PortfolioTitle>PORTFOLIO</S.PortfolioTitle>
        <S.PortfolioWrapper>
          <S.PortfolioSliderWrapper>
            <Carousel />
          </S.PortfolioSliderWrapper>
        </S.PortfolioWrapper>
      </Container>
    </S.Portfolio>
  );
};
