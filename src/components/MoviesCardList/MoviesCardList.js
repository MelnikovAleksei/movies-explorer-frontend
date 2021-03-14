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

  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [isShowButtonActive, setIsShowButtonActive] = React.useState(false);
  const [numberMoviesToRender, setNumberMoviesToRender] = React.useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = React.useState(0);

  const size = useCurrentSize();

  const countNumberMoviesToRender = () => {
    if (size.width >= 1024) {
      setNumberMoviesToRender(12);
      setNumberMoviesToAdd(3);
    } else if (size.width <= 1024 && size.width >= 768) {
      setNumberMoviesToRender(8);
      setNumberMoviesToAdd(2);
    } else if (size.width <= 767 && size.width >= 320) {
      setNumberMoviesToRender(5);
      setNumberMoviesToAdd(2);
    };
  };

  const handleShowMoreMoviesButtonClick = () => {
    setMoviesToRender(data.slice(0, moviesToRender.length + numberMoviesToAdd));
    if (moviesToRender.length >= data.length - numberMoviesToAdd) {
      setIsShowButtonActive(false);
    }
  }

  React.useEffect(() => {
    countNumberMoviesToRender();
  }, [size.width])

  React.useEffect(() => {
    if (locationPathname === '/movies') {
      setMoviesToRender(data.slice(0, numberMoviesToRender));
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
