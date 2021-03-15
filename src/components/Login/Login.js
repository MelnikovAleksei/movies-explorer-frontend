import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import useFormWithValidation from '../../hooks/useFormValidation';

import LOGIN_ERRORS_TEXTS from '../../constants/login-errors-texts';

function Login({
  onSignin,
  authResStatus,
  tokenResStatus,
  isLoadingSignin,
 }) {

  const [isAuthError, setIsAuthError] = React.useState(false);
  const [authErrorText, setAuthErrorText] = React.useState(null);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignin(values);
  };

  const INPUTS_DATA = [
    {
      key: 1,
      inputClassName: '',
      labelClassName: '',
      type: 'email',
      id: 'email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
    },
    {
      key: 2,
      inputClassName: '',
      labelClassName: '',
      type: 'password',
      id: 'password',
      label: 'Пароль',
      placeholder: 'Пароль',
      name: 'password',
      minLength: 8,
      required: true,
    },
  ];

  const SUBMIT_BUTTON_SETTINGS = {
    type: 'submit',
    title: 'Войти',
  };

  const FORM_AUTH_QUESTION_SETTINGS = {
    questionText: 'Ещё не зарегистрированы? ',
  };

  const ROUTE_LINK_SETTINGS = {
    linkTitle: 'Регистрация',
    linkPath: '/signup',
  };

  const TITLE_TEXT = 'Рады видеть!';

  const LOGIN_STYLE_SETTINGS = {
    main: 'login',
    header: 'register__header',
    title: 'register__title',
  };

  const errorHandler = () => {
    if (tokenResStatus) {
      switch (tokenResStatus) {
        case 400:
          setIsAuthError(true);
          setAuthErrorText(LOGIN_ERRORS_TEXTS.TOKEN_BAD_REQUEST);
          break;
        case 401:
          setIsAuthError(true);
          setAuthErrorText(LOGIN_ERRORS_TEXTS.TOKEN_UNAUTHORIZED)
          break;
        case 500:
          setIsAuthError(true);
          setAuthErrorText(LOGIN_ERRORS_TEXTS.INTERNAL_SERVER);
          break;
        case 200:
          setIsAuthError(false);
          setAuthErrorText('');
          resetForm();
          break;
        default:
          setIsAuthError(true);
          setAuthErrorText(LOGIN_ERRORS_TEXTS.TOKEN_BAD_REQUEST);
          break;
      };
    }

    if (authResStatus) {
      switch (authResStatus) {
        case 400:
        case 401:
          setIsAuthError(true);
          setAuthErrorText(LOGIN_ERRORS_TEXTS.BAD_REQUEST);
          break;
        case 500:
          setIsAuthError(true);
          setAuthErrorText(LOGIN_ERRORS_TEXTS.INTERNAL_SERVER);
          break;
        case 200:
          setIsAuthError(false);
          setAuthErrorText('');
          resetForm();
          break;
        default:
          setIsAuthError(true);
          setAuthErrorText(LOGIN_ERRORS_TEXTS.BAD_REQUEST);
          break;
      };
    };
  };

  React.useEffect(() => {
    errorHandler();
  }, [authResStatus, tokenResStatus]);

  return (
    <main
      className={LOGIN_STYLE_SETTINGS.main}
    >
      <AuthForm
        titleText={TITLE_TEXT}
        inputsData={INPUTS_DATA}
        onChange={handleChange}
        values={values}
        errors={errors}
        onSubmit={handleSubmit}
        submitButtonSettings={SUBMIT_BUTTON_SETTINGS}
        formAuthQuestionSettings={FORM_AUTH_QUESTION_SETTINGS}
        routeLinkSettings={ROUTE_LINK_SETTINGS}
        formIsValid={isValid}
        authErrorText={authErrorText}
        isAuthError={isAuthError}
        isLoadingData={isLoadingSignin}
      />
    </main>
  )
}

export default Login;
