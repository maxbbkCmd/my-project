import styled from "styled-components";
import iconSprite from "../../assets/icon/Sprite.svg";
import { theme } from "../../styles/Theme";

export type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  mobileHeight?: string;
  mobileWidth?: string;
};

type StyledIconProps = {
  width?: string;
  height?: string;
  mobileHeight?: string;
  mobileWidth?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledIcon
      width={props.width || "181"}
      height={props.height || "48"}
      viewBox={props.viewBox || "0 0 181 48"}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      mobileHeight={props.mobileHeight}
      mobileWidth={props.mobileWidth}
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </StyledIcon>
  );
};

export const StyledIcon = styled.svg<StyledIconProps>`
  width: ${({ width }) => width || "100px"};
  height: ${({ height }) => height || "100px"};

  @media ${theme.media.tablet} {
    height: ${({ mobileHeight }) => mobileHeight || "50px"};
    width: ${({ mobileWidth }) => mobileWidth || "114px"};
  }
`;
