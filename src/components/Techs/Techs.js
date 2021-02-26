import React from 'react';
import ArticleTech from '../ArticleTech/ArticleTech';

import Title from '../Title/Title';

function Techs() {

  const TECHS_TITLE_TEXT = 'Технологии';

  const TECHS_ARTICLES_DATA = [
    {
      id: 1,
      title: '7 технологий',
      text: 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.',
    },
  ];

  const articlesMarkup = TECHS_ARTICLES_DATA.map((item) => (
    <ArticleTech
      key={item.id}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <article
      className="techs-article"
    >
      <header
        className="techs-article__header"
      >
        <Title
          title={TECHS_TITLE_TEXT}
        />
      </header>
      <section
        className="techs-article__items-section"
      >
        {articlesMarkup}
      </section>
    </article>
  )
}

export default Techs;
