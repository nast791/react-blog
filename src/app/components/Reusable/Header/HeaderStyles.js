import styled from "styled-components";

export const HeaderBody = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background-color: #8bdcf7;
  color: #444b54;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 5;
  
  .popup-content {
    position: relative;
    max-width: 350px;
    width: calc(100% - 60px) !important;
    padding: 0 !important;
    border-radius: 5px;
    border: none !important;
  }
`;
