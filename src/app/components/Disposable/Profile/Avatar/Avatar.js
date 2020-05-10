import React, {useRef, useState} from 'react';
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import {AvatarForm} from "../_Styles/Avatar";
import DefaultAvatar from "../../../../../img/user.svg";

const Avatar = props => {
  const fileInput = useRef('');
  const [url, setUrl] = useState(DefaultAvatar);
  const handler = () => {
    setUrl(URL.createObjectURL(fileInput.current.files[0]));
  };

  return (
    <AvatarForm onSubmit={handler}>
      <img src={url} alt=""/>
      <Input name="avatar" type="file" data-type="avatar" multiple={false} ref={fileInput} onChange={handler}/>
      <Button data-type="submit">Загрузить</Button>
    </AvatarForm>
  );
};

export default Avatar;