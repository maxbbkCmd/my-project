import React from "react";
import { Link } from "../../../../components/Link";
import { S } from "../../HeaderMenu_Styles";

export const Menu: React.FC = () => {
  return (
    <S.MenuItem>
      <Link href='#home'>Home</Link>
      <Link href='#about'>About me</Link>
      <Link href='#portfolio'>Portfolio</Link>
      <Link href='#footer'>Contact</Link>
    </S.MenuItem>
  );
};
