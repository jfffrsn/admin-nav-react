import React from "react";

import { ReactComponent as NavIcon } from "../../../../assets/icon-menu.svg";
import { ReactComponent as AppLogo } from "../../../../assets/admin-logo.svg";

import GuideContainer from "./GuideContainer";
import GuideContent from "./GuideContent";

import GuideLogoContainer from "./GuideLogoContainer";

import GuideNavIcon from "./GuideNavIcon";
import GuideHeader from "./GuideHeader";
import GuideSpacer from "./GuideSpacer";
import GuideNavSection from "./GuideNavSection";
import GuideNav from "./GuideNav";

function Guide(props) {
  return (
    <GuideContainer>
      <GuideSpacer />

      <GuideContent>
        <GuideHeader>
          <GuideNavIcon aria-label="Guide" aria-pressed="true">
            <NavIcon />
          </GuideNavIcon>
          <GuideLogoContainer>
            <AppLogo />
          </GuideLogoContainer>
        </GuideHeader>
        <GuideNavSection>
          <GuideNav />
        </GuideNavSection>
      </GuideContent>
    </GuideContainer>
  );
}

export default Guide;
