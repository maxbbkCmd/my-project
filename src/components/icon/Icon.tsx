import iconSprite from "../../assets/icon/Sprite.svg";

export type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width || "181"} height = {props.height || "48"} viewBox={props.viewBox || "0 0 181 48"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={ `${iconSprite}#${props.iconId}` } /> 
    </svg>
  );
};
