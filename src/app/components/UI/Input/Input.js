import React from 'react';
import {InputBody, InputElement, InputError} from "./_Styles/Input";

const Input = props => {
  const defaultProps = {
    type: props.type || 'text',
    placeholder: props.placeholder,
    name: props.name,
    autoComplete: props.autocomplete,
    'data-type': props['data-type'] || 'base',
    multiple: props.multiple,
    disabled: props.disabled
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