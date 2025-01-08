import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import landingImage from "../assets/images/MaskGroup.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "../styles/Theme";

export function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        <SlideWrapper>
          <ContentWrapper>
            <ImageWrapper>
              <SlideImage src={landingImage} alt="Landing Ice-cream" />
            </ImageWrapper>
            <TextWrapper>
              <SSliderTitle>Landing Ice-cream</SSliderTitle>
              <SliderCopy>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel.
              </SliderCopy>
              <MoreLink href="#">More →</MoreLink>
            </TextWrapper>
          </ContentWrapper>
        </SlideWrapper>

        <SlideWrapper>
          <ContentWrapper>
            <ImageWrapper>
              <SlideImage src={landingImage} alt="Landing Ice-cream" />
            </ImageWrapper>
            <TextWrapper>
              <SSliderTitle>Landing Ice-cream</SSliderTitle>
              <SliderCopy>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel.
              </SliderCopy>
              <MoreLink href="#">More →</MoreLink>
            </TextWrapper>
          </ContentWrapper>
        </SlideWrapper>
      </StyledSlider>
    </SliderContainer>
  );
}

// Контейнер для слайдера
const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

// Стили для слайдера
const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    background-color: ${theme.colors.elements};
    width: 50px;
    height: 50px;
    z-index: 10;
    border-radius: 50%;
  }

  .slick-prev::before,
  .slick-next::before {
    font-size: 20px;
    color: #fff;
  }
`;

// Обёртка для слайда
const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Обёртка для содержимого
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Обёртка для изображения
const ImageWrapper = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Обёртка для текста
const TextWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const SSliderTitle = styled.h2`
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 20px;
`;

const SliderCopy = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const MoreLink = styled.a`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.elements};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
