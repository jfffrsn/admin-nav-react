import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: block;
  xxbackground-color: yellow;
  margin: ${props => props.theme.space[7]} 0;

  &:first-of-type {
    margin-top: 0;
  }
`;

const FormGroup = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default FormGroup;
