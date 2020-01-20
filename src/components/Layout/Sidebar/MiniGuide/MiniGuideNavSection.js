import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  display: block;
`;

function MiniGuideNavSection(props) {
  return <Section>{props.children}</Section>;
}

export default MiniGuideNavSection;
