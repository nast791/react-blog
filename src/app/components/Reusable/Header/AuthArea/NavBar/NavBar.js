import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../../../../store/actions/auth";
import {NavBarBody, NavBarItem, NavBarLink} from "../../_Styles/NavBarStyles";

const NavBar = props => {
  return (
    <NavBarBody>
      <NavBarItem><NavBarLink to="/profile" exact>Профиль</NavBarLink></NavBarItem>
      <NavBarItem onClick={props.logout}><NavBarLink as="a">Выйти</NavBarLink></NavBarItem>
    </NavBarBody>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(NavBar);