import React from 'react';

import FormTitle from '../FormTitle/FormTitle';

import LogoLink from '../LogoLink/LogoLink';

import InputField from '../InputField/InputField';

import SubmitButton from '../SubmitButton/SubmitButton';

import FormAuthQuestion from '../FormAuthQuestion/FormAuthQuestion';

import AuthError from '../AuthError/AuthError';

import RouteLink from '../RouteLink/RouteLink';
import Preloader from '../Preloader/Preloader';

function AuthForm({
  titleText,
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
  isAuthError,
  isLoadingData,
}) {

  const FORM_STYLE_SETTINGS = {
    form: 'auth-form',
    formTitle: 'auth-form__title',
    formInputFieldset: 'auth-form__input-fieldset',
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
        {item.regexp && errors[item.name] && item.customErrorMessage}
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
        className={FORM_STYLE_SETTINGS.formTitle}
      >
        <LogoLink />
        <FormTitle
          titleText={titleText}
        />
      </div>
      <fieldset
        className={FORM_STYLE_SETTINGS.formInputFieldset}
        disabled={isLoadingData}
      >
        {formInputsMarkup}
        {isAuthError && (
          <AuthError
            errorText={authErrorText}
          />
        )}

      </fieldset>
      <div
        className={FORM_STYLE_SETTINGS.buttonContainer}
      >
        <SubmitButton
          disabled={!formIsValid || isLoadingData}
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
      {isLoadingData && (<Preloader />)}
    </form>
  )
}

export default AuthForm;
