import React from "react";
import { ReactComponent as AppLogo } from "../../../assets/admin-logo.svg";
import styled from "styled-components/macro";

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

function TopbarLogoContainer(props) {
  return (
    <AppTopbarLogoContainer>
      <AppLogo title="ECE Admin" />
    </AppTopbarLogoContainer>
  );
}

export default TopbarLogoContainer;
