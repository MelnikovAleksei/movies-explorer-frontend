import React from 'react';

import { useLocation } from 'react-router-dom';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';

function Movies() {

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

export default Movies;
