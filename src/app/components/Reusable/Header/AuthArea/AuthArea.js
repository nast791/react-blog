import React from 'react';
import Popup from "reactjs-popup";
import {AuthAreaBody, AuthAreaIcon, AuthAreaText} from "./AuthAreaStyles";
import AuthChoice from "./AuthChoice/AuthChoice";
import {connect} from "react-redux";
import {setEntry} from "../../../../store/actions/authChoice";

const AuthArea = props => {
  return (
    <Popup modal
     trigger={<AuthAreaBody><AuthAreaIcon/><AuthAreaText>Войти</AuthAreaText></AuthAreaBody>} onClose={props.setEntry}>
      {close => <AuthChoice close={close} />}
    </Popup>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setEntry: () => dispatch(setEntry())
  };
}

export default connect(null, mapDispatchToProps)(AuthArea);