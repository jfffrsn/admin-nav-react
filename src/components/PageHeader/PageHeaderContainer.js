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
  top: ${e => (e.isSticky ? `3.5rem` : ``)};
  z-index: ${e => (e.isSticky ? `1` : ``)};
  margin-top: ${e => (e.isSticky ? `-1.25rem` : ``)};
  margin-right: ${e => (e.isSticky ? `-1.25rem` : ``)};
  margin-left: ${e => (e.isSticky ? `-1.25rem` : ``)};
  padding-top: ${e => (e.isSticky ? `1.25rem` : ``)};
  padding-right: ${e => (e.isSticky ? `1.25rem` : ``)};
  padding-left: ${e => (e.isSticky ? `1.25rem` : ``)};
  background-color: ${e =>
    e.isSticky ? props => props.theme.colors.appMainBg : ``};
`;
const PageHeaderContainer = ({ isSticky, ...props }) => {
  return <Wrapper isSticky={isSticky}>{props.children}</Wrapper>;
};

export default PageHeaderContainer;
