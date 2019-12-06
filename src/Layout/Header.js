import React, { Component } from "react";
import { ReactComponent as AppLogo } from "../assets/admin-logo.svg";
import { ReactComponent as NavIcon } from "../assets/icon-menu.svg";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";
import { ReactComponent as AlertIcon } from "../assets/icon-alerts.svg";


import TopbarBtn from "./TopbarBtn";

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
  height: 40px;
  width: 40px;
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
  width: 80px;
  height: 40px;
  min-width: 80px;
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
`;

const AppTopbarSearch = styled.div`
  display: inline-flex;
`;

const AppTopbarAlerts = styled.div`
  display: inline-flex;
`;

const AppTopbarUser = styled.div`
  display: inline-flex;
`;

const AppTopbarAvatarBtn = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const AppTopbarAvatar = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
`;

const AppTopbarAvatarImg = styled.img`
  width: 100%;
  height: auto;
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
            <AppLogo title="Admin title" />
          </AppTopbarLogoContainer>

          <AppTopbarMenu>
            <AppTopbarSearch>
              <TopbarBtn label="ARIA LABEL" aria-pressed="false">
                <SearchIcon />
              </TopbarBtn>
            </AppTopbarSearch>

            <AppTopbarAlerts>
              <TopbarBtn label="ARIA LABEL" aria-pressed="false">
                <span className="app-topbar-alerts-counter"></span>
                <AlertIcon />
              </TopbarBtn>
            </AppTopbarAlerts>

            <AppTopbarUser>
              <AppTopbarAvatarBtn>
                <AppTopbarAvatar>
                  <AppTopbarAvatarImg
                    src="https://i.pravatar.cc/300"
                    alt="Username"
                  />
                </AppTopbarAvatar>
              </AppTopbarAvatarBtn>
            </AppTopbarUser>
          </AppTopbarMenu>
        </AppTopHeader>
      </AppTopbar>
    );
  }
}

export default Header;
