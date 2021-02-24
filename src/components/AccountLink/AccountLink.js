import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AccountIcon } from '../../images/AccountLink/account-link-icon.svg'


const AccountLink = React.memo((props) => {

  const ACCOUNT_LINKS = [
    {
      id: 1,
      link: '/profile',
      title: 'Аккаунт',
      className: 'account-link',
      children: (
        <AccountIcon
          className="account-link__icon"
        />
      ),
    },
  ];

  const acountLinksMarkup = ACCOUNT_LINKS.map((item) => (
    <Link
      key={item.id}
      className={item.className}
      to={item.link}
    >
      {item.title}
      {item.children}
    </Link>
  ));

  return (
    <>
      {acountLinksMarkup}
    </>
  )
});

export default AccountLink;
