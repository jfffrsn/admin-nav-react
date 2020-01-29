import React from "react";
import styled from "styled-components/macro";

const Icon = styled.span`
  display: flex;
  height: ${props => props.theme.space[5]};
  width: ${props => props.theme.space[5]};
  margin-bottom: ${props => props.theme.space[2]};

  > svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.colors.appIconInactive};
  }
`;

const MiniGuideNavIcon = props => {
  return <Icon>{props.children}</Icon>;
};

export default MiniGuideNavIcon;
