import React from 'react';
import Article from '../Article/Article';

function ArticleTech(props) {

  const STYLE_SETTINGS = {
    article: 'article-tech',
    title: 'article-tech__title',
    text: 'article-tech__text',
  };

  return (
    <Article
      styleSettigs={STYLE_SETTINGS}
      title={props.title}
      text={props.text}
    />
  )
}

export default ArticleTech;
