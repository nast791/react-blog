import React from 'react';
import {ButtonElement} from "./_Styles/ButtonStyles";

const Button = props => {
  const defaultProps = {
    type: props.type || 'submit',
    disabled: props.disabled || null,
    'data-type': props['data-type'] || 'base'
  };

  return (
    <React.Fragment>
      <ButtonElement {...defaultProps}>{props.children}</ButtonElement>
    </React.Fragment>
  );
};

export default Button;