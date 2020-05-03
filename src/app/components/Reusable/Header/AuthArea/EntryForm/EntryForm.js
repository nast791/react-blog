import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from "../../../../UI/Input/Input";
import {FormBody} from "../AuthChoice/AuthChoiceStyles";
import Button from "../../../../UI/Button/Button";
import {email, password, requiredInput} from "../../../../../validation/validation";

const EntryForm = props => {
  return (
    <FormBody onSubmit={props.handleSubmit} noValidate>
      <Field name="email" component={Input} placeholder="E-mail" type="email" validate={[requiredInput, email]}/>
      <Field name="password" component={Input} placeholder="Пароль" type="password" validate={[requiredInput, password]}/>
      <Button disabled={!props.valid}>Войти</Button>
    </FormBody>
  );
};

export default reduxForm({
  form: 'entry'
})(EntryForm);