import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

//menu
const MenuItem = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 950px) {
    margin-left: 25px;
  }
`;

//mobileMenu

const MobileMenu = styled.nav``;

const BurgerButton = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 36px;
  height: 36px;
  top: 32px;
  right: 15px;
  z-index: 9999999999;
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
        background-color: rgba(255, 255, 255, 0);
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
  display: flex;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: none; // вкл\выкл попап
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 54px;
  }
`;

//desktopMenu

const DesktopMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 710px;
`;

//export

export const S = {
  MenuItem,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  DesktopMenu,
};
