import React from "react";
import styled from "styled-components/macro";

const AppGuideNavSection = styled.div`
  display: block;
`;

const GuideNavSection = props => {
  return <AppGuideNavSection>{props.children}</AppGuideNavSection>;
};

export default GuideNavSection;