import React from "react";
import styled from "styled-components/macro";

import BoxHeaderTitle from "../Box/BoxHeaderTitle";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 ${props => props.theme.space[3]} 0;
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
