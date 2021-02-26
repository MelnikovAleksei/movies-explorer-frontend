import React from 'react';

function Article({ styleSettigs, title, text }) {
  return (
    <article
      className={styleSettigs.article}
    >
      <h3
        className={styleSettigs.title}
      >
        {title}
      </h3>
      <p
        className={styleSettigs.text}
      >
        {text}
      </p>
    </article>
  )
}

export default Article;
