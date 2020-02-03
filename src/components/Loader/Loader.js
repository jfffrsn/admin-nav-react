import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(21, 101, 192, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spinner = styled.div`
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: load7 1.8s infinite ease-in-out;
  
    &:before, &:after {
      border-radius: 50%;
      width: 2.5em;
      height: 2.5em;
      animation-fill-mode: both;
      animation: load7 1.8s infinite ease-in-out;
    }
  
    color: ${props => props.theme.colors.appTopbarBg};
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  
    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
    }
  
    &:before {
      left: -3.5em;
      animation-delay: -0.32s;
    }
  
    &:after {
      left: 3.5em;
    }
  }
  
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
  
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
  
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;

const Loader = () => {
  return (
    <Wrapper>
      <Spinner>Loading...</Spinner>
    </Wrapper>
  );
};

export default Loader;
