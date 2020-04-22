import React from 'react';
import {HeaderBody} from "./HeaderStyles";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import AuthArea from "./AuthArea/AuthArea";

const Header = () => {
  return (
    <HeaderBody>
      <Container flex="jc-start">
        <Logo/>
        <Search/>
        <AuthArea/>
      </Container>
    </HeaderBody>
  );
};

export default Header;