import React from 'react';

import { useLocation } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';

import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

import MovieCardImage from '../../images/MoviesCard/movie-card-image.png';

function Movies() {

  let location = useLocation();

  const [isLoadingData, setIsLoadingData] = React.useState(true);

  const MOVIES_CARD_LIST_DATA = [
    {
      id: 1,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 2,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: false,
    },
    {
      id: 3,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: true,
    },
    {
      id: 4,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: false,
    },
    {
      id: 5,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: false,
    },
    {
      id: 6,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: false,
    },
    {
      id: 7,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: true,
    },
  ];

  React.useEffect(() => {
    const loadingDataTimeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1500);

    return () => {
      clearTimeout(loadingDataTimeout);
    };
  }, [])

  return (
    <main>
      <SearchForm />
      {isLoadingData ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            data={MOVIES_CARD_LIST_DATA}
            locationPathname={location.pathname}
          />
          <ShowMoreButton
            onClick={() => console.log('Show more')}
          />
        </>
      )}
    </main>
  )
}

export default Movies;
