const LOGIN_ERRORS_TEXTS = {
  BAD_REQUEST: 'Вы ввели неправильный логин или пароль.',
  TOKEN_BAD_REQUEST: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  TOKEN_UNAUTHORIZED: 'При авторизации произошла ошибка. Переданный токен некорректен.',
  INTERNAL_SERVER: '500 На сервере произошла ошибка.',
};

export default LOGIN_ERRORS_TEXTS;
