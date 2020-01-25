import React from "react";
import styled from "styled-components/macro";

const Text = styled.span`
  display: block;
`;

const MiniGuideNavText = props => {
  return <Text>{props.text}</Text>;
};

export default MiniGuideNavText;
