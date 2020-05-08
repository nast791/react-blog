import React, {useEffect, useRef} from 'react';
import Popup from "reactjs-popup";
import {AuthAreaBody, AuthAreaIcon, AuthAreaText, AuthAreaUserAvatar, AuthAreaUserName} from "./AuthAreaStyles";
import AuthChoice from "./AuthChoice/AuthChoice";
import {connect} from "react-redux";
import {isMountedPopup, toggleNavBar} from "../../../../store/actions/common";
import NavBar from "./NavBar/NavBar";
import {useClickAway} from "react-use";

const AuthArea = props => {
  useEffect(() => {
    props.isMountedPopup(true);
    return () => props.isMountedPopup(false);
  }, [props.autoLogin]);
  const userId = localStorage.getItem('userId');
  const authAreaRef = useRef('');
  useClickAway(authAreaRef, () => {
    props.toggleNavBar(false);
  });

  return (
    <React.Fragment>
      { /* Не выполнен вход на аккаунт */
        !userId && props.mountedPopup ?
        <Popup modal trigger={<AuthAreaBody><AuthAreaIcon/><AuthAreaText>Войти</AuthAreaText></AuthAreaBody>}>
          {close => <AuthChoice close={close}/>}
        </Popup>
        : null
      }
      { /* Выполнен вход на аккаунт */
        props.localId ?
        <AuthAreaBody onClick={() => props.toggleNavBar(!props.openNavBar)} data-active={props.openNavBar} ref={authAreaRef}>
          <AuthAreaUserName>{props.userInfo.name}</AuthAreaUserName>
          <AuthAreaUserAvatar/>
          {props.openNavBar && <NavBar/>}
        </AuthAreaBody> : null
      }
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const {mountedPopup, openNavBar} = state.common;
  const {userInfo, localId, autoLogin} = state.auth;
  return {userInfo, localId, autoLogin, mountedPopup, openNavBar};
}

function mapDispatchToProps(dispatch) {
  return {
    isMountedPopup: (value) => dispatch(isMountedPopup(value)),
    toggleNavBar: (value) => dispatch(toggleNavBar(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AuthArea));