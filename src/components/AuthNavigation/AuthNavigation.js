import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = React.memo((props) => {

  const AUTH_NAVIGATION_LINKS = [
    {
      id: 1,
      title: 'Регистрация',
      link: '/signup',
      className: 'auth-navigation__link',
    },
    {
      id: 2,
      title: 'Войти',
      link: '/signin',
      className: 'auth-navigation__link auth-navigation__link_bgcolor_green',
    },
  ];

  const authNavigationLinksMarkup = AUTH_NAVIGATION_LINKS.map((item) => (
    <li
      key={item.id}
      className="auth-navigation__nav-list-item"
    >
      <NavLink
        className={item.className}
        to={item.link}
      >
        {item.title}
      </NavLink>
    </li>

  ));

  return (
    <nav
      className="auth-navigation"
    >
      <ul
        className="auth-navigation__nav-list"
      >
        {authNavigationLinksMarkup}
      </ul>
    </nav>
  )
});

export default AuthNavigation;
