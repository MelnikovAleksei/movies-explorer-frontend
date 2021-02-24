import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AccountIcon } from '../../images/AccountLink/account-link-icon.svg'

const MobileAccountLink = React.memo((props) => {

  const MOBILE_ACCOUNT_LINKS = [
    {
      id: 1,
      link: '/profile',
      title: 'Аккаунт',
      className: 'mobile-account-link',
      onClick: () => {
        props.onModalClose();
      },
      children: (
        <AccountIcon
          className="mobile-account-link__icon"
        />
      ),
    },
  ];

  const mobileAcountLinksMarkup = MOBILE_ACCOUNT_LINKS.map((item) => (
    <Link
      key={item.id}
      className={item.className}
      to={item.link}
      onClick={item.onClick}
    >
      {item.title}
      {item.children}
    </Link>
  ));

  return (
    <>
      {mobileAcountLinksMarkup}
    </>
  )
});

export default MobileAccountLink;
