import React from "react";
import styled from "styled-components/macro";

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const ResponsiveImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};

export default ResponsiveImage;
