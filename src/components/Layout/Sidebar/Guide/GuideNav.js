import React from "react";
import styled from "styled-components/macro";

import { ReactComponent as HomeIcon } from "../../../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../../../assets/icon-course.svg";

import GuideNavItem from "./GuideNavItem";
import GuideNavIcon from "./GuideNavIcon";
import GuideNavText from "./GuideNavText";
import GuideNavLink from "./GuideNavLink";

import { NavLink } from "react-router-dom";
import { i18nX } from '../../../../i18n';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const GuideNav = props => {
  return (
    <Nav role="navigation" aria-label={props.label}>
      <GuideNavItem>
        <GuideNavLink>
          <NavLink to="/dash">
            <GuideNavIcon>
              <HomeIcon />
            </GuideNavIcon>
            <GuideNavText text={i18nX.t("SideNav.Home")} />
          </NavLink>
        </GuideNavLink>
      </GuideNavItem>

      <GuideNavItem>
        <GuideNavLink>
          <NavLink to="/presentations">
            <GuideNavIcon>
              <PresentationIcon />
            </GuideNavIcon>

            <GuideNavText text={i18nX.t("SideNav.Presentations")} />
          </NavLink>
        </GuideNavLink>
      </GuideNavItem>

      <GuideNavItem>
        <GuideNavLink>
          <NavLink to="/collections">
            <GuideNavIcon>
              <CollectionIcon />
            </GuideNavIcon>
            <GuideNavText text={i18nX.t("SideNav.Collections")} />
          </NavLink>
        </GuideNavLink>
      </GuideNavItem>

      <GuideNavItem>
        <GuideNavLink>
          <NavLink to="/courses">
            <GuideNavIcon>
              <CourseIcon />
            </GuideNavIcon>
            <GuideNavText text={i18nX.t("SideNav.Courses")} />
          </NavLink>
        </GuideNavLink>
      </GuideNavItem>
    </Nav>
  );
};

export default GuideNav;
