import React from "react";
import styled from "styled-components/macro";

import TopbarAvatar from "./TopbarAvatar";

const Button = styled.button`
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

const TopbarAvatarBtn = props => {
  return (
    <Button>
      <TopbarAvatar imgSrc="https://i.pravatar.cc/300" imgAlt="Username" />
    </Button>
  );
};

export default TopbarAvatarBtn;
