import React from "react";
import styled from "styled-components/macro";

const Text = styled.span`
  display: block;
`;

const GuideNavText = props => {
  return <Text>{props.text}</Text>;
};

GuideNavText.propTypes = {};

export default GuideNavText;
