import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import landingImage from "../../../assets/images/MaskGroup.png";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Portfolio = () => {
  return (
    <StyledWrapper id="portfolio">
      <Container>
        <PortfolioTitle>PORTFOLIO</PortfolioTitle>
        <PortfolioWrapper>
          <SliderButton>
            <Icon
              iconId={"arrowLeftIcon"}
              width={"36"}
              height={"36"}
              viewBox={"0 0 36 36"}
            />
          </SliderButton>
          <PortfolioSliderWrapper>
            <SliderImages src={landingImage} alt='' />

            <SliderTextContainer>
              <SliderTitel>Landing Ice-cream</SliderTitel>
              <SliderCopy>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. Nullam hendrerit cursus purus, sit amet viverra
                arcu gravida vel.
              </SliderCopy>
              <MoreLink>
                <SliderLink href='#q'>
                  More
                  <Icon
                    iconId={"arrowBottomIcon"}
                    width={"14"}
                    height={"10"}
                    viewBox={"0 0 14 10"}
                  />
                </SliderLink>
              </MoreLink>
            </SliderTextContainer>
          </PortfolioSliderWrapper>
          <SliderButton>
            <Icon
              iconId={"arrowRightIcon"}
              width={"36"}
              height={"36"}
              viewBox={"0 0 36 36"}
            />
          </SliderButton>
        </PortfolioWrapper>
      </Container>
    </StyledWrapper>
  );
};

const PortfolioTitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  margin-bottom: 50px;
`;

const PortfolioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderButton = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.elements};
  border-radius: 50%;
`;

const StyledWrapper = styled.section`
  padding: 100px 0 150px;

  button {
    background-color: ${theme.colors.primaryBg};
  }
`;

const PortfolioSliderWrapper = styled.div`
  display: flex;
  border-radius: 29px;
  margin: 0 auto;
  background-color: ${theme.colors.secondaryBg};
  width: max-content;
  margin: 0px 40px 0px 40px;
`;

const SliderImages = styled.img`
  margin: 50px 0 50px 50px;
  max-height: 500px;

  img {
    object-fit: cover;
  }
`;

const SliderTextContainer = styled.div`
  margin: 50px 50px 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

const SliderTitel = styled.h3`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 25px;
`;

const SliderCopy = styled.p`
  font-weight: 200;
  font-size: 18px;
  margin-bottom: 25px;
`;

const SliderLink = styled.a`
  font-weight: 200;
  font-size: 18px;
  color: ${theme.colors.elements};
`;

const MoreLink = styled.div`
  display: flex;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
`;
