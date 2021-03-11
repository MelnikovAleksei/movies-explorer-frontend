import React from 'react';

import AuthNavigation from '../AuthNavigation/AuthNavigation';

import Navigation from '../Navigation/Navigation';

import LogoLink from '../LogoLink/LogoLink';

import MenuButton from '../MenuButton/MenuButton';

function Header(props) {
  return (
    <header
      className="header"
    >
      <LogoLink />
        {props.loggedIn ? (
            <Navigation />
        )
        : (
            <AuthNavigation />
        )}
      {props.loggedIn && (
          <MenuButton
            onOpenMenu={props.onOpenMenu}
          />
      )}
    </header>
  )
}

export default Header;
