import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  background-color: transparent;
  height: 2.5rem;
  width: 2.5rem;
  padding: ${props => props.theme.space[2]};
  margin: 0 ${props => props.theme.space[1]} 0 0;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  color: ${props => props.theme.colors.grayTwo};
  position: relative;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.grayThree};
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

const IconBtn = props => {
  return <Button aria-label={props.label}>{props.children}</Button>;
};

export default IconBtn;
