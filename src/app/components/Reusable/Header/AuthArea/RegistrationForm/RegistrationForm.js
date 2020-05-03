import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from "../../../../UI/Input/Input";
import {FormBody} from "../AuthChoice/AuthChoiceStyles";
import Button from "../../../../UI/Button/Button";
import {email, matchInput, password, requiredInput} from "../../../../../validation/validation";

const RegistrationForm = props => {
  return (
    <FormBody onSubmit={props.handleSubmit} noValidate>
      <Field name="setNickname" component={Input} placeholder="Никнейм" validate={[requiredInput]}/>
      <Field name="setUsername" component={Input} placeholder="Имя" validate={[requiredInput]}/>
      <Field name="setEmail" component={Input} placeholder="E-mail" type="email" validate={[requiredInput, email]}/>
      <Field name="setPassword" component={Input} placeholder="Пароль" type="password" validate={[requiredInput, password]}/>
      <Field name="setPasswordRepeat" component={Input} placeholder="Повторите пароль" type="password" validate={[requiredInput, matchInput]}/>
      <Button disabled={!props.valid}>Зарегистрироваться</Button>
      {props.errorText ? <p>{props.errorText}</p> : null}
    </FormBody>
  );
};

export default reduxForm({
  form: 'registration'
})(React.memo(RegistrationForm));