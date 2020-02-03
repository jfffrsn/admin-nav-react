import React from "react";
import styled from "styled-components/macro";

const Header = styled.header`
  background-color: ${props => props.theme.colors.appTopbarBg};
  height: ${props => props.theme.heights.appTopbarHeight};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  transform: translateY(0);
  transition: transform 0.3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${props => props.theme.space[2]};
`;

const Topbar = props => {
  return (
    <Header role="banner">
      <Content>{props.children}</Content>
    </Header>
  );
};

export default Topbar;
