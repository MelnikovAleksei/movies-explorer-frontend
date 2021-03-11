import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import useFormWithValidation from '../../hooks/useFormValidation';

import REGISTRATION_ERRORS_TEXTS from '../../constants/registration-errors-texts';

function Register({ onSignup, registrationResStatus, isLoadingSignup }) {

  const [registrationErrorText, setRegistrationErrorText] = React.useState(null);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignup(values);
    setRegistrationErrorText(null);
    resetForm();
  };

  const INPUTS_DATA = [
    {
      key: 1,
      type: 'text',
      id: 'name',
      label: 'Имя',
      placeholder: 'Имя',
      name: 'name',
      required: true,
      regexp: '[a-zA-Z -]{1,50}',
      customErrorMessage: 'Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -',
    },
    {
      key: 2,
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
      key: 3,
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
    title: 'Зарегистрироваться',
  };

  const FORM_AUTH_QUESTION_SETTINGS = {
    questionText: 'Уже зарегистрированы? ',
  };

  const ROUTE_LINK_SETTINGS = {
    linkTitle: 'Войти',
    linkPath: '/signin',
  };

  const REGISTER_STYLE_SETTINGS = {
    main: 'register',
  };

  const TITLE_TEXT = 'Добро пожаловать!';

  const errorHandler = () => {
    if (registrationResStatus) {
      switch (registrationResStatus) {
        case 409:
          setRegistrationErrorText(REGISTRATION_ERRORS_TEXTS.CONFLICT_EMAIL);
          break;
        case 400:
          setRegistrationErrorText(REGISTRATION_ERRORS_TEXTS.BAD_REQUEST)
        default:
          break;
      };
    };
  };

  React.useEffect(() => {
    errorHandler();
  }, [registrationResStatus]);

  return (
    <main
      className={REGISTER_STYLE_SETTINGS.main}
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
        authErrorText={registrationErrorText}
        isLoadingData={isLoadingSignup}
      />
    </main>
  )
}

export default Register;
