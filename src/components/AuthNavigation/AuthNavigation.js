import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = React.memo((props) => {

  const AUTH_NAVIGATION_LINKS = [
    {
      id: 1,
      title: 'Регистрация',
      link: '/signup',
      className: 'auth-navigation__link',
      onClick: () => {
        props.onSignup();
      },
    },
    {
      id: 2,
      title: 'Войти',
      link: '/signin',
      className: 'auth-navigation__link auth-navigation__link_bgcolor_green',
      onClick: () => {
        props.onSignin();
      },
    },
  ];

  const authNavigationLinksMarkup = AUTH_NAVIGATION_LINKS.map((item) => (
    <NavLink
      key={item.id}
      className={item.className}
      to={item.link}
      onClick={item.onClick}
    >
      {item.title}
    </NavLink>
  ));

  return (
    <nav
      className="auth-navigation"
    >
      {authNavigationLinksMarkup}
    </nav>
  )
});

export default AuthNavigation;
