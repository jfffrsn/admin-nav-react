import React from "react";
import styled from "styled-components/macro";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
`;

const BoxHeaderBtnList = props => {
  return <List as={props.as}>{props.children}</List>;
};

export default BoxHeaderBtnList;
