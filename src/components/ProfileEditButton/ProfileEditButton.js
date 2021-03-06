import React from 'react';

function ProfileEditButton({
  title,
  onClick,
}) {

  const STYLE_SETTINGS = {
    button: 'profile-edit-button',
  };

  return (
    <button
      className={STYLE_SETTINGS.button}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default ProfileEditButton;
