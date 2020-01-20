import React from "react";
import styled from "styled-components/macro";

const AppGuideContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.appGuideBg};
`;

function GuideContainer(props) {
  return <AppGuideContainer>{props.children}</AppGuideContainer>;
}

export default GuideContainer;
