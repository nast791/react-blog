import styled from "styled-components";
import EntryIcon from "../../../../../img/entry.png";
import UserIcon from "../../../../../img/user.svg";

export const AuthAreaBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  
  &:hover > p, &[data-active="true"] > p {
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

export const AuthAreaUserName = styled.p`
  margin-top: 3px;
  font-size: 15px;
  line-height: 15px;
`;

export const AuthAreaUserAvatar = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;
  background-image: url(${UserIcon});
  background-repeat: no-repeat;
  background-position:50% 50%;
  background-size: 30px auto;
  overflow: hidden;
`;
