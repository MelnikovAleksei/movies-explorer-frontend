import React from 'react';

function FormTitle({
  titleText,
}) {

  const FORM_TITLE_STYLES = {
    title: 'form-title',
  };

  return (
    <h1
      className={FORM_TITLE_STYLES.title}
    >
      {titleText}
    </h1>
  )
}

export default FormTitle;
