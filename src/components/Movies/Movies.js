import React from 'react';

import { useLocation } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';

function Movies() {

  let location = useLocation();

  const [isLoadingData, setIsLoadingData] = React.useState(true);

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
        <MoviesCardList
          locationPathname={location.pathname}
        />
      )}
    </main>
  )
}

export default Movies;
