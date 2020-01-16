import React from "react";
import styled from "styled-components/macro";

const AppGuideContent = styled.div`
  display: block;
`;

const GuideContent = props => {
  return <AppGuideContent>{props.children}</AppGuideContent>;
};

export default GuideContent;