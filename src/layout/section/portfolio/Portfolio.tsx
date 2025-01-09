import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import landingImage from "../../../assets/images/MaskGroup.png";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Portfolio = () => {
  return (
    <StyledWrapper id='portfolio'>
      <Container>
        <PortfolioTitle>PORTFOLIO</PortfolioTitle>
        <PortfolioWrapper>
          <PortfolioSliderWrapper>
            <SliderImageWrapper>
              <SliderImages src={landingImage} alt='' />
            </SliderImageWrapper>

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
              <LinkWrapper>
                <SliderLink href='#q'>
                  More
                  <Icon
                    iconId={"arrowBottomIcon"}
                    width={"14"}
                    height={"10"}
                    viewBox={"0 0 14 10"}
                  />
                </SliderLink>
              </LinkWrapper>
            </SliderTextContainer>
            <SliderButtonLeft aria-label="Previous">
              <Icon
                iconId={"arrowLeftIcon"}
                width={"36"}
                height={"36"}
                viewBox={"0 0 36 36"}
              />
            </SliderButtonLeft>
            <SliderButtonRight aria-label="Next">
              <Icon
                iconId={"arrowRightIcon"}
                width={"36"}
                height={"36"}
                viewBox={"0 0 36 36"}
              />
            </SliderButtonRight>
          </PortfolioSliderWrapper>
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

  gap: 40px;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const SliderButtonLeft = styled.div`
  position: absolute;
  left: -100px;
  top: 250px;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.elements};
  border-radius: 50%;

  @media ${theme.media.tablet} {
  }
`;

const SliderButtonRight = styled.div`
  position: absolute;
  right: -100px;
  top: 250px;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.elements};
  border-radius: 50%;

  @media ${theme.media.tablet} {
    right: 160px;
    top: 967px;
  }
`;

const StyledWrapper = styled.section`
  padding: 100px 0 150px;

  button {
    background-color: ${theme.colors.primaryBg};
  }
`;

const PortfolioSliderWrapper = styled.div`
  position: relative;
  display: flex;
  border-radius: 29px;
  background-color: ${theme.colors.secondaryBg};
  padding: 50px;
  max-width: 970px;
  width: 100%;
  flex-wrap: wrap;
  gap: 81px;

  @media ${theme.media.tablet} {
    gap: 57px;
  }

  @media screen and (max-width: 1200px) {
    gap: 57px;
    max-width: 550px;
    padding: 30px 25px;
  }
`;

const SliderImageWrapper = styled.div``;

const SliderImages = styled.img`
  max-height: 500px;
  width: 100%;
  object-fit: contain;
  display: block;
  object-fit: cover;
  border-radius: 30px;
`;

const SliderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  width: 50%;
  max-width: 295px;
  gap: 25px;
  min-height: 500px;
  justify-content: space-evenly;

  @media ${theme.media.tablet} {
    margin: 0;
  }

  @media screen and (max-width: 1200px) {
    max-width: 493px;
    width: 100%;
    justify-content: start;
    min-height: 100%;
  }
`;

const SliderTitel = styled.h3`
  font-weight: 300;
  font-size: 24px;
`;

const SliderCopy = styled.p`
  font-weight: 200;
  font-size: 18px;
`;

const SliderLink = styled.a`
  font-weight: 200;
  font-size: 18px;
  color: ${theme.colors.elements};
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
`;
