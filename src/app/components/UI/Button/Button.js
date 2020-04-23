import React from 'react';
import {SubmitButton} from "./ButtonStyles";

const Button = props => {
  const defaultProps = {
    type: props.type || 'submit',
    disabled: props.disabled || null
  };

  return (
    <React.Fragment>
      { props.type === 'submit' ? <SubmitButton {...defaultProps}>{props.children}</SubmitButton> :
        <SubmitButton {...defaultProps}>{props.children}</SubmitButton> }
    </React.Fragment>
  );
};

export default Button;