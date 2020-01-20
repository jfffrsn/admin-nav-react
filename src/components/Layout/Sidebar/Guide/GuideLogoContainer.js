import React from "react";
import styled from "styled-components/macro";

const AppGuideLogoContainer = styled.div`
  width: 5rem;
  height: 2.5rem;
  min-width: 5rem;
`;

function GuideLogoContainer(props) {
  return <AppGuideLogoContainer>{props.children}</AppGuideLogoContainer>;
}

export default GuideLogoContainer;
