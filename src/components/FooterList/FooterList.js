import React from 'react';
import ListLinks from '../ListLinks/ListLinks';

function FooterList() {

  const FOOTER_LINKS = [
    {
      id: 1,
      text: 'Яндекс.Практикум',
      href: 'https://praktikum.yandex.ru/',
    },
    {
      id: 2,
      text: 'Github',
      href: 'https://github.com/MelnikovAleksei',
    },
    {
      id: 3,
      text: 'Facebook',
      href: 'https://www.facebook.com/meln.aleksei/',
    },
  ];

  const FOOTER_STYLE_SETTINGS = {
    list: 'footer-list',
    listList: 'footer-list__list',
    listItem: 'footer-list__item',
    listLink: 'footer-list__link',
    listLinkSpan: 'footer-list__link-span',
  }

  return (
    <ListLinks
      items={FOOTER_LINKS}
      styleSettings={FOOTER_STYLE_SETTINGS}
    />
  )
}

export default FooterList;
