import React from 'react';

import LogoLink from '../LogoLink/LogoLink';

import FormTitle from '../FormTitle/FormTitle';

function AuthHeader({ titleText }) {

  const AUTH_HEADER_STYLES = {
    header: 'auth-header',
  }

  return (
    <div
      className={AUTH_HEADER_STYLES.header}
    >
      <LogoLink />
      <FormTitle
        titleText={titleText}
      />
    </div>
  )
}

export default AuthHeader;
