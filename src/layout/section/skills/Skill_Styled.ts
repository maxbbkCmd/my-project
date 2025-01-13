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
`;

export const S = {
  Skills,
}