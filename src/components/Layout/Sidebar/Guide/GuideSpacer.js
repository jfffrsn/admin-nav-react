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

function GuideSpacer() {
  return <Wrapper></Wrapper>;
}

export default GuideSpacer;
