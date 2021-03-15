import React from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProfileForm from '../ProfileForm/ProfileForm';

import useFormWithValidation from '../../hooks/useFormValidation';

import UPDATE_PROFILE_ERRORS_TEXTS from '../../constants/update-profile-errors-texts';

function Profile({
  onSignOut,
  onUpdateCurrentUser,
  isLoadingUpdateCurrentUser,
  updUserResStatus,
}) {

  const currentUserData = React.useContext(CurrentUserContext);

  const [isUpdateUserProfileError, setIsUpdateUserProfileError] = React.useState(false);
  const [updateUserProfileErrorText, setUpdateUserProfileErrorText] = React.useState('');
  const [formIsValid, setFormIsValid] = React.useState(false);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateCurrentUser(values)
    handleToggleEditableProfile();
    resetForm(currentUserData);
  };

  const [isEdited, setIsEdited] = React.useState(false);

  const handleToggleEditableProfile = () => {
    setIsEdited(!isEdited);
    setIsUpdateUserProfileError(false);
    setUpdateUserProfileErrorText('');
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
      required: true,
      regexp: '[a-zA-Z -]{2,30}',
      customErrorMessage: 'Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -',
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

  React.useEffect(() => {
    if (currentUserData) {
      resetForm(currentUserData);
    }
  }, [currentUserData, resetForm])

  React.useEffect(() => {
    setFormIsValid(isValid);
  }, [isValid, values])

  React.useEffect(() => {
    if (currentUserData.name === values.name && currentUserData.email === values.email) {
      setFormIsValid(false);
    }
  }, [currentUserData, values])

  const errorHandler = () => {
    if (updUserResStatus) {
      switch (updUserResStatus) {
        case 400:
        case 404:
          setIsUpdateUserProfileError(true);
          setUpdateUserProfileErrorText(UPDATE_PROFILE_ERRORS_TEXTS.BAD_REQUEST);
          break;
        case 500:
          setIsUpdateUserProfileError(true);
          setUpdateUserProfileErrorText(UPDATE_PROFILE_ERRORS_TEXTS.INTERNAL_SERVER_ERROR)
          break;
        case 200:
          setIsUpdateUserProfileError(false);
          setUpdateUserProfileErrorText('');
          break;
        default:
          setIsUpdateUserProfileError(true);
          setUpdateUserProfileErrorText(UPDATE_PROFILE_ERRORS_TEXTS.BASE_ERROR);
          break;
      };
    };
  };

  React.useEffect(() => {
    errorHandler();
  });

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
        formIsValid={formIsValid}
        isEdited={isEdited}
        onToggleEditableProfile={handleToggleEditableProfile}
        profileEditButtonSettings={PROFILE_EDIT_BUTTON_SETTINGS}
        profileSignoutButtonSettings={PROFILE_SIGNOUT_BUTTON_SETTINGS}
        profileUpdateErrorText={updateUserProfileErrorText}
        isUpdateUserProfileError={isUpdateUserProfileError}
        onSignOut={onSignOut}
        isLoadingData={isLoadingUpdateCurrentUser}
      />
    </main>
  )
}

export default Profile;
