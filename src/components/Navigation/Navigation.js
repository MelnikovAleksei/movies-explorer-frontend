import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = React.memo(() => {

  const NAVIGATION_LINKS = [
    {
      id: 1,
      title: 'Фильмы',
      link: '/movies',
      classname: 'navigation__link',
      activeClassName: 'navigation__link_active',
      exact: false,
    },
    {
      id: 2,
      title: 'Сохранённые фильмы',
      link: '/saved-movies',
      classname: 'navigation__link',
      activeClassName: 'navigation__link_active',
      exact: false,
    },
  ];

  const naigationLinksMarkup = NAVIGATION_LINKS.map((item) => (
    <NavLink
      key={item.id}
      className={item.classname}
      activeClassName={item.activeClassName}
      to={item.link}
      exact={item.exact}
    >
      {item.title}
    </NavLink>
  ));

  return (
    <nav
      className="navigation"
    >
      {naigationLinksMarkup}
    </nav>
  )
})

export default Navigation;
