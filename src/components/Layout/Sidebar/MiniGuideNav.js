import React, { Component } from "react";

import MiniGuideNavLink from "./MiniGuideNavLink";
import MiniGuideNavIcon from "./MiniGuideNavIcon";
import MiniGuideNavItem from "./MiniGuideNavItem";

import { ReactComponent as HomeIcon } from "../../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../../assets/icon-course.svg";
import styled from "styled-components/macro";

const AppMiniGuideNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const AppMiniGuideNavTxt = styled.span`
  display: block;
`;

class MiniGuideNav extends Component {
  render() {
    return (
      <AppMiniGuideNav role="navigation" aria-label="Navigation">
        <MiniGuideNavItem>
          <MiniGuideNavLink href="1">
            <MiniGuideNavIcon>
              <HomeIcon />
            </MiniGuideNavIcon>
            <AppMiniGuideNavTxt>Home</AppMiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="2">
            <MiniGuideNavIcon>
              <PresentationIcon />
            </MiniGuideNavIcon>
            <AppMiniGuideNavTxt>Presentations</AppMiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="3">
            <MiniGuideNavIcon>
              <CollectionIcon />
            </MiniGuideNavIcon>
            <AppMiniGuideNavTxt>Collections</AppMiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="4">
            <MiniGuideNavIcon>
              <CourseIcon />
            </MiniGuideNavIcon>
            <AppMiniGuideNavTxt>Courses</AppMiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>
      </AppMiniGuideNav>
    );
  }
}

export default MiniGuideNav;
