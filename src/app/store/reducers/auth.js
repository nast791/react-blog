import {AUTH_LOGOUT, AUTH_REFRESH, AUTH_REJECT, AUTH_SUCCESS} from "../../constants/actions";

const initialState = {
  userInfo: null,
  localId: null,
  error: null,
  autoLogin: true
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, localId: action.localId, userInfo: action.userInfo, error: null
      };
    case AUTH_REJECT:
      return {
        ...state, error: action.error
      };
    case AUTH_LOGOUT:
      return {
        ...state, localId: null, userInfo: null, error: null, autoLogin: false
      };
    case AUTH_REFRESH:
      return {
        ...state, error: null
      };
    default:
      return state;
  }
}