import React from 'react';

import AuthNavigation from '../AuthNavigation/AuthNavigation';

import Navigation from '../Navigation/Navigation';

import AccountLink from '../AccountLink/AccountLink';

import LogoLink from '../LogoLink/LogoLink';

import MenuButton from '../MenuButton/MenuButton';

function Header(props) {
  return (
    <header
      className="header"
    >
      <LogoLink />
      <div
        className="header__navigation-container"
      >
        {props.loggedIn ? (
            <Navigation />
        )
        : (
            <AuthNavigation
              onSignup={props.onSignup}
              onSignin={props.onSignin}
            />
        )}
        {props.loggedIn && (
            <AccountLink />
        )}
      </div>
      {props.loggedIn && (
          <MenuButton
            onOpenMenu={props.onOpenMenu}
          />
      )}
    </header>
  )
}

export default Header;
