import React from 'react';
import Header from "../../Reusable/Header/Header";
import UserData from "./UserData/UserData";
import Avatar from "./Avatar/Avatar";
import {ProfileBody} from "./_Styles/Profile";
import Container from "../../Reusable/Container/Container";

const Profile = () => {
  return (
    <React.Fragment>
      <Header/>
      <ProfileBody>
        <Container flex="flex">
          <Avatar/>
          <UserData/>
        </Container>
      </ProfileBody>
    </React.Fragment>
  );
};

export default Profile;