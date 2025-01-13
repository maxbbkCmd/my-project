import { Icon } from "../../../components/icon/Icon";
import landingImage from "../../../assets/images/MaskGroup.png";
import { Container } from "../../../components/Container";
import { S } from "./Postfolio_Styles";

export const Portfolio: React.FC = () => {
  return (
    <S.Portfolio id='portfolio'>
      <Container>
        <S.PortfolioTitle>PORTFOLIO</S.PortfolioTitle>
        <S.PortfolioWrapper>
          <S.PortfolioSliderWrapper>
            <S.Image src={landingImage} alt='' />

            <S.TextWrapper>
              <S.Title>Landing Ice-cream</S.Title>
              <S.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. Nullam hendrerit cursus purus, sit amet viverra
                arcu gravida vel.
              </S.Description>
              <S.LinkWrapper>
                <S.Link href='#q'>
                  More
                  <Icon
                    iconId={"arrowBottomIcon"}
                    width={"14"}
                    height={"10"}
                    viewBox={"0 0 14 10"}
                  />
                </S.Link>
              </S.LinkWrapper>
            </S.TextWrapper>
            <S.PreviousBtn aria-label='Previous'>
              <Icon
                iconId={"arrowLeftIcon"}
                width={"36"}
                height={"36"}
                viewBox={"0 0 36 36"}
              />
            </S.PreviousBtn>
            <S.NextBtn aria-label='Next'>
              <Icon
                iconId={"arrowRightIcon"}
                width={"36"}
                height={"36"}
                viewBox={"0 0 36 36"}
              />
            </S.NextBtn>
          </S.PortfolioSliderWrapper>
        </S.PortfolioWrapper>
      </Container>
    </S.Portfolio>
  );
};
