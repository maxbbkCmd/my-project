import styled from "styled-components";
import { Icon } from "./icon/Icon";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export type IconWrapperPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  text: string;
  mobileWidth?: string;
  mobileHeight?: string;
};

export const IconWrapper = (props: IconWrapperPropsType) => {
  return (
    <StyledWrapper>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        mobileHeight={props.mobileHeight}
        mobileWidth={props.mobileWidth}
      />

      <h3>{props.text}</h3>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 270px;
  background-color: #2a2a2a;
  border-radius: 29px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);

  h3 {
    font-weight: 200;
    font-size: 24px;
    ${font({ weight: 300, lineHeight: 1.2, Fmax: 24, Fmin: 18 })}
  }

  @media ${theme.media.tablet} {
    min-width: 160px;
    min-height: 160px;
  }
`;

const IconWrapper2 = styled.div`
  /* width: 100px; */
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
