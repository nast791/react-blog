import React, {useEffect} from 'react';
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import EntryForm from "../EntryForm/EntryForm";
import {AuthChoiceCross, AuthChoiceTab, AuthChoiceTabs} from "./AuthChoiceStyles";
import {connect} from "react-redux";
import {setFormTab} from "../../../../../store/actions/common";
import {auth, refresh} from "../../../../../store/actions/auth";

const AuthChoice = props => {
  useEffect(() => {
    props.refresh()
  }, []);

  const cross = <svg height="20px" viewBox="0 0 311 311.07733" width="20px" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/></svg>;

  const loginHandler = data => {
    props.auth(
      data.email,
      data.password,
      true
    );
  };

  const registerHandler = data => {
    props.auth(
      data.setEmail,
      data.setPassword,
      false,
      data.setNickname,
      data.setUsername
    );
  };

  return (
    <React.Fragment>
      <AuthChoiceCross onClick={props.close} title="Закрыть">{cross}</AuthChoiceCross>
      <AuthChoiceTabs>
        <AuthChoiceTab onClick={props.setFormTab.bind(null, 'entry')} data-active={props.tabForm === 'entry'}>Войти</AuthChoiceTab>
        <AuthChoiceTab onClick={props.setFormTab.bind(null, 'reg')} data-active={props.tabForm === 'reg'}>Зарегистрироваться</AuthChoiceTab>
      </AuthChoiceTabs>
      {props.tabForm === 'entry' ?
        <EntryForm onSubmit={loginHandler} error={props.error}/> :
        <RegistrationForm onSubmit={registerHandler} errorText={props.error}/>
      }
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const {tabForm} = state.common;
  const {error} = state.auth;
  return {tabForm, error};
}

function mapDispatchToProps(dispatch) {
  return {
    setFormTab: (tabForm) => dispatch(setFormTab(tabForm)),
    auth: (email, password, isLogin, closePopupFn, nickname, name) => dispatch(auth(email, password, isLogin, closePopupFn, nickname, name)),
    refresh: () => dispatch(refresh())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AuthChoice));