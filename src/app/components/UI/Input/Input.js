import React from 'react';
import {FormInput, InputBody, InputError, SearchInput} from "./InputStyles";

const Input = props => {
  const defaultProps = {
    type: props.type || 'text',
    placeholder: props.placeholder,
    name: props.name,
    autoComplete: props.autocomplete || null
  };

  return (
    <InputBody>
      { props.input === 'search' ? <SearchInput {...defaultProps} {...props.input}/> :
        <FormInput {...defaultProps} {...props.input}/> }

      {props.meta && props.meta.error && props.meta.touched &&
      <InputError>{props.meta.error}</InputError>}
    </InputBody>
  );
};

export default Input;