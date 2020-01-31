import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 0;
  margin: 0 0 auto 0;
`;
const PageHeaderBtnContainer = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default PageHeaderBtnContainer;
