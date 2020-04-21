import React from 'react';
import {HeaderBody} from "./HeaderStyles";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

const Header = () => {
  return (
    <HeaderBody>
      <Container flex="jc-start">
        <Logo/>
        <Search/>
      </Container>
    </HeaderBody>
  );
};

export default Header;