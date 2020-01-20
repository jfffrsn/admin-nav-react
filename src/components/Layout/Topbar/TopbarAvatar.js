import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function TopbarAvatar(props) {
  return (
    <Wrapper>
      <Image src={props.imgSrc} alt={props.imgAlt} />
    </Wrapper>
  );
}

export default TopbarAvatar;
