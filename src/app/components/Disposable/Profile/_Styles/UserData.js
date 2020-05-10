import styled from "styled-components";

export const UserDataForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const UserDataAvatar = styled.label`
  position: relative;
  width: 350px;
  min-width: 350px;
  height: 350px;
  margin-right: 5%;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const UserDataAvatarInput = styled.input`
  display: none;
`;

export const UserDataAvatarImage = styled.img`
  width: 100%;
`;

export const UserDataAvatarIcon = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 30px;
`;

export const UserDataList = styled.div`
  flex: 1;
`;

export const UserDataItem = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  select {
    width: 100%;
    height: 40px; 
    margin-top: 15px;
    padding: 0 20px;
    border-radius: 5px;
    border: 1px solid #444b54;
    cursor: pointer;
  }
`;

export const UserDataItemLabel = styled.p`
  margin-top: 15px;
  width: 200px;
  min-width: 200px;
`;

export const UserDataRadioGroup = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  
  input {
    display: none;
  }
  
  input:checked + p {
    background-color: #8bdcf7;
    color: #444b54;
  }
`;

export const UserDataRadioItem = styled.label``;

export const UserDataRadioItemLabel = styled.p`
  height: 40px;
  margin-right: 5px;
  padding: 9px 20px;
  border-radius: 5px;
  border: 1px solid #444b54;
  background-color: #FFFFFF;
  cursor: pointer;
`;

export const UserDataButtonWrapper = styled.div`
  padding-top: 30px;
  padding-left: 200px;
`;
