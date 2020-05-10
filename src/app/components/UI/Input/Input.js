import React from 'react';
import {InputBody, InputElement, InputError} from "./_Styles/InputStyles";

const Input = React.forwardRef((props, ref) => {
  const defaultProps = {
    type: props.type || 'text',
    placeholder: props.placeholder,
    name: props.name,
    autoComplete: props.autocomplete,
    'data-type': props['data-type'] || 'base',
    multiple: props.multiple,
  };

  return (
    <InputBody>
      { props['type'] === 'file' ?
        <InputElement {...defaultProps} ref={ref} onChange={props.onChange}/>:
        <InputElement {...defaultProps} {...props.input}/>
      }

      {props.meta && props.meta.error && props.meta.touched &&
      <InputError>{props.meta.error}</InputError>}
    </InputBody>
  );
});

export default Input;