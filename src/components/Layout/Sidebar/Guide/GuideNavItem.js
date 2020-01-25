import React from "react";
import styled from "styled-components/macro";

const NavItem = styled.div`
  font-size: 0.875rem;
`;

const GuideNavItem = props => {
  return <NavItem>{props.children}</NavItem>;
};

export default GuideNavItem;
