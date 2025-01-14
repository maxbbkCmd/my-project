import { Menu } from "../menu/Menu";
import { S } from "../../HeaderMenu_Styles";
import { useState } from "react";

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toogleMenu = () => setIsOpen(!isOpen);

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={isOpen} onClick={ toogleMenu }>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={isOpen} >
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
