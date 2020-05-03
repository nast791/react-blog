import React, {useEffect} from 'react';
import {LayoutBody} from "./LayoutStyles";
import {autoLogin} from "../../../store/actions/auth";
import {connect} from "react-redux";

const Layout = props => {
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;
    props.autoLogin(userId);
  }, []);

  return (
    <LayoutBody>{props.children}</LayoutBody>
  );
};

function mapStateToProps(state) {
  const {userInfo, token} = state.auth;
  return {userInfo, token};
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: (token, expirationDate) => dispatch(autoLogin(token, expirationDate))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
