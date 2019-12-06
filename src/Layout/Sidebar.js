import React, { Component } from "react";

import Scrim from "./Scrim";
import Guide from "./Guide";

import styled from "styled-components/macro";

const AppSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;

  &[opened]:not([persistent]) {
    z-index: 2;
    width: 100%;
  }

  &[persistent] {
    width: var(--app-sidebar-width);
  }

  &[persistent]:not([opened]) {
    width: var(--app-mini-guide-width);
  }



`;

const AppSidebarContainer = styled.div`
  width: ${props => props.theme.widths.appSidebarWidth};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transition-property: transform;
  xxtransform: translate3d(-100%, 0, 0);
  xxvisibility: hidden;
  transition-duration: 200ms;

  &[opened] {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

`;

class Sidebar extends Component {
  render() {
    return (
      <AppSidebar>
        <Scrim />

        <AppSidebarContainer>
          <Guide />
        </AppSidebarContainer>
      </AppSidebar>
    );
  }
}

export default Sidebar;
