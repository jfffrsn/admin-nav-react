import React from "react";
import styled from "styled-components/macro";

import BoxHeaderTitle from "../Box/BoxHeaderTitle";

const Wrapper = styled.div`
  xxbackground-color: red;
  display: flex;
  align-items: center;
`;

const BoxHeader = ({ title, buttons }) => {
  return (
    <Wrapper>
      <BoxHeaderTitle title={title}></BoxHeaderTitle>
      {buttons}
    </Wrapper>
  );
};

export default BoxHeader;
