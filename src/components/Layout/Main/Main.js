import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.main`
  margin-top: ${props => props.theme.heights.appTopbarHeight};
  display: flex;
  flex: 1;
  flex-basis: 0.000000001px;
`;
const Content = styled.div`
  flex: 1;
  padding: ${props => props.theme.space[5]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &[data-guide="guide-persistent-and-visible"] {
    margin-left: ${props => props.theme.widths.appSidebarWidth};
  }

  &[data-guide="mini-guide-visible"] {
    margin-left: ${props => props.theme.widths.appMiniGuideWidth};
  }
`;

const Main = props => {
  return (
    <Wrapper role="main" id="content">
      <Content data-guide={props.guide}>{props.children}</Content>
    </Wrapper>
  );
};

export default Main;
