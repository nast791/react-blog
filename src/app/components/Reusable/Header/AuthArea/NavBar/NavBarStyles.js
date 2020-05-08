import styled from "styled-components";

export const NavBarBody = styled.nav`
  position: absolute;
  content: "";
  top: calc(100% + 15px);
  right: 0;
  width: 200px;
  padding: 5px 0;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0,0,0,0.2);
`;

export const NavBarItem = styled.p`
  padding: 10px 10px;
  font-size: 14px;
  
  &:hover {
    color: #000000;
    background-color: rgba(139, 220, 247, 0.3);
  }
`;
