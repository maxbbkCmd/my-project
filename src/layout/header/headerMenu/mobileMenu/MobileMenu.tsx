import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";


export const MobileMenu: React.FC = () => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={true}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

