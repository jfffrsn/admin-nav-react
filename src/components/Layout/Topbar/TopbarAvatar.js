import React from "react";
import styled from "styled-components/macro";

const AppTopbarAvatar = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
`;

const AppTopbarAvatarImg = styled.img`
  width: 100%;
  height: auto;
`;

function TopbarAvatar(props) {
  return (
    <AppTopbarAvatar>
      <AppTopbarAvatarImg src={props.imgSrc} alt={props.imgAlt} />
    </AppTopbarAvatar>
  );
}

export default TopbarAvatar;
