import styled from "styled-components";
import SearchIcon from "../../../../../img/search.png";

export const InputBody = styled.div`
  width: 100%;
`;

export const InputElement = styled.input`
  &[data-type='base'] {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    padding: 0 20px;
    border-radius: 5px;
    border: 1px solid #444b54;
    font-size: 15px;
    
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
  
  &[data-type='search'] {
    width: 220px;
    height: 28px;
    padding: 0 20px 0 30px;
    border-radius: 5px;
    border: 1px solid #444b54;
    font-size: 15px;
    background-repeat: no-repeat;
    background-image: url(${SearchIcon});
    background-size: 20px auto;
    background-position: 5px 50%;
  }
  
  &[type='date'] {
    text-transform:uppercase;
  }
  
  &:disabled {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.1);
    color: gray;
  }
`;

export const InputError = styled.span`
  display: inline-block;
  font-size: 12px;
  color: red;
`;
