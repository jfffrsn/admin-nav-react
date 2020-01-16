import React from "react";
import styled from "styled-components/macro";

const AppMiniGuideNavTxt = styled.span`
  display: block;
`;
const MiniGuideNavTxt = props => {
  return <AppMiniGuideNavTxt>{props.text}</AppMiniGuideNavTxt>;
};

export default MiniGuideNavTxt;