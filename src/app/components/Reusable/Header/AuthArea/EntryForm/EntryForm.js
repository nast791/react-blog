import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";
import {email, password, requiredInput} from "../../../../../validation/validation";
import {FormBody, FormError} from "../../_Styles/AuthAreaForms";

const EntryForm = props => {
  return (
    <FormBody onSubmit={props.handleSubmit} noValidate>
      <Field name="email" component={Input} placeholder="E-mail" type="email" validate={[requiredInput, email]}/>
      <Field name="password" component={Input} placeholder="Пароль" type="password" validate={[requiredInput, password]}/>
      <Button disabled={!props.valid} data-type="submit">Войти</Button>
      {props.errorText && props.errorNum <= 3 ? <FormError>{props.errorText}</FormError> : null}
    </FormBody>
  );
};

export default reduxForm({
  form: 'entry'
})(EntryForm);