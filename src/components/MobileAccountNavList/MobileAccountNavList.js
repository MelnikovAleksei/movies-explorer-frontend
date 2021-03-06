import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AccountIcon } from '../../images/AccountLink/account-link-icon.svg'

const MobileAccountNavList = React.memo((props) => {

  const MOBILE_ACCOUNT_LINKS = [
    {
      id: 1,
      link: '/profile',
      title: 'Аккаунт',
      className: 'mobile-account-nav__link',
      children: (
        <AccountIcon
          className="mobile-account-nav__link-icon"
        />
      ),
    },
  ];

  const mobileAcountLinksMarkup = MOBILE_ACCOUNT_LINKS.map((item) => (
    <li
      key={item.id}
      className="mobile-account-nav__list-item"
    >
      <Link
        key={item.id}
        className={item.className}
        to={item.link}
        onClick={props.onModalClose}
      >
        {item.title}
        {item.children}
      </Link>
    </li>


  ));

  return (
    <nav
      className="mobile-account-nav"
    >
      <ul
        className="mobile-account-nav__list"
      >
        {mobileAcountLinksMarkup}
      </ul>
    </nav>
  )
});

export default MobileAccountNavList;
