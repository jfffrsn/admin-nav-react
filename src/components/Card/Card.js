import React from "react";
import styled from "styled-components/macro";

const Content = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${props => props.theme.space[3]};
  box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
}
`;

const Card = props => {
  return <Content>{props.children}</Content>;
};

export default Card;
