import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: inline-flex;
`;

const TopbarBtnHolder = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default TopbarBtnHolder;
