import React from "react";
import styled from "styled-components/macro";

const Item = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: ${props => props.theme.space[5]} 0;
  border-top: ${props => props.theme.colors.grayOne} 1px solid;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
const ImageWrapper = styled.span`
  flex: ${e => (e.isFaculty ? `0 0 2.5rem` : `0 0 7.5rem`)};
  margin: 0 ${props => props.theme.space[4]} 0 0;
  border-radius: ${e => (e.isFaculty ? `50%` : ``)};
  overflow: hidden;
`;

const Text = styled.span`
  flex: 1 100%;
`;
const Title = styled.span`
  display: block;
`;

const Description = styled.span`
  display: block;
`;

const MediaListItem = ({ src, alt, title, description, ...props }) => {
  return (
    <Item>
      <ImageWrapper isFaculty={props.isFaculty}>
        <Image src={src} alt={alt} />
      </ImageWrapper>
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
    </Item>
  );
};

export default MediaListItem;
