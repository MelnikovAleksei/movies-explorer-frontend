import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavigation = React.memo((props) => {
  return (
    <nav
      className="mobile-navigation"
    >
      <NavLink
        exact
        className="mobile-navigation__link"
        activeClassName="mobile-navigation__link_active"
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className="mobile-navigation__link"
        activeClassName="mobile-navigation__link_active"
        to="/movies"
      >
        Фильмы
      </NavLink>
      <NavLink
        className="mobile-navigation__link"
        activeClassName="mobile-navigation__link_active"
        to="/saved-movies"
      >
        Сохранённые фильмы
      </NavLink>
      {props.children}
    </nav>
  )
})

export default MobileNavigation;
