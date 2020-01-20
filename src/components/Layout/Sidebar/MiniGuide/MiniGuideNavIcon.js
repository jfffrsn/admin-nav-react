import React from "react";
import styled from "styled-components/macro";

const NavIcon = styled.span`
  display: flex;
  height: ${props => props.theme.space[4]};
  width: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[2]};

  > svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.colors.appIconInactive};
  }
`;

function MiniGuideNavIcon(props) {
  return <NavIcon>{props.children}</NavIcon>;
}

export default MiniGuideNavIcon;
