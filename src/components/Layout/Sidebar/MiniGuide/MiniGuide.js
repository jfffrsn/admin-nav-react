import React, { Component } from "react";
import styled from "styled-components/macro";

import MiniGuideNavSection from "./MiniGuideNavSection";
import MiniGuideNav from "./MiniGuideNav";

const AppMiniGuide = styled.div`
  position: fixed;
  left: 0;
  top: ${props => props.theme.heights.appTopbarHeight};
  bottom: 0;
  display: block;
  background-color: ${props => props.theme.colors.appMiniGuideBg};
  z-index: 1;
  width: ${props => props.theme.widths.appMiniGuideWidth};

  &[data-visibility="hidden"] {
    display: none;
  }
  &[data-visibility="visible"] {
    display: block;
  }
`;

class MiniGuide extends Component {
  render() {
    return (
      <AppMiniGuide>
        <MiniGuideNavSection>
          <MiniGuideNav />
        </MiniGuideNavSection>
      </AppMiniGuide>
    );
  }
}

export default MiniGuide;