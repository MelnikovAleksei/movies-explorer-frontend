import React from 'react';

import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ onDeleteSavedMovie, savedMoviesData }) {

  let location = useLocation();

  return (
    <main>
      <SearchForm />
      <MoviesCardList
        data={savedMoviesData}
        locationPathname={location.pathname}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
  )
}

export default SavedMovies;
