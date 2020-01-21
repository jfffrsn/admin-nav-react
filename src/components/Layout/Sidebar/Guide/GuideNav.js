import React from "react";
import styled from "styled-components/macro";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

function GuideNav(props) {
  return (
    <Nav role="navigation" aria-label={props.label}>
      {props.children}
    </Nav>
  );
}

export default GuideNav;
