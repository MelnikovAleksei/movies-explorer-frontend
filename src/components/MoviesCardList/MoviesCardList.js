import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  locationPathname,
  data,
  onCreateFavoriteMovie,
}) {

  const moviesCardsMarkup = data.map((item) => (
    <li
      key={item.id}
    >
      <MoviesCard
        data={item}
        locationPathname={locationPathname}
        onCreateFavoriteMovie={onCreateFavoriteMovie}
      />
    </li>
  ))

  const MOVIES_CARD_LIST_STYLE_SETTINGS = {
    list: 'movies-card-list',
  };

  return (
    <ul
      className={MOVIES_CARD_LIST_STYLE_SETTINGS.list}
    >
      {moviesCardsMarkup}
    </ul>
  )
}

export default MoviesCardList;
