import React from 'react';

function MainArticle(props) {
  return (
    <article
      id={props.id}
      className={props.className}
    >
      {props.children}
    </article>
  )
};

MainArticle.Header = function MainArticleHeader(props) {
  return (
    <header
      className={props.className}
    >
      {props.children}
    </header>
  )
};

MainArticle.ArticlesSection = function MainArticleArticlesSection(props) {
  return (
    <section
      className={props.className}
    >
      {props.children}
    </section>
  )
}

MainArticle.Section = function MainArticleSection(props) {
  return (
    <section
      className={props.className}
    >
      {props.children}
    </section>
  )
}

export default MainArticle;
