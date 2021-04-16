import React from 'react';
import { BioDataWrapper, Description, Name, Position } from './styled';

const BioData = ({ user: { name, position, description } }) => {
  return (
    <BioDataWrapper>
      <Name>{name}</Name>
      <Position> {position}</Position>
      <Description>{description}</Description>
    </BioDataWrapper>
  );
};

export default BioData;
