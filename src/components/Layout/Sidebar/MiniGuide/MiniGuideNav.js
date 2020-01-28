import React from "react";
import styled from "styled-components/macro";

import { ReactComponent as HomeIcon } from "../../../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../../../assets/icon-course.svg";

import MiniGuideNavLink from "./MiniGuideNavLink";
import MiniGuideNavIcon from "./MiniGuideNavIcon";
import MiniGuideNavItem from "./MiniGuideNavItem";
import MiniGuideNavText from "./MiniGuideNavText";

import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MiniGuideNav = props => {
  return (
    <Nav role="navigation" aria-label={props.label}>
      <MiniGuideNavItem>
        <MiniGuideNavLink>
          <NavLink to="/dash">
            <MiniGuideNavIcon>
              <HomeIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Home" />
          </NavLink>
        </MiniGuideNavLink>
      </MiniGuideNavItem>

      <MiniGuideNavItem>
        <MiniGuideNavLink>
          <NavLink to="/presentations">
            <MiniGuideNavIcon>
              <PresentationIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Presentations" />
          </NavLink>
        </MiniGuideNavLink>
      </MiniGuideNavItem>

      <MiniGuideNavItem>
        <MiniGuideNavLink>
          <NavLink to="/collections">
            <MiniGuideNavIcon>
              <CollectionIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Collections" />
          </NavLink>
        </MiniGuideNavLink>
      </MiniGuideNavItem>

      <MiniGuideNavItem>
        <MiniGuideNavLink>
          <NavLink to="/courses">
            <MiniGuideNavIcon>
              <CourseIcon />
            </MiniGuideNavIcon>
            <MiniGuideNavText text="Courses" />
          </NavLink>
        </MiniGuideNavLink>
      </MiniGuideNavItem>
    </Nav>
  );
};

export default MiniGuideNav;
