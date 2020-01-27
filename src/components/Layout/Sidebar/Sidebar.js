import React from "react";

import styled from "styled-components/macro";

const Wrapper = styled.div`
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

const Sidebar = props => {
  return (
    <Wrapper data-persistent={props.persistent} data-open={props.open}>
      {props.children}
    </Wrapper>
  );
};

export default Sidebar;
