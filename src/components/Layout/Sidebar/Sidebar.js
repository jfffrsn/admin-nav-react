import React from "react";

import Scrim from "./Scrim";
import Guide from "./Guide/Guide";
import SidebarContainer from "./SidebarContainer";

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

function Sidebar(props) {
  return (
    <AppSidebar>
      <Scrim visibility="visible" />
      <SidebarContainer>
        <Guide />
      </SidebarContainer>
    </AppSidebar>
  );
}

export default Sidebar;
