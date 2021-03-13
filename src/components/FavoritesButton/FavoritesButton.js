import React, { Children } from 'react';

import { ReactComponent as AddFavoritesButtonIcon } from '../../images/MoviesCard/add-favorites-button-icon.svg';
import { ReactComponent as AddFavoritesButtonIconMarked } from '../../images/MoviesCard/add-favorites-button-icon-marked.svg';
import { ReactComponent as RemoveFavoritesButtonIcon } from '../../images/MoviesCard/remove-favorites-button-icon.svg';

function FavoritesButton({
  className,
  onClick,
  locationPathname,
  isSaved,
}) {

  const [buttonLabel, setButtonLabel] = React.useState('');

  const DELETE_LABEL = 'Удалить из избранного';
  const ADD_LEBEL = 'Добавить в избранное';

  React.useEffect(() => {
    if (locationPathname === '/saved-movies') {
      setButtonLabel(DELETE_LABEL);
    } else if (locationPathname === '/movies') {
      setButtonLabel(isSaved ? DELETE_LABEL : ADD_LEBEL)
    }
  }, [isSaved, locationPathname])

  return (
    <button
      className={className}
      aria-label={buttonLabel}
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
