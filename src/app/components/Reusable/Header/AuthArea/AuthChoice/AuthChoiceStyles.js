import styled from "styled-components";

export const AuthChoiceCross = styled.span`
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  top: 0;
  right: -25px;
  cursor: pointer;
  
  &:hover svg {
    fill: #8bdcf7;
  }
`;

export const AuthChoiceTabs = styled.div`
  display: flex;
`;

export const AuthChoiceTab = styled.button`
  width: 50%;
  padding: 10px;
  text-transform: uppercase;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  text-shadow: 0 0 0.5px black;
  font-size: 12px;
  
  &:hover {
    opacity: 1;
  }
  
  &:first-of-type {
    border-right: 1px solid transparent;
  }
  
  &:last-of-type {
    border-left: 1px solid transparent;
  }
  
  &[data-active="false"] {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    background-color: lightgray;
    cursor: pointer;
    text-shadow: none;
    color: gray;
    
    &:first-of-type {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      border-top-left-radius: 5px;
    }
    
    &:last-of-type {
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      border-top-right-radius: 5px;
    }
    
    &:hover {
      background-color: #8bdcf7;
      color: #444b54;
    }
  }
`;
