import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import MovieCardImage from '../../images/MoviesCard/movie-card-image.png';

function MoviesCardList({
  locationPathname,
}) {

  const MOVIES_CARD_LIST_DATA = [
    {
      id: 1,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
    },
    {
      id: 2,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
    },
    {
      id: 3,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
    {
      id: 4,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
    {
      id: 5,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
    },
    {
      id: 6,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
    {
      id: 7,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
  ];

  const moviesCardsMarkup = MOVIES_CARD_LIST_DATA.map((item) => (
    <li
      key={item.id}
    >
      <MoviesCard
        data={item}
        locationPathname={locationPathname}
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
