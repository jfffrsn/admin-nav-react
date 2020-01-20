import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: block;
`;

function GuideNavSection(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default GuideNavSection;
