import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import mainIcons from "../../../assets/images/mainIcons.png";
import newElipse from "../../../assets/images/NewElipse.png";

const Main = styled.section`
  display: flex;
  padding: 114px 0 0;
  background-color: ${theme.colors.primaryBg};
`;

const Title = styled.h1`
  display: none;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  max-width: 447px;
  width: 100%;
  margin-bottom: 124px;

  @media ${theme.media.mobile} {
    gap: 12px;
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 632px;
  height: 656px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  &::before {
    background-image: url(${mainIcons});
    top: 0;
    left: 0;
    z-index: 4;
  }

  &::after {
    background-image: url(${newElipse});
    top: 0;
    left: 0;
    z-index: 1;
  }

  ${theme.media.tablet} {
    display: none;
  }

  ${theme.media.mobile} {
    display: block;
  }
`;

const Greeting = styled.span`
  position: relative;
  width: min-content;
  ${font({ weight: 400, lineHeight: 1.2, Fmax: 48, Fmin: 27 })}
  letter-spacing: 0.05em;
`;

const GreetingTitle = styled.span`
  ${font({
    family: "Poppins, sans-serif",
    weight: 600,
    color: theme.colors.font,
    lineHeight: 1.2,
    Fmax: 72,
    Fmin: 52,
  })}
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Description = styled.p`
  font-weight: 200;
  font-size: 18px;
`;

const ContactButton = styled.button`
  border-radius: 6px;
  padding: 14px 40px;
  width: max-content;
  background-color: #e2a300;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
`;

const Photo = styled.img`
  position: relative;
  object-fit: contain;
  height: 100%;
  width: 100%;
  z-index: 3;
  object-position: bottom;
`;


export const S = {
  Main,
  Title,
  TextWrapper,
  ImageWrapper,
  Greeting,
  GreetingTitle,
  Description,
  ContactButton,
  Photo
}