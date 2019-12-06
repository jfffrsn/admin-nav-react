import React, { Component } from "react";
import styled from "styled-components/macro";
import { ReactComponent as NavIcon } from "../assets/icon-menu.svg";
import { ReactComponent as AppLogo } from "../assets/admin-logo.svg";

import GuideNav from "./GuideNav";

const AppGuideContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.appGuideBg};
`;

const AppGuideSpacer = styled.div`
  margin-top: ${props => props.theme.heights.appTopbarHeight};
  xxxdisplay: none;

  &[visible] {
    display: block;
  }
`;

const AppGuideContent = styled.div`
  display: block;
`;

const AppGuideHeader = styled.div`
  background-color: ${props => props.theme.colors.appGuideHeaderBg};
  height: ${props => props.theme.heights.appTopbarHeight};
  padding: ${props => props.theme.space[2]};
  display: flex;

  &[visible] {
    display: flex;
  }
`;

const AppGuideNavicon = styled.button`
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

const AppGuideLogoContainer = styled.div`
  width: 5rem;
  height: 2.5rem;
  min-width: 5rem;
`;

const AppGuideNavSection = styled.div`
  display: block;
`;

class Guide extends Component {
  render() {
    return (
      <AppGuideContainer>
        <AppGuideSpacer />

        <AppGuideContent>
          <AppGuideHeader>
            <AppGuideNavicon aria-label="Guide" aria-pressed="true">
              <NavIcon />
            </AppGuideNavicon>

            <AppGuideLogoContainer>
              <AppLogo />
            </AppGuideLogoContainer>
          </AppGuideHeader>

          <AppGuideNavSection>
            <GuideNav />
          </AppGuideNavSection>
        </AppGuideContent>
      </AppGuideContainer>
    );
  }
}

export default Guide;
