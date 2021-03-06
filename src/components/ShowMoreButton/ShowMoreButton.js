import React from 'react';

function ShowMoreButton({
  onClick,
}) {

  const SHOW_MORE_BTN_STYLE_SETTINGS = {
    showMoreBtnContainer: 'show-more',
    ShowMoreBtn: 'show-more__button',
  }

  const SHOW_MORE_BTN_TITLE = 'Ещё';

  return (
    <div
      className={SHOW_MORE_BTN_STYLE_SETTINGS.showMoreBtnContainer}
    >
      <button
        className={SHOW_MORE_BTN_STYLE_SETTINGS.ShowMoreBtn}
        onClick={onClick}
      >
        {SHOW_MORE_BTN_TITLE}
      </button>
    </div>
  )
}

export default ShowMoreButton;
