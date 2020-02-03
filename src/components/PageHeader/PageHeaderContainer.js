import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  margin: 0 0 ${props => props.theme.space[6]} 0;
  padding: 0 0 ${props => props.theme.space[6]} 0;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  border-bottom: ${props => props.theme.colors.grayOne} 1px solid;

  position: ${e => (e.isSticky ? `sticky` : ``)};
  top: ${e => (e.isSticky ? props => props.theme.heights.appTopbarHeight : ``)};
  z-index: ${e => (e.isSticky ? `1` : ``)};
  margin-top: ${e => (e.isSticky ? props => props.theme.negSpace[5] : ``)};
  margin-right: ${e => (e.isSticky ? props => props.theme.negSpace[5] : ``)};
  margin-left: ${e => (e.isSticky ? props => props.theme.negSpace[5] : ``)};
  padding-top: ${e => (e.isSticky ? props => props.theme.space[5] : ``)};
  padding-right: ${e => (e.isSticky ? props => props.theme.space[5] : ``)};
  padding-left: ${e => (e.isSticky ? props => props.theme.space[5] : ``)};
  background-color: ${e =>
    e.isSticky ? props => props.theme.colors.appMainBg : ``};
`;
const PageHeaderContainer = ({ isSticky, ...props }) => {
  return <Wrapper isSticky={isSticky}>{props.children}</Wrapper>;
};

export default PageHeaderContainer;
