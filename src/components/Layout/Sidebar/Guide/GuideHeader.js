import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.appGuideHeaderBg};
  height: ${props => props.theme.heights.appTopbarHeight};
  padding: ${props => props.theme.space[2]};
  display: none;

  &[data-visibility="hidden"] {
    display: none;
  }

  &[data-visibility="visible"] {
    display: flex;
  }
`;

const GuideHeader = props => {
  return <Wrapper data-visibility={props.visiblity}>{props.children}</Wrapper>;
};

export default GuideHeader;
