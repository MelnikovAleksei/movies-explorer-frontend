import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

import useCurrentSize from '../../hooks/useCurrentSize';

function MoviesCardList({
  locationPathname,
  data,
  onSaveMovie,
  onDeleteSavedMovie,
}) {

  const SIZE_WIDTH_LARGE = 1024;
  const SIZE_WIDTH_MEDIUM = 768;
  const SIZE_WIDTH_SMALL = 320;

  const NUMBER_MOVIES_TO_RENDER_LARGE = 12;
  const NUMBER_MOVIES_TO_RENDER_MEDIUM = 8;
  const NUMBER_MOVIES_TO_RENDER_SMALL = 5;

  const NUMBER_MOVIES_TO_ADD_LARGE = 3;
  const NUMBER_MOVIES_TO_ADD_MEDIUM = 2;

  const ZERO_NUMBER = 0;

  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [isShowButtonActive, setIsShowButtonActive] = React.useState(false);
  const [numberMoviesToRender, setNumberMoviesToRender] = React.useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = React.useState(0);

  const size = useCurrentSize();

  const countNumberMoviesToRender = () => {
    if (size.width >= SIZE_WIDTH_LARGE) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_LARGE);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_LARGE);
    } else if (size.width < SIZE_WIDTH_LARGE && size.width >= SIZE_WIDTH_MEDIUM) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_MEDIUM);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    } else if (size.width < SIZE_WIDTH_MEDIUM && size.width >= SIZE_WIDTH_SMALL) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_SMALL);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    };
  };

  const handleShowMoreMoviesButtonClick = () => {
    setMoviesToRender(data.slice(ZERO_NUMBER, moviesToRender.length + numberMoviesToAdd));
    if (moviesToRender.length >= data.length - numberMoviesToAdd) {
      setIsShowButtonActive(false);
    }
  }

  React.useEffect(() => {
    countNumberMoviesToRender();
  }, [size.width])

  React.useEffect(() => {
    if (locationPathname === '/movies') {
      setMoviesToRender(data.slice(ZERO_NUMBER, numberMoviesToRender));
      if (data.length <= numberMoviesToRender) {
        setIsShowButtonActive(false);
      } else {
        setIsShowButtonActive(true);
      };
    } else if (locationPathname === '/saved-movies') {
      setMoviesToRender(data);
      setIsShowButtonActive(false);
    }
  }, [data, numberMoviesToRender])

  const moviesCardsMarkup = moviesToRender.map((item) => (
    <li
      key={item.id || item._id}
    >
      <MoviesCard
        data={item}
        locationPathname={locationPathname}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </li>
  ))

  const MOVIES_CARD_LIST_STYLE_SETTINGS = {
    list: 'movies-card-list',
  };

  return (
    <>
      <ul
        className={MOVIES_CARD_LIST_STYLE_SETTINGS.list}
      >
        {moviesCardsMarkup}
      </ul>
      {locationPathname === '/movies' && isShowButtonActive ? (
        <ShowMoreButton
          onClick={handleShowMoreMoviesButtonClick}
        />
      ) : null}
    </>
  )
}

export default MoviesCardList;
