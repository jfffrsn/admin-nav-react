import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.appGuideBg};
  transition-duration: 200ms;
`;

const Guide = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Guide;
