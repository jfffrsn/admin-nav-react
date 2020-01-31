import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  margin: 0 0 ${props => props.theme.space[5]} 0;
  padding: 0 0 ${props => props.theme.space[5]} 0;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  border-bottom: ${props => props.theme.colors.grayOne} 1px solid;
`;
const PageHeaderContainer = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default PageHeaderContainer;
