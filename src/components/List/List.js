import React from 'react';

function List(props) {
  const listItemsMarkup = props.items.map((item) => (
    <li
      key={item.id}
      className={props.styleSettings.listItemClassName}
    >
      {item.text}
    </li>
  ));

  return (
    <ul
      className={props.styleSettings.listClassName}
    >
      {listItemsMarkup}
    </ul>
  )
}

export default List;
