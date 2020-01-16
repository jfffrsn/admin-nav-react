import React from "react";
import styled from "styled-components/macro";

const AppMiniGuideNavSection = styled.div`
  display: block;
`;

const MiniGuideNavSection = props => {
  return <AppMiniGuideNavSection>{props.children}</AppMiniGuideNavSection>;
};

export default MiniGuideNavSection;
