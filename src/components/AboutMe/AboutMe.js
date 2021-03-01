import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

import ArticleAboutMe from '../ArticleAboutMe/ArticleAboutMe';

import Title from '../Title/Title';

import AboutMeList from '../AboutMeList/AboutMeList';

import AboutMePortrait from '../../images/AboutMe/about-me-portrait.jpg';

function AboutMe() {

  const ABOUT_ME_TITLE = 'Студент';

  const ABOUT_ME_ARTICLES_DATA = [
    {
      id: 1,
      title: 'Алексей',
      subTitle: 'Фронтенд-разработчик, 27 лет',
      text: 'Я работаю и живу в Москве. Люблю кино, документальную фотографию, путешествия и кулинарию. Во время своей учебы я реализовал 15 проектных работ на Reactjs, Nodejs (Expressjs), JavaScript, CSS, HTML. По каждой работе было проведено код-ревью командой Практикума. В работе для меня важно учиться новому и помогать в этом своим коллегам.',
      links: [
        {
          id: 1,
          title: 'Facebook',
          link: 'https://www.facebook.com/meln.aleksei',
        },
        {
          id: 2,
          title: 'Github',
          link: 'https://github.com/MelnikovAleksei',
        },
      ],
      images: [
        {
          id: 1,
          src: AboutMePortrait,
          alt: 'портрет студента Алексея',
        },
      ],
    },
  ];

  const ABOUT_ME_ARTICLE_STYLES = {
    article: 'about-me-article',
    articleHeader: 'about-me-article__header',
    articleItemsSection: 'about-me-article__items-section',
    articleSection: 'about-me-article__section',
  };

  const ABOUT_ME_ARTICLE_ID = 'student';

  const articlesMeMarkup = ABOUT_ME_ARTICLES_DATA.map((item) => (
    <ArticleAboutMe
      key={item.id}
      title={item.title}
      subTitle={item.subTitle}
      text={item.text}
      links={item.links}
      images={item.images}
    />
  ));

  return (
    <MainArticle
      id={ABOUT_ME_ARTICLE_ID}
      className={ABOUT_ME_ARTICLE_STYLES.article}
    >
      <MainArticle.Header
        className={ABOUT_ME_ARTICLE_STYLES.articleHeader}
      >
        <Title
          title={ABOUT_ME_TITLE}
        />
      </MainArticle.Header>
      <MainArticle.ArticlesSection
        className={ABOUT_ME_ARTICLE_STYLES.articleItemsSection}
      >
        {articlesMeMarkup}
      </MainArticle.ArticlesSection>
      <MainArticle.Section
        className={ABOUT_ME_ARTICLE_STYLES.articleSection}
      >
        <AboutMeList />
      </MainArticle.Section>
    </MainArticle>
  )
}

export default AboutMe;
