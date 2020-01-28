import React from "react";
import styled from "styled-components/macro";

import { ReactComponent as MenuIcon } from "../../../../assets/icon-menu.svg";

const Button = styled.button`
  background-color: ${props => props.theme.colors.appTopbarBtnBg};
  height: 2.5rem;
  width: 2.5rem;
  padding: ${props => props.theme.space[2]};
  margin: 0 ${props => props.theme.space[1]} 0 0;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  color: ${props => props.theme.colors.appNaviconInactive};
  position: relative;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.appTopbarBtnBgHover};
  }

  > svg {
    fill: currentColor;
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }

  &.active {
    color: ${props => props.theme.colors.appNaviconActive};

    > svg {
      fill: currentColor;
      pointer-events: none;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const GuideMenuBtn = (props, ref) => {
  return (
    <Button aria-label={props.label} onClick={props.clicked}>
      <MenuIcon title="menu" />
    </Button>
  );
};

export default GuideMenuBtn;
