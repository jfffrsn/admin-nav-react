import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 0;
  margin: 0 0 0 ${props => props.theme.space[4]};
`;
const MediaListBtnContainer = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default MediaListBtnContainer;
