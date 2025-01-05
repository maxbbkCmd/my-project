import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../../../components/IconWrapper";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper wrap="wrap" gap="30px" justify="center">
          <IconWrapper iconId={'penIcon'} width={'96'} height={'96'} viewBox={'0 0 96 96'} text={ 'Product Design' }/>
          <IconWrapper iconId={'uxUiIcon'} width={'148'} height={'54'} viewBox={'0 0 148 54'} text={ 'UX/UI Design' }/>
          <IconWrapper iconId={'burgerIcon'} width={'75'} height={'75'} viewBox={'0 0 75 75'} text={ 'Icon Design' }/>
          <IconWrapper iconId={'squareIcon'} width={'75'} height={'75'} viewBox={'0 0 75 75'} text={ 'Logo Design' }/>
          <IconWrapper iconId={'computerIcon'} width={'75'} height={'75'} viewBox={'0 0 75 75'} text={ 'Backend' }/>
          <IconWrapper iconId={'badgesIcon'} width={'75'} height={'75'} viewBox={'0 0 75 75'} text={ 'Frontend' }/>
          <IconWrapper iconId={'backendIcon'} width={'75'} height={'75'} viewBox={'0 0 75 75'} text={ 'Motion' }/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

export const StyledSkills = styled.section`
  padding: 100px 0;
`

