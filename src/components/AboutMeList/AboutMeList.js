import React from 'react';

import ListLinks from '../ListLinks/ListLinks';

function AboutMeList() {

  const ABOUT_ME_LIST_ITEMS = [
    {
      id: 1,
      text: 'Статичный сайт',
      src: 'https://github.com/MelnikovAleksei/how-to-learn',
    },
    {
      id: 2,
      text: 'Адаптивный сайт',
      src: 'https://github.com/MelnikovAleksei/russian-travel',
    },
    {
      id: 3,
      text: 'Одностраничное приложение',
      src: 'https://github.com/MelnikovAleksei/mesto-react-express',
    },
  ];

  const ABOUT_ME_LIST_STYLE_SETTINGS = {
    list: 'about-me-list',
    listItem: 'about-me-list__item',
    listLink: 'about-me-list__link',
    listLinkSpan: 'about-me-list__link-span',
  };

  return (
    <ListLinks
      items={ABOUT_ME_LIST_ITEMS}
      styleSettings={ABOUT_ME_LIST_STYLE_SETTINGS}
    />
  )
}

export default AboutMeList;
