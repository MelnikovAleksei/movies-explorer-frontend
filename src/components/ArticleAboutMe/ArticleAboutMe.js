import React from 'react';

import Article from '../Article/Article';

function ArticleAboutMe(props) {

  const STYLE_SETTINGS = {
    article: 'article-about-me',
    articleTextContainer: 'article-about-me__text-container',
    title: 'article-about-me__title',
    subTitle: 'article-about-me__sub-title',
    list: 'article-about-me__list',
    listItem: 'article-about-me__list-item',
    listLink: 'article-about-me__list-link',
    imagesContainer: 'article-about-me__images-container',
    image: 'article-about-me__image',
    text: 'article-about-me__text',
  };

  return (
    <Article
      styleSettigs={STYLE_SETTINGS}
      title={props.title}
      subTitle={props.subTitle}
      text={props.text}
      links={props.links}
      images={props.images}
    />
  )
}

export default ArticleAboutMe;
