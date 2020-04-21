import React, {useRef} from 'react';
import {LogoBody, LogoImage} from "./LogoStyles";
import ImageLogo from '../../../../../img/main-logo.png'

const Logo = () => {
  const refLogo = useRef(null);
  const cancelIfActiveAndScroll = event => {
    if (refLogo.current.classList.contains('active')) {
      event.preventDefault();
    }
    window.scrollTo({top:0, behavior: "smooth"});
  };

  return (
    <LogoBody to="/" exact onClick={cancelIfActiveAndScroll} ref={refLogo}>
      <LogoImage src={ImageLogo} alt=""/>
    </LogoBody>
  );
};

export default Logo;