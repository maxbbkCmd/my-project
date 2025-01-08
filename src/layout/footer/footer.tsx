import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Link } from "../../components/Link";
import { LinkTitle } from "../../components/LinkTitle";

export const Footer = () => {
  return (
    <StyledFooter id='footer'>
      <Container padding={"50px 15px 50px 15px"}>
        <FlexWrapper justify='space-evenly' footerWrap={ "wrap" } footerJustify={"space-between"} footerGap={ '50'}>
          <FooterLink>
              <Link href={"#home"} children="Home"></Link>
              <Link href={"#about"} children="About me"></Link>
              <Link href={"#portfolio"} children="Portfolio"></Link>
              <Link href={"#contact"} children="Contact"></Link>
          </FooterLink>
          <FooterLink>
              <LinkTitle title="Contact:"></LinkTitle>
              <Link href={"mailto:89263113112@mail.ru"} children="Email: 89263113112@mail.ru"></Link>
              <Link href={"https://t.me/maxMtk"} children="Telegram: @maxMtk" target="_blank"></Link>
              <Link href={"tel:+79263113112"} children="Calls: +7 (926) 311-31-12"></Link>
          </FooterLink>
          <FooterWrapper>
            <LogoWrapper>
              <Logo />
              <ArrowWrapper>
                <Icon iconId={"arrowTopIcon"} width={"36"} height={"36"} viewBox={"0 0 36 36"}/>
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
`;

const FooterLink = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 200;
  font-size: 18px;
  text-align: left;
  gap: 18px;
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

  @media ${theme.media.mobile} {
    gap: 105px;
  }

  @media screen and (max-width: 365px) {
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
  }
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
