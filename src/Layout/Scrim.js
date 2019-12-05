import React, { Component } from "react";

import styled from "styled-components/macro";

const AppScrim = styled.div`
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

  &[visible] {
    opacity: 1;
    visibility: visible;
    transition-duration: 200ms;
  }
`;

class Scrim extends Component {
  render() {
    return <AppScrim />;
  }
}

export default Scrim;
