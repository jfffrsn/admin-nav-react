import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: block;
`;

const GuideContent = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default GuideContent;
