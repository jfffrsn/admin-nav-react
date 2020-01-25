import React from "react";
import styled from "styled-components/macro";

const Link = styled.a`
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

const GuideNavLink = props => {
  return <Link>{props.children}</Link>;
};

export default GuideNavLink;
