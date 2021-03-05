import React from 'react';

import InputField from '../InputField/InputField';

import SubmitButton from '../SubmitButton/SubmitButton';

import FormAuthQuestion from '../FormAuthQuestion/FormAuthQuestion';

import AuthError from '../AuthError/AuthError';

import RouteLink from '../RouteLink/RouteLink';

function AuthForm({
  inputsData,
  onChange,
  values,
  errors,
  onSubmit,
  submitButtonSettings,
  formAuthQuestionSettings,
  routeLinkSettings,
  formIsValid,
  authErrorText,
}) {

  const FORM_STYLE_SETTINGS = {
    form: 'auth-form',
    formInputFieldsContainer: 'auth-form__input-fields-container',
    inputContainer: 'auth-form__input-container',
    buttonContainer: 'auth-form__button-container',
    input: 'auth-form__input',
    label: 'auth-form__input-label',
    errorText: 'auth-form__input-error',
    submitButton: 'auth-form__submit-button',
  };

  const formInputsMarkup = inputsData.map((item) => (
    <div
      key={item.key}
      className={FORM_STYLE_SETTINGS.inputContainer}
    >
      <label
        className={FORM_STYLE_SETTINGS.label}
      >
        {item.label}
        <InputField
          className={FORM_STYLE_SETTINGS.input}
          settings={item}
          onChange={onChange}
          value={values[item.name]}
        />
      </label>
      <span
        className={FORM_STYLE_SETTINGS.errorText}
        aria-live="polite"
      >
        {errors[item.name]}
      </span>
    </div>
  ));

  return (
    <form
      onSubmit={onSubmit}
      className={FORM_STYLE_SETTINGS.form}
      noValidate
    >
      <div
        className={FORM_STYLE_SETTINGS.formInputFieldsContainer}
      >
        {formInputsMarkup}
        <AuthError
          errorText={authErrorText}
        />
      </div>
      <div
        className={FORM_STYLE_SETTINGS.buttonContainer}
      >
        <SubmitButton
          disabled={!formIsValid}
          settings={submitButtonSettings}
          className={FORM_STYLE_SETTINGS.submitButton}
        />
        <FormAuthQuestion
          settings={formAuthQuestionSettings}
        >
          <RouteLink
            linkPath={routeLinkSettings.linkPath}
            linkTitle={routeLinkSettings.linkTitle}
          />
        </FormAuthQuestion>
      </div>

    </form>
  )
}

export default AuthForm;
