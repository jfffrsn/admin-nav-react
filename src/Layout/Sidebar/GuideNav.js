import React, { Component } from "react";
import styled from "styled-components/macro";

import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../assets/icon-course.svg";

const AppGuideNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const AppGuideNavItem = styled.div`
  font-size: 0.875rem;
`;

const AppGuideNavLink = styled.a`
  background-color: ${props => props.theme.colors.appNavLinkBg};
  color: ${props => props.theme.colors.appNavLinkColor};
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  padding: 0 ${props => props.theme.space[3]};
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

  &:hover svg,
  &:focus svg {
    fill: currentColor;
  }
`;
const AppGuideNavIcon = styled.span`
  margin-right: ${props => props.theme.space[3]};
  display: flex;
  height: ${props => props.theme.space[4]};
  width: ${props => props.theme.space[4]};

  > svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.colors.appIconInactive};
  }
`;

const AppGuideNavTxt = styled.span`
  display: block;
`;

class GuideNav extends Component {
  render() {
    return (
      <AppGuideNav role="navigation" aria-label="Main">
        <AppGuideNavItem>
          <AppGuideNavLink href="1">
            <AppGuideNavIcon>
              <HomeIcon />
            </AppGuideNavIcon>
            <AppGuideNavTxt>Home</AppGuideNavTxt>
          </AppGuideNavLink>
        </AppGuideNavItem>

        <AppGuideNavItem>
          <AppGuideNavLink href="2">
            <AppGuideNavIcon>
              <PresentationIcon />
            </AppGuideNavIcon>
            <AppGuideNavTxt>Presentations</AppGuideNavTxt>
          </AppGuideNavLink>
        </AppGuideNavItem>

        <AppGuideNavItem>
          <AppGuideNavLink href="3">
            <AppGuideNavIcon>
              <CollectionIcon />
            </AppGuideNavIcon>
            <AppGuideNavTxt>Collections</AppGuideNavTxt>
          </AppGuideNavLink>
        </AppGuideNavItem>

        <AppGuideNavItem>
          <AppGuideNavLink href="4">
            <AppGuideNavIcon>
              <CourseIcon />
            </AppGuideNavIcon>
            <AppGuideNavTxt>Courses</AppGuideNavTxt>
          </AppGuideNavLink>
        </AppGuideNavItem>
      </AppGuideNav>
    );
  }
}

export default GuideNav;
