import {IS_MOUNTED_POPUP, SET_TAB_FORM} from "../../constants/actions";

export function setFormTab(tab) {
  return {
    type: SET_TAB_FORM,
    tab
  }
}

export function isMountedPopup(value) {
  return {
    type: IS_MOUNTED_POPUP,
    value
  }
}