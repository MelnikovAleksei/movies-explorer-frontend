import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

import ArticleTech from '../ArticleTech/ArticleTech';

import Title from '../Title/Title';

import TechsList from '../TechsList/TechsList';

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

  const TECHS_ARTICLE_STYLES = {
    article: 'techs-article',
    articleHeader: 'techs-article__header',
    articleItemsSection: 'techs-article__items-section',
    articleSection: 'techs-article__section',
  };

  const TECHS_ARTICLE_ID = 'technologies';

  return (
    <MainArticle
      id={TECHS_ARTICLE_ID}
      className={TECHS_ARTICLE_STYLES.article}
    >
      <MainArticle.Header
        className={TECHS_ARTICLE_STYLES.articleHeader}
      >
        <Title
          title={TECHS_TITLE_TEXT}
        />
      </MainArticle.Header>
      <MainArticle.ArticlesSection
        className={TECHS_ARTICLE_STYLES.articleItemsSection}
      >
        {articlesMarkup}
      </MainArticle.ArticlesSection>
      <MainArticle.Section
        className={TECHS_ARTICLE_STYLES.articleSection}
      >
        <TechsList />
      </MainArticle.Section>
    </MainArticle>
  )
}

export default Techs;
