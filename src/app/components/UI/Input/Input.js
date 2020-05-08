import React from 'react';
import {InputBody, InputElement, InputError} from "./InputStyles";

const Input = props => {
  const defaultProps = {
    type: props.type || 'text',
    placeholder: props.placeholder,
    name: props.name,
    autoComplete: props.autocomplete || null,
    'data-type': props['data-type'] || 'base'
  };

  return (
    <InputBody>
      <InputElement {...defaultProps} {...props.input}/>

      {props.meta && props.meta.error && props.meta.touched &&
      <InputError>{props.meta.error}</InputError>}
    </InputBody>
  );
};

export default Input;