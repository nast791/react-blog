import React, {useRef, useState} from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../../../UI/Input/Input";
import {requiredInput} from "../../../../validation/validation";
import Button from "../../../UI/Button/Button";
import DefaultAvatar from "../../../../../img/user.svg";
import {
  UserDataAvatar,
  UserDataAvatarIcon,
  UserDataAvatarImage,
  UserDataAvatarInput, UserDataButtonWrapper,
  UserDataForm,
  UserDataItem,
  UserDataItemLabel,
  UserDataList,
  UserDataRadioGroup,
  UserDataRadioItem,
  UserDataRadioItemLabel
} from "../_Styles/UserData";
import AddIcon from "../../../../../img/add-img.svg";

const UserData = props => {
  const fileInput = useRef('');
  const [url, setUrl] = useState(DefaultAvatar);
  const handler = () => {
    setUrl(URL.createObjectURL(fileInput.current.files[0]));
  };

  return (
    <UserDataForm onSubmit={props.handleSubmit} noValidate>
      <UserDataAvatar title="Загрузите изображение">
        <UserDataAvatarInput type="file" name="avatar" data-type="avatar" multiple={false} ref={fileInput} onChange={handler}/>
        <UserDataAvatarImage src={url} alt=""/>
        <UserDataAvatarIcon src={AddIcon} alt=""/>
      </UserDataAvatar>

      <UserDataList>
        <UserDataItem>
          <UserDataItemLabel>Имя</UserDataItemLabel>
          <Field name="profile-name" component={Input} validate={[requiredInput]}/>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>Фамилия</UserDataItemLabel>
          <Field name="profile-surname" component={Input}/>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>Пол</UserDataItemLabel>
          <UserDataRadioGroup>
            <UserDataRadioItem>
              <Field name="profile-gender" component="input" type="radio" value="Мужской"/>
              <UserDataRadioItemLabel>Мужской</UserDataRadioItemLabel>
            </UserDataRadioItem>
            <UserDataRadioItem>
              <Field name="profile-gender" component="input" type="radio" value="Женский"/>
              <UserDataRadioItemLabel>Женский</UserDataRadioItemLabel>
            </UserDataRadioItem>
          </UserDataRadioGroup>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>Дата рождения</UserDataItemLabel>
          <Field name="profile-birthday" component={Input} type="date"/>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>Родной город</UserDataItemLabel>
          <Field name="profile-city" component={Input}/>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>Семейное положение</UserDataItemLabel>
          <Field name="profile-city" component="select">
            <option value="disabled">Не выбрано</option>
            <option value="married">В браке</option>
            <option value="unmarried">Не женат/не замужем</option>
          </Field>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>Статус</UserDataItemLabel>
          <Field name="profile-status" component={Input}/>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>Увлечения</UserDataItemLabel>
          <Field name="profile-hobby" component={Input}/>
        </UserDataItem>
        <UserDataItem>
          <UserDataItemLabel>E-mail</UserDataItemLabel>
          <Field name="profile-email" component={Input} type="e-mail" disabled={true}/>
        </UserDataItem>
        <UserDataButtonWrapper>
          <Button disabled={!props.valid} data-type="submit">Сохранить</Button>
        </UserDataButtonWrapper>
      </UserDataList>
    </UserDataForm>
  );
};

export default reduxForm({
  form: 'profile'
})(UserData);