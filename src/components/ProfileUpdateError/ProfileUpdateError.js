import React from 'react';

function ProfileUpdateError({ errorText }) {

  const STYLE_SETTINGS = {
    text: 'profile-update-error',
  };

  return (
    <span
      className={STYLE_SETTINGS.text}
      aria-live="polite"
    >
      {errorText}
    </span>
  )
}

export default ProfileUpdateError;
