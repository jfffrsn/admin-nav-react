import React, { Component } from "react";

import { ReactComponent as HomeIcon } from "../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../assets/icon-course.svg";

import styled from "styled-components/macro";

const AppMiniGuideNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const AppMiniGuideNavItem = styled.div`
  font-size: 0.625rem;
`;

const AppMiniGuideNavLink = styled.a`
  background-color: ${props => props.theme.colors.appNavLinkBg};
  color: ${props => props.theme.colors.appNavLinkColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.space[3]};
  text-decoration: none;

  &:active,
  &:visited {
    color: ${props => props.theme.colors.appNavLinkColor};
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.appNavLinkBgHover};
    color: ${props => props.theme.colors.appNavLinkColorHover};
    text-decoration: none;
  }
`;

const AppMiniGuideNavIcon = styled.span`
  display: flex;
  height: ${props => props.theme.space[4]};
  width: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[2]};

  > svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.colors.appIconInactive};
  }
`;

const AppMiniGuideNavTxt = styled.span`
  display: block;
`;

class MiniGuideNav extends Component {
  render() {
    return (
      <AppMiniGuideNav role="navigation" aria-label="Navigation">
        <AppMiniGuideNavItem>
          <AppMiniGuideNavLink href="google.com">
            <AppMiniGuideNavIcon>
              <HomeIcon />
            </AppMiniGuideNavIcon>
            <AppMiniGuideNavTxt>Home</AppMiniGuideNavTxt>
          </AppMiniGuideNavLink>
        </AppMiniGuideNavItem>

        <AppMiniGuideNavItem>
          <AppMiniGuideNavLink href="google.com">
            <AppMiniGuideNavIcon>
              <PresentationIcon />
            </AppMiniGuideNavIcon>
            <AppMiniGuideNavTxt>Presentations</AppMiniGuideNavTxt>
          </AppMiniGuideNavLink>
        </AppMiniGuideNavItem>

        <AppMiniGuideNavItem>
          <AppMiniGuideNavLink href="google.com">
            <AppMiniGuideNavIcon>
              <CollectionIcon />
            </AppMiniGuideNavIcon>
            <AppMiniGuideNavTxt>Collections</AppMiniGuideNavTxt>
          </AppMiniGuideNavLink>
        </AppMiniGuideNavItem>

        <AppMiniGuideNavItem>
          <AppMiniGuideNavLink href="google.com">
            <AppMiniGuideNavIcon>
              <CourseIcon />
            </AppMiniGuideNavIcon>
            <AppMiniGuideNavTxt>Courses</AppMiniGuideNavTxt>
          </AppMiniGuideNavLink>
        </AppMiniGuideNavItem>
      </AppMiniGuideNav>
    );
  }
}

export default MiniGuideNav;
