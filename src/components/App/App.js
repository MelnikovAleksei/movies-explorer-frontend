import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from '../Header/Header';

import Modal from '../Modal/Modal';

import MobileNavigation from '../MobileNavigation/MobileNavigation';

import MobileAccountNavList from '../MobileAccountNavList/MobileAccountNavList';

import Main from '../Main/Main';

import Movies from '../Movies/Movies';

import Footer from '../Footer/Footer';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const handleSignup = () => {
    setLoggedIn(true);
  };

  const handleSignin = () => {
    setLoggedIn(true);
  };

  const setOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const exclusionRoutesPathsArray = [
    '/signin',
    '/signup',
  ];

  return (
    <div className="app">
      {useRouteMatch(exclusionRoutesPathsArray) ? null : (
        <Header
          loggedIn={loggedIn}
          onSignup={handleSignup}
          onSignin={handleSignin}
          onOpenMenu={setOpenMenu}
        />
      )}
      <Switch>
        <Route
          exact
          path="/"
        >
          <Main />
        </Route>
        <Route
          path="/movies"
        >
          <Movies />
        </Route>
        <Route
          path="/saved-movies"
        >
          <h1>/saved-movies</h1>
        </Route>
        <Route
          path="/profile"
        >
          <h1>/profile</h1>
        </Route>
        <Route
          path="/signup"
        >
          <h1>/signup</h1>
        </Route>
        <Route
          path="/signin"
        >
          <h1>/signin</h1>
        </Route>
      </Switch>
      {useRouteMatch(exclusionRoutesPathsArray) ? null : (
        <Footer />
      )}
      {menuIsOpen && (
        <Modal
          modalIsOpen={menuIsOpen}
          onModalClose={setCloseMenu}
        >
          <Modal.Header />
          <Modal.Body>
            <MobileNavigation
              onModalClose={setCloseMenu}
            />
          </Modal.Body>
          <Modal.Footer>
            <MobileAccountNavList
              onModalClose={setCloseMenu}
            />
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default App;
