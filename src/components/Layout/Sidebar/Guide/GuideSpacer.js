import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  margin-top: ${props => props.theme.heights.appTopbarHeight};
  display: none;

  &[data-visibility="hidden"] {
    display: none;
  }

  &[data-visibility="visible"] {
    display: block;
  }
`;

const GuideSpacer = props => {
  return <Wrapper data-visibility={props.visiblity}></Wrapper>;
};

export default GuideSpacer;
