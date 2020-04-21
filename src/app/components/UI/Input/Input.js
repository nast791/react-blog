import React from 'react';
import {InputBody, SearchInput} from "./InputStyles";

const Input = props => {
  const inputType = props.type || 'text';
  const defaultProps = {
    type: inputType,
    placeholder: props.placeholder,
    name: props.name,
    autoComplete: props.autocomplete
  };

  return (
    <InputBody>
      { props.input === 'search' ? <SearchInput {...defaultProps}/> :
        <SearchInput {...defaultProps}/> }
    </InputBody>
  );
};

export default Input;