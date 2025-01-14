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
};

export const IconWrapper = (props: IconWrapperPropsType) => {
  return (
    <StyledWrapper>
      <IconContainer>
        <Icon
          iconId={props.iconId}
          width={props.width}
          height={props.height}
          viewBox={props.viewBox}
        />
      </IconContainer>

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
    max-width: 200px;
    font-weight: 200;
    font-size: 24px;
    ${font({ weight: 300, lineHeight: 1.2, Fmax: 24, Fmin: 18 })}
  }

  @media ${theme.media.tablet} {
    min-width: 160px;
    min-height: 160px;
  }
`;

const IconContainer = styled.div`
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
