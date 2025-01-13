import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Footer = styled.footer`
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

export const S = {
  Footer,
  Navigation,
  FooterLink,
  FooterWrapper,
  FooterSmallCopy,
  LogoWrapper,
  ArrowWrapper
}