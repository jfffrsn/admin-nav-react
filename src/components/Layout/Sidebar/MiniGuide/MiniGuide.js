import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: ${props => props.theme.heights.appTopbarHeight};
  bottom: 0;
  display: block;
  background-color: ${props => props.theme.colors.appMiniGuideBg};
  z-index: 3;
  width: ${props => props.theme.widths.appMiniGuideWidth};

  &[data-visibility="hidden"] {
    display: none;
  }
  &[data-visibility="visible"] {
    display: block;
  }
`;

const MiniGuide = props => {
  return <Wrapper data-visibility={props.visibility}>{props.children}</Wrapper>;
};

export default MiniGuide;
