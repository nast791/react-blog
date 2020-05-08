import {IS_MOUNTED_POPUP} from "../../utils/actions";

const initialState = {
  mountedPopup: false
};

export default function authChoice(state = initialState, action) {
  switch (action.type) {
    case IS_MOUNTED_POPUP:
      return {
        ...state, mountedPopup: action.value
      };
    default:
      return state;
  }
}