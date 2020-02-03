import React from "react";
import styled from "styled-components/macro";

const Item = styled.li`
  margin: 0 ${props => props.theme.space[1]};
  padding: 0;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const BoxHeaderBtnListItem = props => {
  return <Item as={props.as}>{props.children}</Item>;
};

export default BoxHeaderBtnListItem;
