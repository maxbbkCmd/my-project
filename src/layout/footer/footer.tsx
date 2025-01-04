import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter id='footer'>
      <Container padding={"50px 15px 50px 15px"}>
        <FlexWrapper justify='space-evenly'>
          <FooterLink>
            <li>
              <Link href='#home'>Home</Link>
            </li>
            <li>
              <Link href='#home'>About me</Link>
            </li>
            <li>
              <Link href='#home'>Portfolio</Link>
            </li>
            <li>
              <Link href='#home'>Contact</Link>
            </li>
          </FooterLink>
          <FooterLink>
            <li>Contact:</li>
            <li>Email: 89263113112@mail.ru</li>
            <li>Telegram: @maxMtk</li>
            <li>Calls: +7 (926) 311-31-12</li>
          </FooterLink>
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
  padding: 50px 0 50px;
`;

const FooterLink = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 200;
  font-size: 18px;
  text-align: left;
  gap: 18px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  font-weight: 200;
  font-size: 18px;
  text-align: left;
  gap: 18px;
  color: ${theme.colors.font};
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 57px;
  align-items: start;
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
