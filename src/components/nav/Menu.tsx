import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About me</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#footer'>Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;

  ul {
    display: flex;
    gap: 145px;
  }
  a {
    color: ${theme.colors.font};
    font-weight: 200;
    font-size: 18px;
  }
`;
