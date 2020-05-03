import {AUTH_LOGOUT, AUTH_REFRESH, AUTH_REJECT, AUTH_SUCCESS} from "../../constants/actions";

export function auth(email, password, isLogin, nickname = null, name = null) {
  return async dispatch => {
    try {
      dispatch(refresh()); // сброс ошибок

      const authData = { // данные, отправляемые на сервер
        email, password,
        returnSecureToken: true
      };

      if (nickname) { // проверка никнейма на сервере
        try {
          const res = await fetch(`https://react-blog-332e0.firebaseio.com/users.json`).then(res => res.json());
          const searchResult = Object.keys(res).filter(it => res[it].nickname === nickname);
          if (searchResult.length > 0) {
            dispatch(authReject('Этот никнейм уже занят'));
            return;
          }
        } catch (e) {}
      }

      let url;
      if (isLogin) { // url для входа или регистрации
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMJ3x1gkQI1p8DvSw52UsqO4pHra56UE4';
      } else {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMJ3x1gkQI1p8DvSw52UsqO4pHra56UE4';
      }

      const data = await fetch(url, { // вход или регистрация
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());

      if (!isLogin && nickname && name && !data.error) { // запись в БД данных пользователя, если это регистрация
        const expirationDate = String(new Date(new Date().getTime() + data.expiresIn * 1000));
        await fetch(`https://react-blog-332e0.firebaseio.com/users/${data.localId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify({nickname, name, expirationDate}),
          headers: {'Content-Type': 'application/json'}
        });
      }

      const userInfo = await fetch(`https://react-blog-332e0.firebaseio.com/users/${data.localId}.json`).then(res => res.json()); // получаем данные пользователя

      let userData = userInfo;
      if (isLogin) {
        const newExpirationDate = String(new Date(new Date().getTime() + 3600 * 1000));
        userData = await fetch(`https://react-blog-332e0.firebaseio.com/users/${data.localId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify({...userInfo, expirationDate: newExpirationDate}),
          headers: {'Content-Type': 'application/json'}
        }).then((res) => res.json());
      }

      // Сократить код
      // Время - год
      // Выводить массив сообщений с ошибками
      // Меню
      // ЛК

      if (!data.error) {
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
      const userInfo = await fetch(`https://react-blog-332e0.firebaseio.com/users/${localId}.json`).then(res => res.json()); // получаем данные пользователя
      const expirationDate = userInfo.expirationDate;
      if (new Date(expirationDate) >= new Date()) {
        const newExpirationDate = String(new Date(new Date().getTime() + 3600 * 1000));
        const newUserInfo = await fetch(`https://react-blog-332e0.firebaseio.com/users/${localId}.json`,
          {
            method: 'PUT',
            body: JSON.stringify({...userInfo, expirationDate: newExpirationDate}),
            headers: {'Content-Type': 'application/json'}
          }).then((res) => res.json());
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