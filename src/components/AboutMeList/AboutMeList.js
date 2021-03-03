import React from 'react';

import ListLinks from '../ListLinks/ListLinks';

function AboutMeList() {

  const ABOUT_ME_LIST_TITLE = 'Портфолио';

  const ABOUT_ME_LIST_ITEMS = [
    {
      id: 1,
      text: 'Статичный сайт',
      href: 'https://github.com/MelnikovAleksei/how-to-learn',
    },
    {
      id: 2,
      text: 'Адаптивный сайт',
      href: 'https://github.com/MelnikovAleksei/russian-travel',
    },
    {
      id: 3,
      text: 'Одностраничное приложение',
      href: 'https://github.com/MelnikovAleksei/mesto-react-express',
    },
  ];

  const ABOUT_ME_LIST_STYLE_SETTINGS = {
    list: 'about-me-list',
    listTitle: 'about-me-list__title',
    listItem: 'about-me-list__item',
    listLink: 'about-me-list__link',
    listLinkSpan: 'about-me-list__link-span',
  };

  return (
    <ListLinks
      items={ABOUT_ME_LIST_ITEMS}
      listTitle={ABOUT_ME_LIST_TITLE}
      styleSettings={ABOUT_ME_LIST_STYLE_SETTINGS}
    />
  )
}

export default AboutMeList;
