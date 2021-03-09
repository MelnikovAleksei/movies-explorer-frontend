import React from 'react';

function ListLinks({ items, listTitle, styleSettings }) {
  const listLinksItemsMarkup = items.map((item) => (
    <li
      key={item.id}
      className={styleSettings.listItem}
    >
      <a
        className={styleSettings.listLink}
        href={item.href}
        target='_blank'
      >
        {item.text}
        {item.iconSpan && (
          <span
            className={styleSettings.listLinkSpan}
          >
            {item.iconSpan}
          </span>
        )}

      </a>
    </li>
  ));

  return (
    <div
      className={styleSettings.list}
    >
      {listTitle && (
        <h5
          className={styleSettings.listTitle}
        >
          {listTitle}
        </h5>
      )}
      <ul
        className={styleSettings.listList}
      >
        {listLinksItemsMarkup}
      </ul>
    </div>

  )
}

export default ListLinks;
