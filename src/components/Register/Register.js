import React from 'react';

import AuthHeader from '../AuthHeader/AuthHeader';

import AuthForm from '../AuthForm/AuthForm';

import useFormWithValidation from '../../hooks/useFormValidation';

function Register() {

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.table(values);
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
      minLength: 1,
      maxLength: 50,
      required: true,
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
    header: 'register__header',
    title: 'register__title',
  };

  const TITLE_TEXT = 'Добро пожаловать!';

  const AUTH_ERROR_TEXT = 'При регистрации пользователя произошла ошибка.';

  return (
    <main
      className={REGISTER_STYLE_SETTINGS.main}
    >
      <AuthHeader
        titleText={TITLE_TEXT}
      />
      <AuthForm
        inputsData={INPUTS_DATA}
        onChange={handleChange}
        values={values}
        errors={errors}
        onSubmit={handleSubmit}
        submitButtonSettings={SUBMIT_BUTTON_SETTINGS}
        formAuthQuestionSettings={FORM_AUTH_QUESTION_SETTINGS}
        routeLinkSettings={ROUTE_LINK_SETTINGS}
        formIsValid={isValid}
        authErrorText={AUTH_ERROR_TEXT}
      />
    </main>
  )
}

export default Register;
