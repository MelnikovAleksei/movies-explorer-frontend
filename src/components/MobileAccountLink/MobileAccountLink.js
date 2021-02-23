import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AccountIcon } from '../../images/AccountLink/account-link-icon.svg'

const MOBILE_ACCOUNT_LINK_SETTINGS = {
  PATH: '/profile',
  TEXT: 'Аккаунт',
};

const MobileAccountLink = React.memo(() => {
  return (
    <Link
      className="mobile-account-link"
      to={MOBILE_ACCOUNT_LINK_SETTINGS.PATH}
    >
      {MOBILE_ACCOUNT_LINK_SETTINGS.TEXT}
      <AccountIcon
        className="mobile-account-link__icon"
      />
    </Link>
  )
});

export default MobileAccountLink;
