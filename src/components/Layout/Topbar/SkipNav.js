import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.a`
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
    padding: ${props => props.theme.space[2]} ${props => props.theme.space[4]};
    text-decoration: none;
    width: auto;
  }
`;

const SkipNav = props => {
  return (
    <Wrapper id={props.id} href={props.anchor}>
      Skip Navigation
    </Wrapper>
  );
};

export default SkipNav;
