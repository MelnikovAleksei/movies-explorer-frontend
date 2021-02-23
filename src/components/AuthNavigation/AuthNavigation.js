import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = React.memo((props) => {
  return (
    <nav
      className="auth-navigation"
    >
      <NavLink
        className="auth-navigation__link"
        to="/signup"
        onClick={props.onSignup}
      >
        Регистрация
      </NavLink>
      <NavLink
        className="auth-navigation__link"
        to="/signin"
        onClick={props.onSignin}
      >
        Войти
      </NavLink>
    </nav>
  )
});

export default AuthNavigation;
