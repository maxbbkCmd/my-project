import styled from "styled-components";
import { Link } from "../Link";
import { theme } from "../../styles/Theme";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <Link href='#home'>Home</Link>
        <Link href='#about'>About me</Link>
        <Link href='#portfolio'>Portfolio</Link>
        <Link href='#footer'>Contact</Link>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 710px;

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 950px) {
      margin-left: 25px;
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
