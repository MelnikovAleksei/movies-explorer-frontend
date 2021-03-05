import React from 'react';

function AuthError({ errorText }) {

  const AUTH_ERROR_STYLES = {
    text: 'auth-error',
  };

  return (
    <p
      className={AUTH_ERROR_STYLES.text}
    >
      {errorText}
    </p>
  )
}

export default AuthError;
