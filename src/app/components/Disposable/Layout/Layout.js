import React, {useEffect} from 'react';
import {LayoutBody} from "./_Styles/LayoutStyles";
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

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: (localId) => dispatch(autoLogin(localId))
  };
}

export default connect(null, mapDispatchToProps)(Layout);
