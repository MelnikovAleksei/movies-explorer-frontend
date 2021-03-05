import React from 'react';

import InputField from '../InputField/InputField';

import SubmitButton from '../SubmitButton/SubmitButton';

import FormAuthQuestion from '../FormAuthQuestion/FormAuthQuestion';

import AuthError from '../AuthError/AuthError';

function AuthForm({
  inputsData,
  formStyleSettings,
  onChange,
  values,
  errors,
  onSubmit,
  submitButtonSettings,
  formAuthQuestionSettings,
  formIsValid,
  submitButtonClassName,
  authErrorText,
}) {

  const formInputsMarkup = inputsData.map((item) => (
    <div
      key={item.key}
      className={formStyleSettings.inputContainer}
    >
      <label
        className={formStyleSettings.label}
      >
        {item.label}
        <InputField
          className={formStyleSettings.input}
          settings={item}
          onChange={onChange}
          value={values[item.name]}
        />
      </label>
      <span
        className={formStyleSettings.errorText}
        aria-live="polite"
      >
        {errors[item.name]}
      </span>
    </div>
  ));

  return (
    <form
      onSubmit={onSubmit}
      className={formStyleSettings.form}
      noValidate
    >
      {formInputsMarkup}
      <AuthError
        errorText={authErrorText}
      />
      <SubmitButton
        disabled={!formIsValid}
        settings={submitButtonSettings}
        className={submitButtonClassName}
      />
      <FormAuthQuestion
        settings={formAuthQuestionSettings}
      />
    </form>
  )
}

export default AuthForm;
