import React from 'react';
import { Link } from 'react-router-dom';

function FormAuthQuestion({
  settings,
  children,
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
      {children}
    </p>
  )
}

export default FormAuthQuestion;
