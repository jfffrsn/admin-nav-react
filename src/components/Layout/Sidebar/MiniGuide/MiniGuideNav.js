import React, { Component } from "react";

import MiniGuideNavLink from "./MiniGuideNavLink";
import MiniGuideNavIcon from "./MiniGuideNavIcon";
import MiniGuideNavItem from "./MiniGuideNavItem";
import MiniGuideNavText from "./MiniGuideNavText";

import { ReactComponent as HomeIcon } from "../../../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../../../assets/icon-course.svg";
import styled from "styled-components/macro";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

class MiniGuideNav extends Component {
  render() {
    return (
      <Nav role="navigation" aria-label="Navigation">
        <MiniGuideNavItem>
          <MiniGuideNavLink href="1">
            <MiniGuideNavIcon>
              <HomeIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Home" />
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="2">
            <MiniGuideNavIcon>
              <PresentationIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Presentations" />
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="3">
            <MiniGuideNavIcon>
              <CollectionIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Collections" />
          </MiniGuideNavLink>
        </MiniGuideNavItem>

        <MiniGuideNavItem>
          <MiniGuideNavLink href="4">
            <MiniGuideNavIcon>
              <CourseIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Courses" />
          </MiniGuideNavLink>
        </MiniGuideNavItem>
      </Nav>
    );
  }
}

export default MiniGuideNav;
