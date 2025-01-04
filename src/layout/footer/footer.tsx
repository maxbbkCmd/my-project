import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify='space-evenly' margin='50px 0 50px 0'>
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Contact:</li>
            <li>Email: wwww@mail.ru</li>
            <li>Inst: @maxMtk</li>
            <li>Calls: +7 (926) 311-31-12</li>
          </ul>
          <FooterWrapper>
            <LogoWrapper>
              <Logo />
              <ArrowWrapper>
                <Icon
                  iconId={"arrowTopIcon"}
                  width={"36"}
                  height={"36"}
                  viewBox={"0 0 36 36"}
                />
              </ArrowWrapper>
            </LogoWrapper>
            <FooterSmallCopy>Copyright © 2021, Notitanic</FooterSmallCopy>
          </FooterWrapper>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.secondaryBg};

  ul {
    display: flex;
    flex-direction: column;
    font-weight: 200;
    font-size: 18px;
    text-align: left;
    gap: 18px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 57px;
`;

const FooterSmallCopy = styled.small`
  font-size: 18px;
  font-weight: 200;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const ArrowWrapper = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${theme.colors.elements};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
