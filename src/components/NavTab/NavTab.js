import React from 'react';

function NavTab() {

  const NAVIGATION_TABS = [
    {
      title: 'О проекте',
      link: '#about-project',
      id: 1,
      listItemClassName: 'navigation-tab__list-item',
      listLinkClassName: 'navigation-tab__list-link',
    },
    {
      title: 'Технологии',
      link: '#technologies',
      id: 2,
      listItemClassName: 'navigation-tab__list-item',
      listLinkClassName: 'navigation-tab__list-link',
    },
    {
      title: 'Студент',
      link: '#student',
      id: 3,
      listItemClassName: 'navigation-tab__list-item',
      listLinkClassName: 'navigation-tab__list-link',
    },
  ]

  const navTabsMarkup = NAVIGATION_TABS.map((item) => (
      <li
        className={item.listItemClassName}
        key={item.id}
      >
        <a
          className={item.listLinkClassName}
          href={item.link}
        >
          {item.title}
        </a>
      </li>
    ))

  return (
    <nav
      className="navigation-tab"
    >
      <ul
        className="navigation-tab__list"
      >
        {navTabsMarkup}
      </ul>
    </nav>
  )
}

export default NavTab;
