import React from "react";
import styled from "styled-components/macro";

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

function SidebarContainer(props) {
  return <AppSidebarContainer>{props.children}</AppSidebarContainer>;
}

export default SidebarContainer;
