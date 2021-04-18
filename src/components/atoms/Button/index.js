import React from 'react';
import { StyledButton } from './styled';
import { ReactComponent as EditIcon } from 'assets/images/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/images/remove.svg';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.remove === true ? <RemoveIcon /> : <EditIcon />}
    </StyledButton>
  );
};

export default Button;
