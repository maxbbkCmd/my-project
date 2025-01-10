import styled from "styled-components";

type FlexWrapperProps = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => props.direction || undefined};
  justify-content: ${(props) => props.justify || undefined};
  flex-wrap: ${(props) => props.wrap || undefined};
  gap: ${(props) => props.gap || undefined};
`;
