import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function NotFound() {

  const history = useHistory();

  const handleGoBackBtnClick = () => {
    history.goBack();
  };

  const TITLE = '404';

  const MESSAGE = 'Страница не найдена';

  const GO_BACK_BUTTON_TITLE = 'Назад';

  const STYLE_SETTINGS = {
    main: 'not-found',
    container: 'not-found__container',
    title: 'not-found__title',
    message: 'not-found__subtitle',
    goBackButton: 'not-found__go-back-button',
  };

  return (
    <main
      className={STYLE_SETTINGS.main}
    >
      <div
        className={STYLE_SETTINGS.container}
      >
        <h1
          className={STYLE_SETTINGS.title}
        >
          {TITLE}
        </h1>
        <p
          className={STYLE_SETTINGS.message}
        >
          {MESSAGE}
        </p>
      </div>
      <button
          className={STYLE_SETTINGS.goBackButton}
          onClick={handleGoBackBtnClick}
        >
          {GO_BACK_BUTTON_TITLE}
        </button>
    </main>
  )
}

export default NotFound;
