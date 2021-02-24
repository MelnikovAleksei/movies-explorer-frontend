import React from 'react';

const PROMO_TITLE_TEXT = 'Учебный проект студента факультета Веб-разработки.';

function Promo(props) {
  return (
    <section
      className="promo"
    >
      <h1
        className="promo__title"
      >
        {PROMO_TITLE_TEXT}
      </h1>
      {props.children}
    </section>
  )
}

export default Promo;
