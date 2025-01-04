import styled from "styled-components";
import { Link } from "../Link";

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

  ul {
    display: flex;
    gap: 145px;
  }
`;
