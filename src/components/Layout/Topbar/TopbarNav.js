import React from "react";
import styled from "styled-components/macro";

import { ReactComponent as SearchIcon } from "../../../assets/icon-search.svg";
import { ReactComponent as AlertIcon } from "../../../assets/icon-alerts.svg";

import TopbarBtnHolder from "./TopbarBtnHolder";
import TopbarBtn from "./TopbarBtn";
import TopbarAvatarBtn from "./TopbarAvatarBtn";

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const TopbarNav = props => {
  return (
    <Wrapper>
      <TopbarBtnHolder>
        <TopbarBtn label="Search">
          <SearchIcon title="search" />
        </TopbarBtn>
      </TopbarBtnHolder>

      <TopbarBtnHolder>
        <TopbarBtn label="Notifications">
          <AlertIcon title="alert" />
        </TopbarBtn>
      </TopbarBtnHolder>

      <TopbarBtnHolder>
        <TopbarAvatarBtn />
      </TopbarBtnHolder>
    </Wrapper>
  );
};

export default TopbarNav;
