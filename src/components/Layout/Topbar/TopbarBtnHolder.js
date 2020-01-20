import React from "react";
import styled from "styled-components/macro";

const AppTopbarBtnHolder = styled.div`
  display: inline-flex;
`;

function TopbarBtnHolder(props) {
  return <AppTopbarBtnHolder>{props.children}</AppTopbarBtnHolder>;
}

export default TopbarBtnHolder;
