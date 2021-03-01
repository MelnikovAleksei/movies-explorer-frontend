import React from 'react';

function Article({
  styleSettigs,
  title,
  subTitle,
  text,
  links,
  images
}) {
  return (
    <article
      className={styleSettigs.article}
    >
      <div
        className={styleSettigs.articleTextContainer}
      >
        <h3
          className={styleSettigs.title}
        >
          {title}
        </h3>
        {subTitle && (
          <h4
            className={styleSettigs.subTitle}
          >
            {subTitle}
          </h4>
        )}
        <p
          className={styleSettigs.text}
        >
          {text}
        </p>
        {links && (
          <ul
            className={styleSettigs.list}
          >
            {links.map((item) => (
              <li
                key={item.id}
                className={styleSettigs.listItem}
              >
                <a
                  className={styleSettigs.listLink}
                  href={item.link}
                  target="_blank"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      {images && (
        <div
          className={styleSettigs.imagesContainer}
        >
          {images.map((item) => (
            <img
              key={item.id}
              className={styleSettigs.image}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      )}
    </article>
  )
}

export default Article;
