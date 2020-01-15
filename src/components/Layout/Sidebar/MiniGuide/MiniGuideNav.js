import React, { Component } from "react";

import MiniGuideNavLink from "./MiniGuideNavLink";
import MiniGuideNavIcon from "./MiniGuideNavIcon";
import MiniGuideNavItem from "./MiniGuideNavItem";
import MiniGuideNavTxt from "./MiniGuideNavTxt";

import { ReactComponent as HomeIcon } from "../../../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../../../assets/icon-course.svg";
import styled from "styled-components/macro";

const AppMiniGuideNav = styled.nav`
  display: flex;
  flex-direction: column;
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
            <MiniGuideNavTxt>Home</MiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="2">
            <MiniGuideNavIcon>
              <PresentationIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavTxt>Presentations</MiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="3">
            <MiniGuideNavIcon>
              <CollectionIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavTxt>Collections</MiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="4">
            <MiniGuideNavIcon>
              <CourseIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavTxt>Courses</MiniGuideNavTxt>
          </MiniGuideNavLink>
        </MiniGuideNavItem>
      </AppMiniGuideNav>
    );
  }
}

export default MiniGuideNav;
