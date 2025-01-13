import { Icon } from "../../components/icon/Icon";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Link } from "../../components/Link";
import { LinkTitle } from "../../components/LinkTitle";
import { S } from "./Footer_Styles";

const navData = [
  { url: "#home", children: "Home" },
  { url: "#about", children: "About me" },
  { url: "#portfolio", children: "Portfolio" },
  { url: "#contact", children: "Contact" },
];

const contactsData = [
  { url: "mailto:89263113112@mail.ru", children: "Email: 89263113112@mail.ru" },
  {
    url: "https://t.me/maxMtk",
    children: "Telegram: @maxMtk",
    target: "_blank",
  },
  { url: "tel:+79263113112", children: "Calls: +7 (926) 311-31-12" },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer id='footer'>
      <Container>
        <FlexWrapper justify='space-around'>
          <S.Navigation>
            <S.FooterLink>
              {navData.map(({ url, children }) => (
                <Link href={url} children={children} />
              ))}
            </S.FooterLink>
          </S.Navigation>
          <S.FooterLink>
            <LinkTitle title='Contact:'></LinkTitle>
            {contactsData.map(({ url, children, target }) => (
              <Link key={url} href={url} children={children} target={target} />
            ))}
          </S.FooterLink>
          <S.FooterWrapper>
            <S.LogoWrapper>
              <Logo />
              <S.ArrowWrapper>
                <Icon
                  iconId={"arrowTopIcon"}
                  width={"36"}
                  height={"36"}
                  viewBox={"0 0 36 36"}
                />
              </S.ArrowWrapper>
            </S.LogoWrapper>
            <S.FooterSmallCopy>Copyright © 2021, Notitanic</S.FooterSmallCopy>
          </S.FooterWrapper>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
