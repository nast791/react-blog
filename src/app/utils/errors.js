export const NICKNAME_ERROR = 'Этот никнейм уже занят';
export const SERVER_ERROR = 'Не удалось загрузить данные на сервер';

export function serverErrors(message) {
  switch (message) {
    case 'EMAIL_NOT_FOUND':
      return ['Неверный e-mail', 1];
    case 'INVALID_PASSWORD':
      return ['Неверный пароль', 2];
    case 'TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later.':
      return ['Превышен лимит попыток входа. Попробуйте снова позже.', 3];
    case 'EMAIL_EXISTS':
      return ['Указанный e-mail уже зарегистрирован', 4];
  }
}