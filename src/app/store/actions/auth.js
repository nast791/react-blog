import {AUTH_LOGOUT, AUTH_REFRESH, AUTH_REJECT, AUTH_SUCCESS} from "../../constants/actions";
import {SIGN_KEY, URL_FIREBASE, URL_SIGN, EXPIRATION_DATE} from "../../constants/constants";
import {sendByFetch} from "../../constants/functions";

export function auth(email, password, isLogin, nickname = null, name = null) {
  return async dispatch => {
    try {
      const authData = {email, password, returnSecureToken: true}; // данные, отправляемые на сервер

      if (nickname) { // проверка никнейма на сервере
        const res = await fetch(`${URL_FIREBASE}/users.json`).then(res => res.json());
        const searchResult = Object.keys(res).filter(it => res[it].nickname === nickname);
        if (searchResult.length > 0) {
          dispatch(authReject('Этот никнейм уже занят'));
          return;
        }
      }

      const url = isLogin ? `${URL_SIGN}:signInWithPassword?key=${SIGN_KEY}` : `${URL_SIGN}:signUp?key=${SIGN_KEY}`;
      const data = await sendByFetch('POST', url, authData); // вход или регистрация

      if (!data.error) {
        const expirationDate = EXPIRATION_DATE;
        // пробуем получить данные пользователя по localId, если их нет, userInfo = null, дальше обновляем данные
        const userInfo = await fetch(`${URL_FIREBASE}/users/${data.localId}.json`).then(res => res.json());
        const sendData = userInfo ? {...userInfo, expirationDate} : {nickname, name, expirationDate};
        const userData = await sendByFetch('PUT', `${URL_FIREBASE}/users/${data.localId}.json`, sendData);

        localStorage.setItem('userId', data.localId);
        dispatch(authSuccess(data.localId, userData));
      } else {
        dispatch(authReject(data.error.message));
      }
    } catch (e) {
      console.log('Не удалось загрузить данные на сервер');
    }
  }
}

export function autoLogin(localId) {
  return async dispatch => {
    try {
      // получаем данные пользователя
      const userInfo = await fetch(`${URL_FIREBASE}/users/${localId}.json`).then(res => res.json());
      const expirationDate = userInfo.expirationDate;
      if (new Date(expirationDate) >= new Date()) {
        // перезаписываем время в БД
        const newUserInfo = await sendByFetch('PUT', `${URL_FIREBASE}/users/${localId}.json`, {...userInfo, expirationDate: EXPIRATION_DATE});
        dispatch(authSuccess(localId, newUserInfo));
      } else {
        dispatch(logout());
      }
    } catch {
      dispatch(logout());
    }
  }
}

export function authReject(error) {
  return {
    type: AUTH_REJECT,
    error
  }
}

export function authSuccess(localId, userInfo) {
  return {
    type: AUTH_SUCCESS,
    localId, userInfo
  }
}

export function logout() {
  localStorage.removeItem('userId');
  return {
    type: AUTH_LOGOUT
  }
}

export function refresh() {
  return {
    type: AUTH_REFRESH
  }
}