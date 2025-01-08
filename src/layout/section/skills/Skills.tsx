import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../../../components/IconWrapper";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container padding={"113px 15px 0"}>
        <FlexWrapper wrap='wrap' gap='30px' justify='center'>
          <IconWrapper
            iconId={"penIcon"}
            width={"100%"}
            height={"75px"}
            viewBox={"0 0 96 96"}
            text={"Product Design"}
            mobileWidth='114px'
            mobileHeight='50px'
          />
          <IconWrapper
            iconId={"uxUiIcon"}
            width={"100%"}
            height={"54"}
            viewBox={"0 -10 148 54"}
            text={"UX/UI Design"}
            mobileWidth='114px'
            mobileHeight='50px'
          />
          <IconWrapper
            iconId={"burgerIcon"}
            width={"75"}
            height={"75"}
            viewBox={"0 0 75 75"}
            text={"Icon Design"}
            mobileWidth='50px'
            mobileHeight='50px'
          />
          <IconWrapper
            iconId={"squareIcon"}
            width={"75"}
            height={"75"}
            viewBox={"0 0 75 75"}
            text={"Logo Design"}
            mobileWidth='50px'
            mobileHeight='50px'
          />
          <IconWrapper
            iconId={"computerIcon"}
            width={"75"}
            height={"75"}
            viewBox={"0 0 75 75"}
            text={"Backend"}
            mobileWidth='50px'
            mobileHeight='50px'
          />
          <IconWrapper
            iconId={"badgesIcon"}
            width={"75"}
            height={"75"}
            viewBox={"0 0 75 75"}
            text={"Frontend"}
            mobileWidth='50px'
            mobileHeight='50px'
          />
          <IconWrapper
            iconId={"backendIcon"}
            width={"75"}
            height={"75"}
            viewBox={"0 0 75 75"}
            text={"Motion"}
            mobileWidth='50px'
            mobileHeight='50px'
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

export const StyledSkills = styled.section`
  /* padding: 113px 0; */

  @media ${theme.media.mobile} {
    /* padding: 90px 0; */
  }
`;
