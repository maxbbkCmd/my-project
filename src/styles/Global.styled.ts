import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.font};
  line-height: 1.2;
  min-width: 375px;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  background-color: unset;
  border: none;
}

section {


}

container::nth-of-type(1) {
  background-color: red;
}

section:nth-of-type(1),
section:nth-of-type(2) {
  background-color: ${theme.colors.secondaryBg};
}

`;
