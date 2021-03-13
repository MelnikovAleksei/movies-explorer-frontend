import React, { Children } from 'react';

import { ReactComponent as AddFavoritesButtonIcon } from '../../images/MoviesCard/add-favorites-button-icon.svg';
import { ReactComponent as AddFavoritesButtonIconMarked } from '../../images/MoviesCard/add-favorites-button-icon-marked.svg';
import { ReactComponent as RemoveFavoritesButtonIcon } from '../../images/MoviesCard/remove-favorites-button-icon.svg';

function FavoritesButton({
  className,
  ariaLabel,
  onClick,
  locationPathname,
  isSaved,
}) {



  return (
    <button
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {locationPathname === '/saved-movies' ? (
        <RemoveFavoritesButtonIcon />
      )
      :
      locationPathname === '/movies' && isSaved ? (
        <AddFavoritesButtonIconMarked />
      ) : (
        <AddFavoritesButtonIcon />
      )}
    </button>
  )
}

export default FavoritesButton;
