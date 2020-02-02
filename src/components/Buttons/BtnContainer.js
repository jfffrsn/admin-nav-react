import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: block;
  margin: ${props => props.theme.space[5]} 0;
`;

const BtnContainer = props => {
  return <Container>{props.children}</Container>;
};

export default BtnContainer;
