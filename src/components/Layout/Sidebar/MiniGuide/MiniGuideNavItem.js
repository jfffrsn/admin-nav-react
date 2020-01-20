import React from "react";
import styled from "styled-components/macro";

const NavItem = styled.div`
  font-size: 0.625rem;
`;

function MiniGuideNavItem(props) {
  return <NavItem>{props.children}</NavItem>;
}

export default MiniGuideNavItem;
