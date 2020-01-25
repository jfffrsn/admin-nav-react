import React from "react";
import styled from "styled-components/macro";

const Span = styled.span`
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

const TopbarAvatar = props => {
  return (
    <Span>
      <Image src={props.imgSrc} alt={props.imgAlt} />
    </Span>
  );
};

export default TopbarAvatar;
