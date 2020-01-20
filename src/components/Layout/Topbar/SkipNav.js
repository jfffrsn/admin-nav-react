import React from "react";
import styled from "styled-components/macro";

const AppSkipNav = styled.a`
  clip: rect(0 0 0 0);
  overflow: hidden;
  position: fixed;
  height: 1px;
  width: 1px;
  z-index: 3;

  &:hover,
  &:active,
  &:focus {
    background-color: #000;
    border-radius: 3px;
    clip: auto !important;
    color: #fff;
    outline: none;
    display: block;
    font-size: 1rem;
    font-weight: 600;
    height: auto;
    left: ${props => props.theme.space[2]};
    top: ${props => props.theme.space[2]};
    padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]};
    text-decoration: none;
    width: auto;
  }
`;

function SkipNav() {
  return (
    <AppSkipNav id="skip-navigation" href="#content">
      Skip Navigation
    </AppSkipNav>
  );
}

export default SkipNav;
