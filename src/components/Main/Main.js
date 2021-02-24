import React from 'react';

import Promo from '../Promo/Promo';

import NavTab from '../NavTab/NavTab';

function Main() {
  return (
    <main
      className="main"
    >
      <Promo>
        <NavTab />
      </Promo>
    </main>
  )
}

export default Main;
