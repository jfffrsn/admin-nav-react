import React from "react";
import styled from "styled-components/macro";

import GuideNavItem from "./GuideNavItem";
import GuideNavIcon from "./GuideNavIcon";
import GuideNavText from "./GuideNavText";
import GuideNavLink from "./GuideNavLink";

import { ReactComponent as HomeIcon } from "../../../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../../../assets/icon-course.svg";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

function GuideNav(props) {
  return (
    <Nav role="navigation" aria-label="Main">
      <GuideNavItem>
        <GuideNavLink href="1">
          <GuideNavIcon>
            <HomeIcon />
          </GuideNavIcon>
          <GuideNavText text="Home" />
        </GuideNavLink>
      </GuideNavItem>

      <GuideNavItem>
        <GuideNavLink href="2">
          <GuideNavIcon>
            <PresentationIcon />
          </GuideNavIcon>
          <GuideNavText text="Presentations" />
        </GuideNavLink>
      </GuideNavItem>

      <GuideNavItem>
        <GuideNavLink href="3">
          <GuideNavIcon>
            <CollectionIcon />
          </GuideNavIcon>
          <GuideNavText text="Collections" />
        </GuideNavLink>
      </GuideNavItem>

      <GuideNavItem>
        <GuideNavLink href="4">
          <GuideNavIcon>
            <CourseIcon />
          </GuideNavIcon>
          <GuideNavText text="Courses" />
        </GuideNavLink>
      </GuideNavItem>
    </Nav>
  );
}

export default GuideNav;
