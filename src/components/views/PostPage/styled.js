import styled from 'styled-components';

export const ImageWrapper = styled.div`
  max-width: 70%;
  align-self: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-box-shadow: inset 25px 25px 25px 25px rgba(255, 255, 255, 0.32);
    box-shadow: inset 25px 25px 25px 25px rgba(255, 255, 255, 0.32);
  }
`;

export const StyledImg = styled.img`
  max-width: 100%;
`;
