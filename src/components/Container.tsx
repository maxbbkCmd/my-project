import styled from "styled-components";

type ContainerProps = {
  maxWidth?: string;
  width?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  border?: string;
  position?: string;
  marginBottom?: string;

};

export const Container = styled.div<ContainerProps>`
  max-width: 1202px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: ${props => props.padding || '0 15px'};
  position: ${(props) => props.position};
  margin-bottom: ${(props) => props.marginBottom};
`;

