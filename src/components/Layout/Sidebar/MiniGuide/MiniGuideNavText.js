import React from "react";
import styled from "styled-components/macro";

const Text = styled.span`
  display: block;
  text-align: center;
`;

const MiniGuideNavText = props => {
  return <Text as={props.as}>{props.text}</Text>;
};

export default MiniGuideNavText;
