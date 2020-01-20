import React from "react";

import Scrim from "./Scrim";
import Guide from "./Guide/Guide";

import styled from "styled-components/macro";

const AppSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;

  &[data-open="opened"]:not([data-persistent="persistent"]) {
    z-index: 2;
    width: 100%;
  }

  &[data-persistent="persistent"] {
    width: ${props => props.theme.widths.appSidebarWidth};
  }

  &[data-persistent="persistent"]:not([data-open="opened"]) {
    width: ${props => props.theme.widths.appMiniGuideWidth};
  }
`;

const AppSidebarContainer = styled.div`
  width: ${props => props.theme.widths.appSidebarWidth};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transition-property: transform;
  transform: translate3d(-100%, 0, 0);
  visibility: hidden;
  transition-duration: 200ms;

  &[data-open="opened"] {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
`;

function Sidebar(props) {
  return (
    <AppSidebar>
      <Scrim visibility="visible" />
      <AppSidebarContainer>
        <Guide />
      </AppSidebarContainer>
    </AppSidebar>
  );
}

export default Sidebar;
