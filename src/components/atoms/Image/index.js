import React from 'react';
import { ImageWrapper, StyledImg } from './styled';

const Image = ({ source, altText }) => (
  <ImageWrapper>
    <StyledImg src={source} alt={altText} />
  </ImageWrapper>
);

export default Image;
