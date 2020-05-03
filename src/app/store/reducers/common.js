import {IS_MOUNTED_POPUP, SET_TAB_FORM} from "../../constants/actions";

const initialState = {
  tabForm: 'entry',
  mountedPopup: false
};

export default function authChoice(state = initialState, action) {
  switch (action.type) {
    case SET_TAB_FORM:
      return {
        ...state, tabForm: action.tab
      };
    case IS_MOUNTED_POPUP:
      return {
        ...state, mountedPopup: action.value
      };
    default:
      return state;
  }
}