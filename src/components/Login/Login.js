import React from 'react';

import LogoLink from '../LogoLink/LogoLink';

import FormTitle from '../FormTitle/FormTitle';

import AuthForm from '../AuthForm/AuthForm';

import useFormWithValidation from '../../hooks/useFormValidation';

function Login() {

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

  const REGISTER_FORM_STYLE_SETTINGS = {
    form: '',
    inputContainer: '',
    input: '',
    label: '',
    errorText: '',
    submitButton: '',
    signInLink: '',
  };

  const FORM_AUTH_QUESTION_SETTINGS = {
    questionText: 'Ещё не зарегистрированы?',
    linkTitle: 'Регистрация',
    linkPath: '/signup',
  }

  const TITLE_TEXT = 'Рады видеть!';

  const AUTH_ERROR_TEXT = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';

  return (
    <main>
      <div>
        <LogoLink />
        <FormTitle
          titleText={TITLE_TEXT}
        />
      </div>
      <AuthForm
        inputsData={INPUTS_DATA}
        formStyleSettings={REGISTER_FORM_STYLE_SETTINGS}
        onChange={handleChange}
        values={values}
        errors={errors}
        onSubmit={handleSubmit}
        submitButtonSettings={SUBMIT_BUTTON_SETTINGS}
        submitButtonClassName={REGISTER_FORM_STYLE_SETTINGS.submitButton}
        formAuthQuestionSettings={FORM_AUTH_QUESTION_SETTINGS}
        formIsValid={isValid}
        authErrorText={AUTH_ERROR_TEXT}
      />
    </main>
  )
}

export default Login;
