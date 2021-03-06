import React from 'react';

function ProfileSignoutButton({
  onSignOut,
  title,
}) {

  const STYLE_SETTINGS = {
    button: 'profile-signout-button',
  };

  return (
    <button
      className={STYLE_SETTINGS.button}
      onClick={onSignOut}
    >
      {title}
    </button>
  )
}

export default ProfileSignoutButton;
