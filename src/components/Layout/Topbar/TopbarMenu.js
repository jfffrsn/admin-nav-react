import React from "react";
import styled from "styled-components/macro";

const AppTopbarMenu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

function TopbarMenu(props) {
  return <AppTopbarMenu>{props.children}</AppTopbarMenu>;
}

export default TopbarMenu;
