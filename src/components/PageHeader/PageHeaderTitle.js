import React from "react";
import styled from "styled-components/macro";

const Title = styled.p`
  margin: 0 ${props => props.theme.space[3]} 0 0;
  padding: 0;
  font-size: ${props => props.theme.fontSizes[5]};
  font-weight: ${props => props.theme.fontWeights.bold};
  flex: 1;
`;

const PageHeaderTitle = props => {
  return <Title as={props.as}>{props.title}</Title>;
};

export default PageHeaderTitle;
