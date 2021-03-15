import React from 'react';

function Notification({ text }) {

  const STYLE_SETTINGS = {
    NOTIFICATION: 'notification',
  };

  return (
    <p
      className={STYLE_SETTINGS.NOTIFICATION}
      aria-live="polite"
    >
      {text}
    </p>
  )
}

export default Notification;
