import React from 'react';

import FormTitle from '../FormTitle/FormTitle';

import InputField from '../InputField/InputField';

import ProfileUpdateError from '../ProfileUpdateError/ProfileUpdateError';

import SubmitButton from '../SubmitButton/SubmitButton';

import ProfileEditButton from '../ProfileEditButton/ProfileEditButton';

import ProfileSignoutButton from '../ProfileSignOutButton/ProfileSignOutButton';
import Preloader from '../Preloader/Preloader';

function ProfileForm({
  titleText,
  inputsData,
  onChange,
  values,
  errors,
  onSubmit,
  submitButtonSettings,
  formIsValid,
  profileUpdateErrorText,
  isEdited,
  onToggleEditableProfile,
  profileEditButtonSettings,
  profileSignoutButtonSettings,
  onSignOut,
  isLoadingData,
  isUpdateUserProfileError,
}) {

  const FORM_STYLE_SETTINGS = {
    form: 'profile-form',
    formTitle: 'profile-form__title',
    formInputFieldset: 'profile-form__input-fieldset',
    inputContainer: 'profile-form__input-container',
    container: 'profile-form__container',
    input: 'profile-form__input',
    label: 'profile-form__input-label',
    errorText: 'profile-form__input-error',
    submitButton: 'profile-form__submit-button',
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
        className={FORM_STYLE_SETTINGS.formTitle}
      >
        <FormTitle
          titleText={titleText}
        />
      </div>
      <fieldset
        className={FORM_STYLE_SETTINGS.formInputFieldset}
        disabled={!isEdited || isLoadingData}
      >
        {formInputsMarkup}
      </fieldset>
      <div
        className={FORM_STYLE_SETTINGS.container}
      >
        {isUpdateUserProfileError && (
          <ProfileUpdateError
            errorText={profileUpdateErrorText}
          />
        )}
        {isEdited ? (
          <SubmitButton
            disabled={!formIsValid}
            settings={submitButtonSettings}
            className={FORM_STYLE_SETTINGS.submitButton}
          />
        ) : (
          <>
            {isLoadingData && (
              <Preloader />
            )}
            <ProfileEditButton
              onClick={onToggleEditableProfile}
              title={profileEditButtonSettings.title}
            />
            <ProfileSignoutButton
              title={profileSignoutButtonSettings.title}
              onSignOut={onSignOut}
            />
          </>
        )}
      </div>
    </form>
  )
}

export default ProfileForm;
