import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const TopbarMenu = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default TopbarMenu;
