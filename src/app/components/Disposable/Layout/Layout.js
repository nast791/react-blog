import React from 'react';
import {LayoutBody} from "./LayoutStyles";

const Layout = props => {
  return (
    <LayoutBody>{props.children}</LayoutBody>
  );
};


export default Layout;
