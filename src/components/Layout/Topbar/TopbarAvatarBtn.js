import React, { Component } from "react";
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

const AppTopbarAvatar = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
`;

const AppTopbarAvatarImg = styled.img`
  width: 100%;
  height: auto;
`;

class TopbarAvatarBtn extends Component {
  render() {
    return (
      <AppTopbarAvatarBtn>
        <AppTopbarAvatar>
          <AppTopbarAvatarImg src={this.props.imgsrc} alt={this.props.imgalt} />
        </AppTopbarAvatar>
      </AppTopbarAvatarBtn>
    );
  }
}

export default TopbarAvatarBtn;
