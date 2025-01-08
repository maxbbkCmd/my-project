import styled from "styled-components";
import { theme } from "../styles/Theme";

type FlexWrapperProps = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  margin?: string;
  footerWrap?: string;
  footerJustify?: string;
  footerGap?: string;
  maxWidth?: string;
  height?: string;
  padding?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0px"};
  //should be removed
  height: ${(props) => props.height || "100%"};
  margin: ${(props) => props.margin || "0px"};
  max-width: ${(props) => props.maxWidth || "1200px"};
  padding: ${(props) => props.padding || "0px"};

  @media ${theme.media.mobile} {
    gap: 25px;
  }

  ${(props) => props.footerWrap && props.footerJustify && props.footerGap && `flex-wrap: wrap;
  
  @media ${theme.media.tablet} {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 35px;
  }

  @media ${theme.media.mobile} {
    justify-content: flex-start;
    gap: 50px;
  }
  `}


`;
