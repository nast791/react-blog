import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../../../../store/actions/auth";
import {NavBarBody, NavBarItem} from "./NavBarStyles";

const NavBar = props => {
  return (
    <NavBarBody>
      <NavBarItem>Личный кабинет</NavBarItem>
      <NavBarItem onClick={props.logout}>Выйти</NavBarItem>
    </NavBarBody>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(NavBar);