import styled from "styled-components";
import { theme } from "../styles/Theme";

type LinkProps = {
  href?: string;
  children: string;
  target?: string;
};

export const Link = ({ href, children, target }: LinkProps) => {
  return (
    <li>
      <Links href={href} target={target}>
        {children}
      </Links>
    </li>
  );
};

const Links = styled.a`
  display: inline-block;
  flex-direction: column;
  font-weight: 200;
  font-size: 18px;
  text-align: left;
  gap: 18px;
  color: ${theme.colors.font};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px; 
    width: 0%; 
    height: 2px; 
    background-color: ${theme.colors.elements}; 
    transition: width 0.3s ease; 
  }

  &:hover::after {
    width: 100%; 
  }
`;
