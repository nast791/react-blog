export const requiredInput = input => input ? null : 'Заполните поле';
export const matchInput = (input, allInputs) => input === allInputs.setPassword ? null : 'Пароль не совпадает';
export const email = value => value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value) ? null : 'Некорректный e-mail';