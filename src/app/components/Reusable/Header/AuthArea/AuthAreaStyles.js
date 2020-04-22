import styled from "styled-components";
import EntryIcon from "../../../../../img/entry.png";

export const AuthAreaBody = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  
  &:hover p {
    color:#000;
    text-shadow: 0 0 0.5px black;
  }
`;

export const AuthAreaIcon = styled.div`
  width: 28px;
  height: 28px;
  background-image: url(${EntryIcon});
  background-repeat: no-repeat;
  background-position:0 0;
  background-size: auto 100%;
`;

export const AuthAreaText = styled.p`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 15px;
  line-height: 15px;
`;