import {IS_MOUNTED_POPUP} from "../../utils/actions";

export function isMountedPopup(value) {
  return {
    type: IS_MOUNTED_POPUP,
    value
  }
}