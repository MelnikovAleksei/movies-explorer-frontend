import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AccountIcon } from '../../images/AccountLink/account-link-icon.svg'

const ACCOUNT_LINK_SETTINGS = {
  PATH: '/profile',
  TEXT: 'Аккаунт',
};

const AccountLink = React.memo(() => {
  return (
    <Link
      className="account-link"
      to={ACCOUNT_LINK_SETTINGS.PATH}
    >
      {ACCOUNT_LINK_SETTINGS.TEXT}
      <AccountIcon
        className="account-link__icon"
      />
    </Link>
  )
});

export default AccountLink;
