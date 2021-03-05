import React from 'react';
import { Link } from 'react-router-dom';

function FormAuthQuestion({
  settings,
}) {

  const STYLE_SETTINGS = {
    text: 'form-question-text',
    link: 'form-question-text__link',
  };

  return (
    <p
      className={STYLE_SETTINGS.text}
    >
      {settings.questionText}
      <Link
        className={STYLE_SETTINGS.link}
        to={settings.linkPath}
      >
        {settings.linkTitle}
      </Link>
    </p>
  )
}

export default FormAuthQuestion;
