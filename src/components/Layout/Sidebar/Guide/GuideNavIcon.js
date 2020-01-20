import React from "react";
import styled from "styled-components/macro";

const Icon = styled.span`
  margin-right: ${props => props.theme.space[3]};
  display: flex;
  height: ${props => props.theme.space[4]};
  width: ${props => props.theme.space[4]};

  > svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.colors.appIconInactive};
  }
`;

function GuideNavIcon(props) {
  return <Icon aria-label="{props.label}">{props.children}</Icon>;
}

export default GuideNavIcon;
