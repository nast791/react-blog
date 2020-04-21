import styled from "styled-components";
import SearchIcon from "../../../../img/search.png";

export const InputBody = styled.label`
  
`;

export const SearchInput = styled.input`
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
`;
