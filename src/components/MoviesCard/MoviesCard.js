import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

import FavoritesButton from '../FavoritesButton/FavoritesButton';

import convertTime from '../../utils/convertTime';

function MoviesCard({
  data,
  locationPathname,
  onSaveMovie,
  onDeleteSavedMovie,
}) {

  const [isSaved, setIsSaved] = React.useState(data.saved);

  const handleClickFavoriteButton = () => {

    if (locationPathname === '/movies') {
      if (!isSaved) {
        setIsSaved(true);
        onSaveMovie({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailer: data.trailerLink,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          movieId: data.id,
          thumbnail: data.image,
        });
      } else {
        onDeleteSavedMovie(data._id);
        setIsSaved(false);
      }
    } else if (locationPathname === '/saved-movies') {
      onDeleteSavedMovie(data._id);
    }
  };


  const MOVIES_CARD_STYLE_SETTINGS = {
    article: 'movies-card-article',
    header: 'movies-card-article__header',
    textContainer: 'movies-card-article__text-container',
    title: 'movies-card-article__title',
    subtitle: 'movies-card-article__subtitle',
    imageSection: 'movies-card-article__image-section',
    image: 'movies-card-article__image',
    favoriteButton: 'movies-card-article__favorite-button',
    removeFavoritesButtonIcon: 'movies-card-article__favorite-button-icon-remove',
    addFavoritesButtonIcon: 'movies-card-article__favorite-button-icon-add',
  };

  return (
    <MainArticle
      id={data._id}
      className={MOVIES_CARD_STYLE_SETTINGS.article}
    >
      <MainArticle.Header
        className={MOVIES_CARD_STYLE_SETTINGS.header}
      >
        <div
          className={MOVIES_CARD_STYLE_SETTINGS.textContainer}
        >
          <h2
            className={MOVIES_CARD_STYLE_SETTINGS.title}
          >
            {data.nameRU}
          </h2>
          <p
            className={MOVIES_CARD_STYLE_SETTINGS.subtitle}
          >
            {convertTime(data.duration)}
          </p>
        </div>
        <FavoritesButton
          className={MOVIES_CARD_STYLE_SETTINGS.favoriteButton}
          onClick={handleClickFavoriteButton}
          locationPathname={locationPathname}
          isSaved={isSaved}
        />
      </MainArticle.Header>
      <MainArticle.Section
        className={MOVIES_CARD_STYLE_SETTINGS.imageSection}
      >
        <img
          className={MOVIES_CARD_STYLE_SETTINGS.image}
          alt={data.nameEN}
          src={data.image}
        />
      </MainArticle.Section>
    </MainArticle>
  )
}



export default MoviesCard;
