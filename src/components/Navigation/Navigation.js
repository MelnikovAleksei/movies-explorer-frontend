import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = React.memo(() => {
  return (
    <nav
      className="navigation"
    >
      <NavLink
        className="navigation__link"
        activeClassName="navigation__link_active"
        to="/movies"
      >
        Фильмы
      </NavLink>
      <NavLink
        className="navigation__link"
        activeClassName="navigation__link_active"
        to="/saved-movies"
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  )
})

export default Navigation;
