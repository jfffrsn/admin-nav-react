import React from "react";

import { ReactComponent as NavIcon } from "../../../assets/icon-menu.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icon-search.svg";
import { ReactComponent as AlertIcon } from "../../../assets/icon-alerts.svg";

import TopbarMenu from "./TopbarMenu";
import TopbarLogoContainer from "./TopbarLogoContainer";

import TopbarNavicon from "./TopbarNavicon";
import TopbarBtnHolder from "./TopbarBtnHolder";
import TopbarBtn from "./TopbarBtn";
import TopbarAvatarBtn from "./TopbarAvatarBtn";
import TopbarAvatar from "./TopbarAvatar";

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

function Header(props) {
  return (
    <AppTopbar role="banner">
      <AppTopHeader>
        <TopbarNavicon label="Guide">
          <NavIcon />
        </TopbarNavicon>

        <TopbarLogoContainer />

        <TopbarMenu>
          <TopbarBtnHolder>
            <TopbarBtn label="Search">
              <SearchIcon />
            </TopbarBtn>
          </TopbarBtnHolder>

          <TopbarBtnHolder>
            <TopbarBtn label="Notifications">
              <AlertIcon />
            </TopbarBtn>
          </TopbarBtnHolder>

          <TopbarBtnHolder>
            <TopbarAvatarBtn>
              <TopbarAvatar
                imgSrc="https://i.pravatar.cc/300"
                imgAlt="Username"
              />
            </TopbarAvatarBtn>
          </TopbarBtnHolder>
        </TopbarMenu>
      </AppTopHeader>
    </AppTopbar>
  );
}

export default Header;
