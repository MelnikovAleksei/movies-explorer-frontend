import React from 'react';

function ListLinks({ items, listTitle, styleSettings }) {
  const listLinksItemsMarkup = items.map((item) => (
    <li
      key={item.id}
      className={styleSettings.listItem}
    >
      <a
        className={styleSettings.listLink}
        src={item.src}
        target='_blank'
      >
        {item.text}
        <span
          className={styleSettings.listLinkSpan}
        >
          &#8599;
        </span>
      </a>
    </li>
  ));

  return (
    <>
      {listTitle && (
        <h5
          className={styleSettings.listTitle}
        >
          {listTitle}
        </h5>
      )}
      <ul
        className={styleSettings.list}
      >
        {listLinksItemsMarkup}
      </ul>
    </>

  )
}

export default ListLinks;
