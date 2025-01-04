import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/nav/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper gap={'219px'} align={'center'}>
          <Logo />
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
`;
