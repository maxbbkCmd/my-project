import styled from "styled-components";
import { Icon } from "./icon/Icon";

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
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
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
  width: 270px;
  height: 270px;
  background-color: #2a2a2a;
  border-radius: 29px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);

  h3 {
    font-weight: 200;
    font-size: 24px;
  }
`;
