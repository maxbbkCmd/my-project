import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/nav/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "../../components/nav/MobileMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} maxWidth={"1100px"} headerJustify={ "start"}>
          <Logo />
          <Menu />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 26px 0;
  background-color: ${theme.colors.primaryBg};
  z-index: 99999;
`;
