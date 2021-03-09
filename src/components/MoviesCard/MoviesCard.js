import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

import FavoritesButton from '../FavoritesButton/FavoritesButton';



function MoviesCard({
  data,
  locationPathname,
}) {

  const [isMarked, setIsMarked] = React.useState(data.isMarked);

  const handleMarkMovieCard = () => {
    setIsMarked(!isMarked);
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
      id={data.id}
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
            {data.title}
          </h2>
          <p
            className={MOVIES_CARD_STYLE_SETTINGS.subtitle}
          >
            {data.subtitle}
          </p>
        </div>
        <FavoritesButton
          className={MOVIES_CARD_STYLE_SETTINGS.favoriteButton}
          onClick={handleMarkMovieCard}
          locationPathname={locationPathname}
          isMarked={isMarked}
        />
      </MainArticle.Header>
      <MainArticle.Section
        className={MOVIES_CARD_STYLE_SETTINGS.imageSection}
      >
        <img
          className={MOVIES_CARD_STYLE_SETTINGS.image}
          alt={data.imageAlt}
          src={data.imageSrc}
        />
      </MainArticle.Section>
    </MainArticle>
  )
}



export default MoviesCard;
