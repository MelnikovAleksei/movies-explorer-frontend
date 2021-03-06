import React from 'react';

import List from '../List/List';

function TechsList(props) {

  const TECHS_LIST_ITEMS = [
    {
      id: 1,
      text: 'HTML',
    },
    {
      id: 2,
      text: 'CSS',
    },
    {
      id: 3,
      text: 'JS',
    },
    {
      id: 4,
      text: 'React',
    },
    {
      id: 5,
      text: 'Git',
    },
    {
      id: 6,
      text: 'Express.js',
    },
    {
      id: 7,
      text: 'mongoDB',
    },
  ];

  const TECHS_LIST_STYLE_SETTINGS = {
    listClassName: 'techs-list',
    listItemClassName: 'techs-list__item',
  };

  return (
    <List
      items={TECHS_LIST_ITEMS}
      styleSettings={TECHS_LIST_STYLE_SETTINGS}
    />
  )
}

export default TechsList;
