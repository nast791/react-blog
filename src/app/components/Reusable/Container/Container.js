import React from 'react';
import {ContainerBody} from './ContainerStyles';

const Container = props => {
  return (
    <ContainerBody>
      {props.children}
    </ContainerBody>
  );
};

export default Container;