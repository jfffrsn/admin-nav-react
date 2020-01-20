import React from "react";
import styled from "styled-components/macro";

const AppTopbarAvatarBtn = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: ${props => props.theme.space[1]};
  display: flex;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.appTopbarBtnBgHover};
  }
`;

function TopbarAvatarBtn(props) {
  return <AppTopbarAvatarBtn>{props.children}</AppTopbarAvatarBtn>;
}

export default TopbarAvatarBtn;
