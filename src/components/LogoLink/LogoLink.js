import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoImage } from '../../images/Logo/logo.svg';

const LOGO_SETTINGS = {
  ARIA_LABEL: 'перейти на страницу о проекте',
  PATH: '/',
};

const LogoLink = React.memo(() => {
  return (
      <Link
        className="logo-link"
        to={LOGO_SETTINGS.PATH}
        aria-label={LOGO_SETTINGS.ARIA_LABEL}
      >
        <LogoImage />
      </Link>
  )
});

export default LogoLink;
