import React from "react";
import styled from "styled-components/macro";

const Title = styled.h1`
  margin: 0 ${props => props.theme.space[4]} 0 0;
  padding: 0;
  font-size: ${props => props.theme.fontSizes[5]};
  font-weight: ${props => props.theme.fontWeights.bold};
  flex: 1;
`;

const PageHeaderTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageHeaderTitle;
