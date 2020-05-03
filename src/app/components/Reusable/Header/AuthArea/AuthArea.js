import React, {useEffect} from 'react';
import Popup from "reactjs-popup";
import {AuthAreaBody, AuthAreaIcon, AuthAreaText} from "./AuthAreaStyles";
import AuthChoice from "./AuthChoice/AuthChoice";
import {connect} from "react-redux";
import {isMountedPopup, setFormTab} from "../../../../store/actions/common";
import {logout} from "../../../../store/actions/auth";

const AuthArea = props => {
  useEffect(() => {
    props.isMountedPopup(true);
    return () => props.isMountedPopup(false);
  }, [props.autoLogin]);
  const userId = localStorage.getItem('userId');

  return (
    <React.Fragment>
      { /* Не выполнен вход на аккаунт */
        !userId && props.mountedPopup ?
        <Popup modal
               trigger={<AuthAreaBody><AuthAreaIcon/><AuthAreaText>Войти</AuthAreaText></AuthAreaBody>}
               onClose={props.setFormTab.bind(null, 'entry')}>
          {close => <AuthChoice close={close}/>}
        </Popup>
        : null
      }
      { /* Выполнен вход на аккаунт */
        props.localId ?
        <AuthAreaBody><p>{props.userInfo.name}</p>&nbsp;<p onClick={props.logout}>Выйти</p></AuthAreaBody> : null
      }
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const {mountedPopup} = state.common;
  const {userInfo, localId, autoLogin} = state.auth;
  return {userInfo, localId, autoLogin, mountedPopup};
}

function mapDispatchToProps(dispatch) {
  return {
    setFormTab: (tabForm) => dispatch(setFormTab(tabForm)),
    isMountedPopup: (value) => dispatch(isMountedPopup(value)),
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AuthArea));