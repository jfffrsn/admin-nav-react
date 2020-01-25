import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition-property: opacity;
  transform: translateZ(0);
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;

  &[data-visibility="hidden"] {
    opacity: 0;
    visibility: hidden;
  }

  &[data-visibility="visible"] {
    opacity: 1;
    visibility: visible;
    transition-duration: 200ms;
  }
`;

const Scrim = props => {
  return <Wrapper data-visibility={props.visibility} onClick={props.clicked} />;
};

export default Scrim;
