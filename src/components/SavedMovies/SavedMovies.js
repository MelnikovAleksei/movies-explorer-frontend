import React from 'react';

import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Notification from '../Notification/Notification';

import MOVIES_ERRORS_TEXTS from '../../constants/movies-errors-texts';

import NO_MOVIES_FOUND_TEXT from '../../constants/no-movies-found-text';

function SavedMovies({
  onDeleteSavedMovie,
  savedMovies,
  isSavedMoviesEmpty,
  isLoadingData,
  handleSearchSavedMoviesData,
  getSavedMoviesResStatus,
  isNoSavedMoviesFound,
}) {

  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  const handleSubmit = (data) => {
    handleSearchSavedMoviesData(data);
  }

  let location = useLocation();

  const handleErrors = () => {
    if (getSavedMoviesResStatus) {
      switch (getSavedMoviesResStatus) {
        case 200:
          setIsMoviesApiError(false);
          break;
        default:
          setIsMoviesApiError(true);
          break;
      };
    };
  };

  React.useEffect(() => {
    handleErrors();
  }, [getSavedMoviesResStatus])

  React.useEffect(() => {
    handleSearchSavedMoviesData();
  }, [])

  return (
    <main>
      <SearchForm
        onSubmit={handleSubmit}
      />
      {!isLoadingData && isSavedMoviesEmpty && (
        <Notification
          text={NO_MOVIES_FOUND_TEXT.SAVED_IS_EMPTY}
        />
      )}
      {!isLoadingData && isNoSavedMoviesFound && (
        <Notification
          text={NO_MOVIES_FOUND_TEXT.BASE_TEXT}
        />
      )}
      {isMoviesApiError && (
        <Notification
          text={MOVIES_ERRORS_TEXTS.BASE_ERROR}
        />
      )}
      <MoviesCardList
        data={savedMovies}
        locationPathname={location.pathname}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
  )
}

export default SavedMovies;
