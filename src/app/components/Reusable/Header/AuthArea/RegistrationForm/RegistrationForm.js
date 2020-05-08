import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";
import {email, matchInput, password, requiredInput} from "../../../../../validation/validation";
import {FormBody, FormError} from "../AuthAreaFormStyles";

const RegistrationForm = props => {
  return (
    <FormBody onSubmit={props.handleSubmit} noValidate>
      <Field name="setNickname" component={Input} placeholder="Уникальный никнейм" validate={[requiredInput]}/>
      <Field name="setUsername" component={Input} placeholder="Имя" validate={[requiredInput]}/>
      <Field name="setEmail" component={Input} placeholder="E-mail" type="email" validate={[requiredInput, email]}/>
      <Field name="setPassword" component={Input} placeholder="Пароль" type="password" validate={[requiredInput, password]}/>
      <Field name="setPasswordRepeat" component={Input} placeholder="Повторите пароль" type="password" validate={[requiredInput, matchInput]}/>
      <Button disabled={!props.valid} data-type="submit">Зарегистрироваться</Button>
      {props.errorText && props.errorNum > 3 ? <FormError>{props.errorText}</FormError> : null}
    </FormBody>
  );
};

export default reduxForm({
  form: 'registration'
})(React.memo(RegistrationForm));