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
    <SectionContainer id='footer'>
      <Container>
        <FlexWrapper justify="space-around">
          <Navigation>
            <FooterLink>
              <Link href={"#home"} children='Home'></Link>
              <Link href={"#about"} children='About me'></Link>
              <Link href={"#portfolio"} children='Portfolio'></Link>
              <Link href={"#contact"} children='Contact'></Link>
            </FooterLink>
          </Navigation>
          <FooterLink>
            <LinkTitle title='Contact:'></LinkTitle>
            <Link
              href={"mailto:89263113112@mail.ru"}
              children='Email: 89263113112@mail.ru'
            ></Link>
            <Link
              href={"https://t.me/maxMtk"}
              children='Telegram: @maxMtk'
              target='_blank'
            ></Link>
            <Link
              href={"tel:+79263113112"}
              children='Calls: +7 (926) 311-31-12'
            ></Link>
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
    </SectionContainer>
  );
};

const SectionContainer = styled.footer`
  padding: 50px 0;
  background-color: ${theme.colors.secondaryBg};
  
  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: row;
    }
  }

  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      gap: 30px;
      flex-wrap: wrap;
    }
  }

`;

const Navigation = styled.nav``;

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

  @media ${theme.media.tablet} {
    width: 100%;
  }

  @media ${theme.media.mobile} {
    width: 100%;
  }
`;

const FooterSmallCopy = styled.small`
  font-size: 18px;
  font-weight: 200;


`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  @media ${theme.media.tablet} {
    justify-content: space-around;
  }

  @media ${theme.media.mobile} {
    gap: 105px;
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
