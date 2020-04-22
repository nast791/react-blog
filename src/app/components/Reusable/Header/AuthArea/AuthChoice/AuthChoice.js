import React from 'react';
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import EntryForm from "../EntryForm/EntryForm";
import {AuthChoiceCross, AuthChoiceTab, AuthChoiceTabs} from "./AuthChoiceStyles";
import {connect} from "react-redux";
import {setEntry, setReg} from "../../../../../store/actions/authChoice";

const AuthChoice = props => {
  const cross = <svg height="20px" viewBox="0 0 311 311.07733" width="20px" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/></svg>;

  return (
    <React.Fragment>
      <AuthChoiceCross onClick={props.close} title="Закрыть">{cross}</AuthChoiceCross>
      <AuthChoiceTabs>
        <AuthChoiceTab onClick={props.setEntry} data-active={props.tab === 'entry'}>Войти</AuthChoiceTab>
        <AuthChoiceTab onClick={props.setReg} data-active={props.tab === 'reg'}>Зарегистрироваться</AuthChoiceTab>
      </AuthChoiceTabs>
      {props.tab === 'entry' ? <EntryForm/> : <RegistrationForm/>}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const {tab} = state.authChoice;
  return {tab};
}

function mapDispatchToProps(dispatch) {
  return {
    setEntry: () => dispatch(setEntry()),
    setReg: () => dispatch(setReg())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthChoice);