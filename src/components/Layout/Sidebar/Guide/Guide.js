import React from "react";

import { ReactComponent as NavIcon } from "../../../../assets/icon-menu.svg";

import GuideContainer from "./GuideContainer";
import GuideContent from "./GuideContent";
import GuideLogo from "./GuideLogo";
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
          <GuideNavIcon label="Guide">
            <NavIcon />
          </GuideNavIcon>
          <GuideLogo />
        </GuideHeader>
        <GuideNavSection>
          <GuideNav />
        </GuideNavSection>
      </GuideContent>
    </GuideContainer>
  );
}

export default Guide;
