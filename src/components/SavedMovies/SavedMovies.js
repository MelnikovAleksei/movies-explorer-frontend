import React from 'react';

import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {

  let location = useLocation();

  return (
    <main>
      <SearchForm />
      <MoviesCardList
        locationPathname={location.pathname}
      />
    </main>
  )
}

export default SavedMovies;
