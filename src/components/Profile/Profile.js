import React from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProfileForm from '../ProfileForm/ProfileForm';

import useFormWithValidation from '../../hooks/useFormValidation';

function Profile({
  onSignOut,
}) {

  const currentUserData = React.useContext(CurrentUserContext);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({currentUserData});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.table(values);
    handleToggleEditableProfile();
    resetForm(values);
  };

  const [isEdited, setIsEdited] = React.useState(false);

  const handleToggleEditableProfile = () => {
    setIsEdited(!isEdited);
  };

  const SUBMIT_BUTTON_SETTINGS = {
    type: 'submit',
    title: 'Сохранить',
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
      type: 'email',
      id: 'email',
      label: 'Почта',
      placeholder: 'Почта',
      name: 'email',
      required: true,
    },
  ];

  const TITLE_TEXT = `Привет, ${currentUserData.name || ''}!`;

  const PROFILE_STYLE_SETTINGS = {
    main: 'profile',
  };

  const PROFILE_EDIT_BUTTON_SETTINGS = {
    title: 'Редактировать',
  };

  const PROFILE_SIGNOUT_BUTTON_SETTINGS = {
    title: 'Выйти из аккаунта',
  };

  const PROFILE_UPDATE_ERROR_TEXT = 'При обновлении профиля произошла ошибка.';

  const AUTH_ERROR_TEXT = 'При обновлении профиля произошла ошибка.';

  React.useEffect(() => {
    if (currentUserData) {
      resetForm(currentUserData);
    }
  }, [currentUserData, resetForm])

  return (
    <main
      className={PROFILE_STYLE_SETTINGS.main}
    >
      <ProfileForm
        titleText={TITLE_TEXT}
        inputsData={INPUTS_DATA}
        onChange={handleChange}
        values={values}
        errors={errors}
        onSubmit={handleSubmit}
        submitButtonSettings={SUBMIT_BUTTON_SETTINGS}
        formIsValid={isValid}
        authErrorText={AUTH_ERROR_TEXT}
        isEdited={isEdited}
        onToggleEditableProfile={handleToggleEditableProfile}
        profileEditButtonSettings={PROFILE_EDIT_BUTTON_SETTINGS}
        profileSignoutButtonSettings={PROFILE_SIGNOUT_BUTTON_SETTINGS}
        profileUpdateErrorText={PROFILE_UPDATE_ERROR_TEXT}
        onSignOut={onSignOut}
      />
    </main>
  )
}

export default Profile;
