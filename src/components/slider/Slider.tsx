import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Icon } from "../icon/Icon";
import { S } from "../../layout/section/portfolio/Postfolio_Styles";
import landingImage from "../../assets/images/MaskGroup.png";
import landingImage2 from "../../assets/images/MyDesktop.png";
import "./Slider_Styles.css"

type SlidePropsType = {
  title: string;
  description: string;
  imageSrc: string;
};

export const Slide = (props: SlidePropsType) => {
  return (
    <S.SlideWrapper>
      <S.ImgWrapper>
        <S.Image src={props.imageSrc} alt={props.title} />
      </S.ImgWrapper>
      <S.TextWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
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
    </S.SlideWrapper>
  );
};

const items = [
  <Slide
    title={"Landing Ice-cream"}
    imageSrc={landingImage}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."}
  />,
  <Slide
    title={"Landing Ice-cream #2"}
    imageSrc={landingImage2}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."}
  />,
  <Slide
    title={"Landing Ice-cream #3"}
    imageSrc={landingImage}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."}
  />,
];

export const Carousel = () => (
  <AliceCarousel mouseTracking items={items} controlsStrategy='alternate' />
);
