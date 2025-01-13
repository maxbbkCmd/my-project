import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  padding: 26px 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: ${theme.colors.primaryBg};
  z-index: 10;
`;

export const S = {
  Header,
};
