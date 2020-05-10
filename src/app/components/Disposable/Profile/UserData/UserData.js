import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../../../UI/Input/Input";
import {email, password, requiredInput} from "../../../../validation/validation";
import Button from "../../../UI/Button/Button";

const UserData = props => {
  return (
    <form onSubmit={props.handleSubmit} noValidate>
      <Field name="email" component={Input} placeholder="E-mail" type="email" validate={[requiredInput, email]}/>
      <Field name="password" component={Input} placeholder="Пароль" type="password" validate={[requiredInput, password]}/>
      <Button disabled={!props.valid} data-type="submit">Сохранить</Button>
      {props.errorText && props.errorNum <= 3 ? <p>{props.errorText}</p> : null}
    </form>
  );
};

export default reduxForm({
  form: 'profile'
})(UserData);