import styled, { css } from "styled-components";
import { Link } from "../Link";
import { theme } from "../../styles/Theme";

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={true}>
        <ul>
          <Link href='#home'>Home</Link>
          <Link href='#about'>About me</Link>
          <Link href='#portfolio'>Portfolio</Link>
          <Link href='#footer'>Contact</Link>
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: none;
    // включить попапп
  }
`;

const BurgerButton = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 36px;
  height: 36px;
  top: 32px;
  right: 15px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    position: absolute;
    right: 34px;
    top: 5px;
    background-color: rgba(255, 255, 255, 0);
    height: 4px;
    transform: translateY(10px);
    border-radius: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        color: rgba(255, 255, 255, 0);
      `};

    &::before {
      content: "";
      position: absolute;
      width: 36px;
      height: 4px;
      background-color: ${theme.colors.accent};
      border-radius: 10px;
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg)" : "translateY(-10px)"};
      transform-origin: center;
      transition: transform 0.3s ease;
    }

    &::after {
      content: "";
      position: absolute;
      width: 36px;
      height: 4px;
      background-color: ${theme.colors.accent};
      border-radius: 10px;
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg)" : "translateY(10px)"};
      transform-origin: center;
      transition: transform 0.3s ease;
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${theme.colors.primaryBg};
  opacity: 0.75;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-left: 100px;
    gap: 54px;
  }
`;
