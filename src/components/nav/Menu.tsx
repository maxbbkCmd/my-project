import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href='/#'>Home</a>
        </li>
        <li>
          <a href='/#'>About me</a>
        </li>
        <li>
          <a href='/#'>Portfolio</a>
        </li>
        <li>
          <a href='/#'>Contact</a>
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
