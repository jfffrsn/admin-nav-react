import React, { Component } from "react";
import { ReactComponent as AppLogo } from "../../assets/admin-logo.svg";
import { ReactComponent as NavIcon } from "../../assets/icon-menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { ReactComponent as AlertIcon } from "../../assets/icon-alerts.svg";
import TopbarBtn from "./TopbarBtn";
import TopbarAvatarBtn from "./TopbarAvatarBtn";
import styled from "styled-components/macro";

const AppTopbar = styled.header`
  background-color: ${props => props.theme.colors.appTopbarBg};
  height: ${props => props.theme.heights.appTopbarHeight};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transform: translateY(0);
  transition: transform 0.3s ease;
`;

const AppTopHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${props => props.theme.space[2]};
`;

const AppTopbarNavicon = styled.button`
  background-color: ${props => props.theme.colors.appTopbarBtnBg};
  height: 2.5rem;
  width: 2.5rem;
  padding: ${props => props.theme.space[2]};
  margin: 0 ${props => props.theme.space[1]} 0 0;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  color: ${props => props.theme.colors.appNaviconInactive};

  > svg {
    fill: currentColor;
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.appTopbarBtnBgHover};
  }
`;

const AppTopbarLogoContainer = styled.div`
  width: 5rem;
  height: 2.5rem;
  min-width: 5rem;
  > svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const AppTopbarMenu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const AppTopbarBtnHolder = styled.div`
  display: inline-flex;
`;

class Header extends Component {
  render() {
    return (
      <AppTopbar role="banner">
        <AppTopHeader>
          <AppTopbarNavicon aria-label="Guide" aria-pressed="false">
            <NavIcon />
          </AppTopbarNavicon>

          <AppTopbarLogoContainer>
            <AppLogo title="Admin Name" />
          </AppTopbarLogoContainer>

          <AppTopbarMenu>
            <AppTopbarBtnHolder>
              <TopbarBtn label="Search" aria-pressed="false">
                <SearchIcon />
              </TopbarBtn>
            </AppTopbarBtnHolder>

            <AppTopbarBtnHolder>
              <TopbarBtn label="Notifications" aria-pressed="false">
                <AlertIcon />
              </TopbarBtn>
            </AppTopbarBtnHolder>

            <AppTopbarBtnHolder>
              <TopbarAvatarBtn
                imgsrc="https://i.pravatar.cc/300"
                imgalt="Username"
              ></TopbarAvatarBtn>
            </AppTopbarBtnHolder>
          </AppTopbarMenu>
        </AppTopHeader>
      </AppTopbar>
    );
  }
}

export default Header;
