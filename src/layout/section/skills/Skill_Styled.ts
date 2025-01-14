import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  padding: 115px 0 115px;
  background-color: ${theme.colors.secondaryBg};

  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      gap: 25px;
    }
  }

  svg {
    max-width: 148px;
    width: 100%;
    max-height: 75px;
    height: 100%;

    @media ${theme.media.tablet} {
      max-width: 114px;
      max-height: 50px;
    }
  }
`;

export const S = {
  Skills,
};
