import styled from "styled-components";
import iconSprite from "../../assets/icon/Sprite.svg";

type IconPropsType = {
  iconId?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledIcon
      width={props.width || undefined}
      height={props.height || undefined}
      viewBox={props.viewBox || undefined}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </StyledIcon>
  );
};

export const StyledIcon = styled.svg<IconPropsType>`
`;
