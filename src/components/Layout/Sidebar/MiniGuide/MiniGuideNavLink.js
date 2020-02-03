import React from "react";
import styled from "styled-components/macro";

const Link = styled.span`
  > a {
    background-color: ${props => props.theme.colors.appNavLinkBg};
    color: ${props => props.theme.colors.appNavLinkColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: ${props => props.theme.space[4]};
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

    &.active {
      background-color: ${props => props.theme.colors.appNavLinkBgActive};
      font-weight: 600;
      color: ${props => props.theme.colors.appNavLinkColorActive};

      svg {
        fill: currentColor;
      }
  }
`;

const MiniGuideNavLink = props => {
  return <Link>{props.children}</Link>;
};

export default MiniGuideNavLink;
