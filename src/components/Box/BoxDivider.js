import React from "react";
import styled from "styled-components/macro";

const Line = styled.span`
  background-color: ${props => props.theme.colors.grayOne};
  height: 1px;
  margin: ${props => props.theme.space[6]} 0;
  display: block;
`;

const BoxDivider = () => {
  return <Line />;
};

export default BoxDivider;
