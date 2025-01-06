import { theme } from "./Theme";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmax?: number;
  Fmin?: number;
};

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPropsType) => `
  font-family: ${family || "Poppins"};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.font};
  line-height: ${lineHeight || 1.2};
  font-size: calc( (100vw - 375px) / ( 1920 - 375 ) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;