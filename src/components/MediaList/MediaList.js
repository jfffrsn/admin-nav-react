import React from "react";
import styled from "styled-components/macro";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MediaList = props => {
  return <List>{props.children}</List>;
};

export default MediaList;
