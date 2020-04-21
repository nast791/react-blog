import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const LogoBody = styled(NavLink)`
  position: relative;
  margin-right: 40px;
  
  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 1.5px;
    height: calc(100% - 4px);
    background-color: #444b54;
  }
`;

export const LogoImage = styled.img`
  width: 30px;
`;