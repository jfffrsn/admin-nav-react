import React from "react";
import styled from "styled-components/macro";

const AppMiniGuideNavTxt = styled.span`
  display: block;
`;

function MiniGuideNavTxt(props) {
  return <AppMiniGuideNavTxt>{props.text}</AppMiniGuideNavTxt>;
}

export default MiniGuideNavTxt;
