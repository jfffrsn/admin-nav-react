import React from "react";

import { ReactComponent as MenuIcon } from "../../../../assets/icon-menu.svg";

import GuideContainer from "./GuideContainer";
import GuideContent from "./GuideContent";
import GuideLogo from "./GuideLogo";
import GuideIconBtn from "./GuideIconBtn";
import GuideHeader from "./GuideHeader";
import GuideSpacer from "./GuideSpacer";
import GuideNavSection from "./GuideNavSection";
import GuideNav from "./GuideNav";

function Guide(props) {
  return (
    <GuideContainer>
      <GuideSpacer visiblity="visible" />
      <GuideContent>
        <GuideHeader visiblity="visible">
          <GuideIconBtn label="Guide">
            <MenuIcon />
          </GuideIconBtn>
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
