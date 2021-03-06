import React from 'react';

import FooterList from '../FooterList/FooterList';

function Footer() {

  const FOOTER_TITLE = 'Учебный проект Яндекс.Практикум х BeatFilm.';

  const COPYRIGHT_TEXT = '© 2020';

  const FOOTER_STYLE_SETTINGS = {
    footer: 'footer',
    footerTitle: 'footer__title',
    footerContainer: 'footer__container',
    footerText: 'footer__text',
  };

  return (
    <footer
      className={FOOTER_STYLE_SETTINGS.footer}
    >
      <h2
        className={FOOTER_STYLE_SETTINGS.footerTitle}
      >
        {FOOTER_TITLE}
      </h2>
      <div
        className={FOOTER_STYLE_SETTINGS.footerContainer}
      >
        <p
          className={FOOTER_STYLE_SETTINGS.footerText}
        >
          {COPYRIGHT_TEXT}
        </p>
        <FooterList />
      </div>

    </footer>
  )
}

export default Footer;
