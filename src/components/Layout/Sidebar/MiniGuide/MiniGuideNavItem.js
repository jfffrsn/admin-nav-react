import React from "react";
import styled from "styled-components/macro";

const AppMiniGuideNavItem = styled.div`
  font-size: 0.625rem;
`;

function MiniGuideNavItem(props) {
  return <AppMiniGuideNavItem>{props.children}</AppMiniGuideNavItem>;
}

export default MiniGuideNavItem;
