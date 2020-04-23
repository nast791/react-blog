import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  text-transform:uppercase;
  background-color: #8bdcf7;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  
  &:active {
    box-shadow: inset 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    opacity: 1;
    background-color: lightgray;
    color: gray;
    font-weight: 400;
  }
`;
