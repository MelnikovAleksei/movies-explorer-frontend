import React from 'react';

function ArticleAbout(props) {
  return (
    <article
      className="article-about"
    >
      <h3
        className="article-about__title"
      >
        {props.title}
      </h3>
      <p
        className="article-about__text"
      >
        {props.text}
      </p>
    </article>
  )
}

export default ArticleAbout;
